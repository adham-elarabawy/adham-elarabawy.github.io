// <brain-viewer src="/assets/brain/" cut="axial|coronal|sagittal" edge="pearl|ice|north|aurora|ember" labels>
// My cortex inside a translucent head, from a 2021 MRI, with a slow sweeping cut showing the scan.
// Hover moves the cut, drag rotates. `edge` adds an iridescent sheen at the silhouettes;
// `labels` adds a monospace readout of the current slice.
import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";

// North palette (north-research.com): midnight navy ink, cool silver, on the white page
const SULCUS = new THREE.Color("#4a5268");
const GYRUS = new THREE.Color("#eef0f4");
const GLOW = new THREE.Color("#3a4256");
const INK = [0, 0, 28]; // #00001c

// Volume axes are (a0=superior, a1=anterior, a2=left/right); three.js uses x=a2, y=a0, z=a1.
// Each cut sweeps along one of them; `face` is the rig yaw that turns the cut face toward the camera.
const CUTS = {
  axial: { axis: 1, vol: 0, face: null, elevation: 0.62, dist: 420, lift: 0, tag: "AX" },
  coronal: { axis: 2, vol: 1, face: 0.35, elevation: 0.22, dist: 500, lift: -10, tag: "COR" },
  sagittal: { axis: 0, vol: 2, face: -Math.PI / 2 + 0.35, elevation: 0.22, dist: 500, lift: -10, tag: "SAG" },
};

// Iridescent edge palettes (cosine palettes: a + b * cos(2π(t + d))), washed toward silver
const EDGES = {
  pearl: { a: [0.78, 0.74, 0.84], b: [0.22, 0.2, 0.2], d: [0.0, 0.15, 0.3] },
  ice: { a: [0.5, 0.72, 0.86], b: [0.25, 0.22, 0.14], d: [0.55, 0.6, 0.68] },
  north: { a: [0.42, 0.48, 0.74], b: [0.25, 0.25, 0.22], d: [0.62, 0.64, 0.68] },
  aurora: { a: [0.45, 0.65, 0.7], b: [0.4, 0.35, 0.35], d: [0.3, 0.45, 0.62] },
  ember: { a: [0.82, 0.62, 0.52], b: [0.25, 0.25, 0.25], d: [0.0, 0.08, 0.2] },
};

const IRID_GLSL = `
  uniform vec3 pa; uniform vec3 pb; uniform vec3 pd;
  vec3 irid(float rim, float time) {
    return pa + pb * cos(6.2831 * (rim * 0.9 + time * 0.04 + pd));
  }`;

function paletteUniforms(edge) {
  const v = (x) => ({ value: new THREE.Vector3(...(x || [0, 0, 0])) });
  return { pa: v(edge?.a), pb: v(edge?.b), pd: v(edge?.d), time: { value: 0 } };
}

function unpack(bin, verts, tris, dims, withK) {
  const [nz, ny, nx] = dims;
  const q = new Uint16Array(bin, 0, verts * 3);
  const k = withK ? new Uint8Array(bin, verts * 6, verts) : null;
  const head = verts * 6 + (withK ? verts : 0);
  const index = new Uint16Array(bin, head + ((4 - (head % 4)) % 4), tris * 3);
  const pos = new Float32Array(verts * 3);
  for (let i = 0; i < verts; i++) {
    pos[i * 3] = (q[i * 3 + 2] / 65535) * nx - nx / 2;
    pos[i * 3 + 1] = (q[i * 3] / 65535) * nz - nz / 2;
    pos[i * 3 + 2] = (q[i * 3 + 1] / 65535) * ny - ny / 2;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  geo.setIndex(new THREE.BufferAttribute(index, 1));
  geo.computeVertexNormals();
  if (k) {
    const col = new Float32Array(verts * 3), c = new THREE.Color();
    for (let i = 0; i < verts; i++) {
      c.copy(SULCUS).lerp(GYRUS, Math.min(1, Math.max(0, (k[i] / 255 - 0.3) / 0.45)));
      col.set([c.r, c.g, c.b], i * 3);
    }
    geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
  }
  geo.computeBoundingBox();
  return geo;
}

const cache = new Map();
function loadData(base) {
  if (!cache.has(base)) cache.set(base, fetchData(base));
  return cache.get(base);
}

async function fetchData(base) {
  const [meta, cortexBin, headBin, img] = await Promise.all([
    fetch(base + "brain.json").then((r) => r.json()),
    fetch(base + "cortex.bin").then((r) => r.arrayBuffer()),
    fetch(base + "head.bin").then((r) => r.arrayBuffer()),
    new Promise((res, rej) => {
      const im = new Image();
      im.onload = () => res(im);
      im.onerror = rej;
      im.src = base + "slices.png";
    }),
  ]);
  const [nz, ny, nx] = meta.dims;
  const cortex = unpack(cortexBin, meta.cortex.verts, meta.cortex.tris, meta.dims, true);
  const head = unpack(headBin, meta.head.verts, meta.head.tris, meta.dims, false);

  // slice atlas -> Uint8 volume [nz][ny][nx]; 0 empty, 1-120 head tissue, 128-255 cortex interior
  const cv = document.createElement("canvas");
  cv.width = img.width;
  cv.height = img.height;
  const ctx = cv.getContext("2d", { willReadFrequently: true });
  ctx.drawImage(img, 0, 0);
  const px = ctx.getImageData(0, 0, img.width, img.height).data;
  const vol = new Uint8Array(nz * ny * nx);
  for (let z = 0; z < nz; z++) {
    const r0 = Math.floor(z / meta.cols) * ny, c0 = (z % meta.cols) * nx;
    for (let y = 0; y < ny; y++)
      for (let x = 0; x < nx; x++) vol[(z * ny + y) * nx + x] = px[((r0 + y) * img.width + c0 + x) * 4];
  }
  return { cortex, head, vol, dims: meta.dims };
}

function glowMaterial(clip, edge) {
  return new THREE.ShaderMaterial({
    defines: edge ? { IRID: "" } : {},
    uniforms: { color: { value: GLOW }, strength: { value: edge ? 0.55 : 0.3 }, ...paletteUniforms(edge) },
    vertexShader: `
      #include <common>
      #include <clipping_planes_pars_vertex>
      varying vec3 vN; varying vec3 vV; varying float vY;
      void main() {
        vY = position.y;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vN = normalize(normalMatrix * normal);
        vV = normalize(-mvPosition.xyz);
        gl_Position = projectionMatrix * mvPosition;
        #include <clipping_planes_vertex>
      }`,
    fragmentShader: `
      #include <clipping_planes_pars_fragment>
      uniform vec3 color; uniform float strength; uniform float time;
      varying vec3 vN; varying vec3 vV; varying float vY;
      ${IRID_GLSL}
      void main() {
        #include <clipping_planes_fragment>
        float rim = 1.0 - abs(dot(normalize(vN), normalize(vV)));
        // the scan stops at the jaw; fade the shell out before its flat bottom edge
        float a = pow(rim, 2.4) * strength * smoothstep(-80.0, -30.0, vY);
        vec3 c = color;
        #ifdef IRID
          c = irid(rim, time);
        #endif
        gl_FragColor = vec4(c * a, a); // premultiplied, so it composites cleanly over the page
      }`,
    clipping: true,
    clippingPlanes: [clip],
    transparent: true,
    depthWrite: false,
    premultipliedAlpha: true,
    side: THREE.DoubleSide,
  });
}

// Iridescent sheen drawn over the shaded cortex, strongest at its silhouette
function sheenMaterial(clip, edge) {
  return new THREE.ShaderMaterial({
    uniforms: paletteUniforms(edge),
    vertexShader: `
      #include <common>
      #include <clipping_planes_pars_vertex>
      varying vec3 vN; varying vec3 vV;
      void main() {
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vN = normalize(normalMatrix * normal);
        vV = normalize(-mvPosition.xyz);
        gl_Position = projectionMatrix * mvPosition;
        #include <clipping_planes_vertex>
      }`,
    fragmentShader: `
      #include <clipping_planes_pars_fragment>
      uniform float time;
      varying vec3 vN; varying vec3 vV;
      ${IRID_GLSL}
      void main() {
        #include <clipping_planes_fragment>
        float rim = 1.0 - abs(dot(normalize(vN), normalize(vV)));
        float a = smoothstep(0.3, 1.0, rim) * 0.85;
        gl_FragColor = vec4(irid(rim, time) * a, a);
      }`,
    clipping: true,
    clippingPlanes: [clip],
    transparent: true,
    depthWrite: false,
    depthFunc: THREE.LessEqualDepth,
    premultipliedAlpha: true,
    side: THREE.DoubleSide,
  });
}

// One slice of the volume as an image: width runs along `u`, height along `v` (both volume axes).
function sliceReader(vol, dims, volAxis) {
  const [nz, ny, nx] = dims;
  const stride = [ny * nx, nx, 1];
  const [u, v] = volAxis === 0 ? [2, 1] : volAxis === 1 ? [2, 0] : [1, 0];
  return {
    w: dims[u], h: dims[v], n: dims[volAxis],
    at: (i, x, y) => vol[i * stride[volAxis] + x * stride[u] + y * stride[v]],
  };
}

class BrainViewer extends HTMLElement {
  connectedCallback() {
    if (!this.style.display) this.style.display = "block";
    this.style.position = "relative";
    this.style.touchAction = "pan-y";
    const io = new IntersectionObserver((es) => {
      if (es.some((e) => e.isIntersecting)) {
        io.disconnect();
        this.init();
      }
    }, { rootMargin: "100px" });
    io.observe(this);
  }

  disconnectedCallback() {
    this.cleanup?.();
  }

  async init() {
    const base = this.getAttribute("src") || "/assets/brain/";
    const mode = CUTS[this.getAttribute("cut")] || CUTS.axial;
    const edge = EDGES[this.getAttribute("edge")] || null;
    const { cortex, head, vol, dims } = await loadData(base);
    const nz = dims[0];

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.localClippingEnabled = true;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    const el = renderer.domElement;
    el.style.cssText = "width:100%;height:100%;display:block;cursor:grab";
    this.appendChild(el);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(28, 1, 1, 3000);
    const target = new THREE.Vector3(0, mode.lift, 0);
    const camDir = new THREE.Vector3(0, mode.elevation, 1).normalize();
    scene.add(new THREE.HemisphereLight("#ffffff", "#8a93a8", 3.2));
    const key = new THREE.DirectionalLight("#ffffff", 2.6);
    key.position.set(120, 260, 180);
    scene.add(key);

    // cut along three.js axis `mode.axis`, removing everything on its + side
    const bb = cortex.boundingBox;
    const top = bb.max.getComponent(mode.axis), bottom = bb.min.getComponent(mode.axis);
    const normal = new THREE.Vector3().setComponent(mode.axis, -1);
    const localPlane = new THREE.Plane(normal, top + 5);
    const clip = localPlane.clone();
    const rig = new THREE.Group();
    scene.add(rig);
    rig.add(new THREE.Mesh(cortex, new THREE.MeshStandardMaterial({
      vertexColors: true, roughness: 0.55, side: THREE.DoubleSide, clippingPlanes: [clip],
    })));
    const sheen = edge ? new THREE.Mesh(cortex, sheenMaterial(clip, edge)) : null;
    if (sheen) {
      sheen.renderOrder = 1;
      rig.add(sheen);
    }
    const shell = new THREE.Mesh(head, glowMaterial(clip, edge));
    shell.renderOrder = 2;
    rig.add(shell);

    // cap: the MRI slice at the cut; cortex interior opaque, rest of the head translucent
    const S = sliceReader(vol, dims, mode.vol);
    const tex = new THREE.DataTexture(new Uint8Array(S.w * S.h * 4), S.w, S.h, THREE.RGBAFormat);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.magFilter = THREE.LinearFilter;
    tex.minFilter = THREE.LinearFilter;
    const cap = new THREE.Mesh(
      new THREE.PlaneGeometry(S.w, S.h),
      new THREE.MeshBasicMaterial({
        map: tex, transparent: true, depthWrite: false, side: THREE.DoubleSide,
        polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2,
      })
    );
    cap.renderOrder = 2;
    shell.renderOrder = 3;
    // orient the plane so texture u/v land on the right axes; -0.5 moves texel centers onto voxel centers
    let flipV = false;
    if (mode.vol === 0) { cap.rotation.x = -Math.PI / 2; cap.position.set(-0.5, 0, -0.5); flipV = true; }
    else if (mode.vol === 1) cap.position.set(-0.5, -0.5, 0);
    else { cap.rotation.y = -Math.PI / 2; cap.position.set(0, -0.5, -0.5); }
    rig.add(cap);

    let lastSlice = -1;
    const drawSlice = (i) => {
      if (i === lastSlice) return;
      lastSlice = i;
      const d = tex.image.data;
      for (let y = 0; y < S.h; y++) {
        const sy = flipV ? S.h - 1 - y : y;
        for (let x = 0; x < S.w; x++) {
          const v = S.at(i, x, sy), o = (y * S.w + x) * 4;
          if (v >= 128) {
            const t = (v - 128) / 127;
            d[o] = INK[0] + t * (224 - INK[0]); d[o + 1] = INK[1] + t * (228 - INK[1]); d[o + 2] = INK[2] + t * (233 - INK[2]);
            d[o + 3] = 255;
          } else if (v > 0) {
            const t = v / 120;
            d[o] = 58; d[o + 1] = 66; d[o + 2] = 86; d[o + 3] = 10 + t * 45;
          } else {
            d[o + 3] = 0;
          }
        }
      }
      tex.needsUpdate = true;
    };

    const label = this.hasAttribute("labels") ? document.createElement("span") : null;
    if (label) {
      label.style.cssText = "position:absolute;left:0;right:0;bottom:2px;text-align:center;pointer-events:none;" +
        "font:10px/1 ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:0.12em;color:#9ca3af";
      this.appendChild(label);
    }
    let lastLabel = "";
    const setLabel = (i) => {
      const text = `${mode.tag} ${i === null ? "———" : String(i).padStart(3, "0")}`;
      if (label && text !== lastLabel) label.textContent = lastLabel = text;
    };

    // interaction
    const spin = mode.face === null;
    let yaw = spin ? 0.7 : mode.face, pitch = 0, vyaw = 0, dragging = false, lastX = 0, lastY = 0, active = false;
    let cut = top + 5, cutTarget = cut, idleT = Math.random() * 6;
    const deepest = bottom + 0.3 * (top - bottom);
    const cutFromPointer = (e) => {
      const r = el.getBoundingClientRect();
      // axial: top of the box = top of the brain; side cuts: left-to-right
      const t = spin ? (e.clientY - r.top) / r.height : (e.clientX - r.left) / r.width;
      return top - 4 - Math.min(1, Math.max(0, (t - 0.15) / 0.7)) * (top - 4 - deepest);
    };
    el.addEventListener("pointerenter", (e) => { if (e.pointerType === "mouse") active = true; });
    el.addEventListener("pointerleave", () => { active = false; dragging = false; });
    el.addEventListener("pointerdown", (e) => {
      dragging = true; active = true; lastX = e.clientX; lastY = e.clientY;
      el.setPointerCapture(e.pointerId); el.style.cursor = "grabbing";
    });
    el.addEventListener("pointerup", (e) => {
      dragging = false; el.style.cursor = "grab";
      if (e.pointerType !== "mouse") active = false;
    });
    el.addEventListener("pointermove", (e) => {
      if (dragging) {
        const dx = e.clientX - lastX, dy = e.clientY - lastY;
        vyaw = dx * 0.01; yaw += vyaw;
        pitch = Math.max(-0.35, Math.min(0.5, pitch + dy * 0.003));
        lastX = e.clientX; lastY = e.clientY;
      } else if (active) cutTarget = cutFromPointer(e);
    });

    const resize = () => {
      const r = el.getBoundingClientRect();
      renderer.setSize(r.width, r.height, false);
      camera.aspect = r.width / r.height;
      camera.position.copy(target).addScaledVector(camDir, mode.dist / Math.min(1, camera.aspect));
      camera.lookAt(target);
      camera.updateProjectionMatrix();
    };
    const ro = new ResizeObserver(resize);
    ro.observe(this);
    resize();

    const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf, prev = performance.now();
    const tick = (now) => {
      const dt = Math.min(0.05, (now - prev) / 1000);
      prev = now;
      if (!reduceMotion && !active) idleT += dt;
      if (!dragging) {
        vyaw *= 0.95;
        // axial spins; side cuts sway gently around the view that faces their cut
        if (spin) yaw += vyaw + (reduceMotion || active ? 0 : dt * 0.22);
        else yaw += vyaw + (mode.face + 0.45 * Math.sin(idleT * 0.3) - yaw) * Math.min(1, dt * 1.5);
      }
      if (!active) {
        const s = 0.5 - 0.5 * Math.cos(idleT * 0.45);
        cutTarget = top + 5 - s * (top + 5 - (bottom + 0.4 * (top - bottom)));
      }
      rig.rotation.set(pitch, yaw, 0);
      rig.updateMatrixWorld();
      cut += (cutTarget - cut) * Math.min(1, dt * 7);
      // snap the clip to the slice actually shown so the cap and the cut cortex always line up
      const i = Math.round(cut + dims[mode.vol] / 2);
      cap.visible = cut < top && i >= 0 && i < S.n;
      localPlane.constant = cap.visible ? i - dims[mode.vol] / 2 : cut;
      clip.copy(localPlane).applyMatrix4(rig.matrixWorld);
      if (cap.visible) {
        drawSlice(i);
        cap.position.setComponent(mode.axis, i - dims[mode.vol] / 2);
      }
      setLabel(cap.visible ? i : null);
      const time = now / 1000;
      shell.material.uniforms.time.value = time;
      if (sheen) sheen.material.uniforms.time.value = time;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    this.cleanup = () => { cancelAnimationFrame(raf); ro.disconnect(); renderer.dispose(); };
  }
}

if (!customElements.get("brain-viewer")) customElements.define("brain-viewer", BrainViewer);
