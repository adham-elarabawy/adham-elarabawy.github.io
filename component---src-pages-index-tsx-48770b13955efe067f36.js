"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[245],{21:function(e){const t=/[\p{Lu}]/u,r=/[\p{Ll}]/u,a=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,o=/[_.\- ]+/,s=new RegExp("^"+o.source),i=new RegExp(o.source+n.source,"gu"),l=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const o=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):o(e);return e!==o(e)&&(e=((e,a,n)=>{let o=!1,s=!1,i=!1;for(let l=0;l<e.length;l++){const c=e[l];o&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),o=!1,i=s,s=!0,l++):s&&i&&r.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),i=s,s=!1,o=!0):(o=a(c)===c&&n(c)!==c,i=s,s=n(c)===c&&a(c)!==c)}return e})(e,o,c)),e=e.replace(s,""),e=n.preserveConsecutiveUppercase?((e,t)=>(a.lastIndex=0,e.replace(a,(e=>t(e)))))(e,o):o(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(i.lastIndex=0,l.lastIndex=0,e.replace(i,((e,r)=>t(r))).replace(l,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},2722:function(e,t,r){r.d(t,{L:function(){return g},M:function(){return E},P:function(){return x},S:function(){return H},_:function(){return i},a:function(){return s},b:function(){return d},g:function(){return u},h:function(){return l}});var a=r(5637),n=(r(21),r(5983)),o=r.n(n);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},s.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t.indexOf(r=o[a])>=0||(n[r]=e[r]);return n}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,r){const a={};let n="gatsby-image-wrapper";return"fixed"===r?(a.width=e,a.height=t):"constrained"===r&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:a}}function d(e,t,r,a,n){return void 0===n&&(n={}),s({},r,{loading:a,shouldLoad:e,"data-main-image":"",style:s({},n,{opacity:t?1:0})})}function u(e,t,r,a,n,o,i,l){const c={};o&&(c.backgroundColor=o,"fixed"===r?(c.width=a,c.height=n,c.backgroundColor=o,c.position="relative"):("constrained"===r||"fullWidth"===r)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),i&&(c.objectFit=i),l&&(c.objectPosition=l);const d=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const m=["children"],p=function(e){let{layout:t,width:r,height:n}=e;return"fullWidth"===t?a.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/r*100+"%"}}):"constrained"===t?a.createElement("div",{style:{maxWidth:r,display:"block"}},a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${n}'%20width='${r}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,r=i(e,m);return a.createElement(a.Fragment,null,a.createElement(p,s({},r)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],b=function(e){let{src:t,srcSet:r,loading:n,alt:o="",shouldLoad:l}=e,c=i(e,h);return a.createElement("img",s({},c,{decoding:"async",loading:n,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?r:void 0,"data-srcset":l?void 0:r,alt:o}))},y=function(e){let{fallback:t,sources:r=[],shouldLoad:n=!0}=e,o=i(e,f);const l=o.sizes||(null==t?void 0:t.sizes),c=a.createElement(b,s({},o,t,{sizes:l,shouldLoad:n}));return r.length?a.createElement("picture",null,r.map((e=>{let{media:t,srcSet:r,type:o}=e;return a.createElement("source",{key:`${t}-${o}-${r}`,type:o,media:t,srcSet:n?r:void 0,"data-srcset":n?void 0:r,sizes:l})})),c):c};var v;b.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},y.displayName="Picture",y.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const w=["fallback"],x=function(e){let{fallback:t}=e,r=i(e,w);return t?a.createElement(y,s({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):a.createElement("div",s({},r))};x.displayName="Placeholder",x.propTypes={fallback:n.string,sources:null==(v=y.propTypes)?void 0:v.sources,alt:function(e,t,r){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${r}\`. Validation failed.`):null}};const E=function(e){return a.createElement(a.Fragment,null,a.createElement(y,s({},e)),a.createElement("noscript",null,a.createElement(y,s({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=y.propTypes;const k=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],C=["style","className"],S=e=>e.replace(/\n/g,""),N=function(e,t,r){for(var a=arguments.length,n=new Array(a>3?a-3:0),s=3;s<a;s++)n[s-3]=arguments[s];return e.alt||""===e.alt?o().string.apply(o(),[e,t,r].concat(n)):new Error(`The "alt" prop is required in ${r}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},A={image:o().object.isRequired,alt:N},j=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],z=["style","className"],_=new Set;let L,R;const I=function(e){let{as:t="div",image:n,style:o,backgroundColor:d,className:u,class:m,onStartLoad:p,onLoad:g,onError:h}=e,f=i(e,j);const{width:b,height:y,layout:v}=n,w=c(b,y,v),{style:x,className:E}=w,k=i(w,z),C=(0,a.useRef)(),S=(0,a.useMemo)((()=>JSON.stringify(n.images)),[n.images]);m&&(u=m);const N=function(e,t,r){let a="";return"fullWidth"===e&&(a=`<div aria-hidden="true" style="padding-top: ${r/t*100}%;"></div>`),"constrained"===e&&(a=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${r}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),a}(v,b,y);return(0,a.useEffect)((()=>{L||(L=r.e(74).then(r.bind(r,74)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:r}=e;return R=t,{renderImageToString:t,swapPlaceholderImage:r}})));const e=C.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void _.add(S);if(R&&_.has(S))return;let t,a;return L.then((e=>{let{renderImageToString:r,swapPlaceholderImage:i}=e;C.current&&(C.current.innerHTML=r(s({isLoading:!0,isLoaded:_.has(S),image:n},f)),_.has(S)||(t=requestAnimationFrame((()=>{C.current&&(a=i(C.current,S,_,o,p,g,h))}))))})),()=>{t&&cancelAnimationFrame(t),a&&a()}}),[n]),(0,a.useLayoutEffect)((()=>{_.has(S)&&R&&(C.current.innerHTML=R(s({isLoading:_.has(S),isLoaded:_.has(S),image:n},f)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[n]),(0,a.createElement)(t,s({},k,{style:s({},x,o,{backgroundColor:d}),className:`${E}${u?` ${u}`:""}`,ref:C,dangerouslySetInnerHTML:{__html:N},suppressHydrationWarning:!0}))},$=(0,a.memo)((function(e){return e.image?(0,a.createElement)(I,e):null}));$.propTypes=A,$.displayName="GatsbyImage";const M=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function T(e){return function(t){let{src:r,__imageData:n,__error:o}=t,l=i(t,M);return o&&console.warn(o),n?a.createElement(e,s({image:n},l)):(console.warn("Image not loaded",r),null)}}const F=T((function(e){let{as:t="div",className:r,class:n,style:o,image:l,loading:m="lazy",imgClassName:p,imgStyle:h,backgroundColor:f,objectFit:b,objectPosition:y}=e,v=i(e,k);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(r=n),h=s({objectFit:b,objectPosition:y,backgroundColor:f},h);const{width:w,height:N,layout:A,images:j,placeholder:z,backgroundColor:_}=l,L=c(w,N,A),{style:R,className:I}=L,$=i(L,C),M={fallback:void 0,sources:[]};return j.fallback&&(M.fallback=s({},j.fallback,{srcSet:j.fallback.srcSet?S(j.fallback.srcSet):void 0})),j.sources&&(M.sources=j.sources.map((e=>s({},e,{srcSet:S(e.srcSet)})))),a.createElement(t,s({},$,{style:s({},R,o,{backgroundColor:f}),className:`${I}${r?` ${r}`:""}`}),a.createElement(g,{layout:A,width:w,height:N},a.createElement(x,s({},u(z,!1,A,w,N,_,b,y))),a.createElement(E,s({"data-gatsby-image-ssr":"",className:p},v,d("eager"===m,!1,M,m,h)))))})),D=function(e,t){for(var r=arguments.length,a=new Array(r>2?r-2:0),n=2;n<r;n++)a[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?o().number.apply(o(),[e,t].concat(a)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},P=new Set(["fixed","fullWidth","constrained"]),W={src:o().string.isRequired,alt:N,width:D,height:D,sizes:o().string,layout:e=>{if(void 0!==e.layout&&!P.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};F.displayName="StaticImage",F.propTypes=W;const H=T($);H.displayName="StaticImage",H.propTypes=W},6771:function(e,t,r){r.r(t),r.d(t,{Head:function(){return Oe},default:function(){return Ye}});var a=r(5637),n=r(2139);function o(e){let{title:t,description:r,pathname:o,children:s}=e;const{title:i,description:l,siteUrl:c}=(0,n.useStaticQuery)("3764592887").site.siteMetadata,d={title:t||i,description:r||l,url:`${c}${o||""}`};return a.createElement(a.Fragment,null,a.createElement("title",null,d.title),a.createElement("meta",{name:"description",content:d.description}),a.createElement("meta",{name:"og:title",content:d.title}),a.createElement("meta",{name:"og:description",content:d.description}),a.createElement("meta",{name:"og:url",content:d.url}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:d.title}),a.createElement("meta",{name:"twitter:description",content:d.description}),s)}var s=r(4147),i=r(1796),l=r(1729),c=r(2834),d=r(3278),u=r(4191),m=r(6104),p=r(6586);function g(e){const t=(0,a.createContext)(null);return[({children:e,value:r})=>(0,l.jsx)(t.Provider,{value:r,children:e}),()=>{const r=(0,a.useContext)(t);if(null===r)throw new Error(e);return r}]}const[h,f]=g("Grid component was not found in tree");var b=r(5392),y=r(7226),v=r(5e3),w=r(389);function x(e,t){return e in t.breakpoints?(0,w.px)(t.breakpoints[e]):(0,w.px)(e)}function E(e,t){const r=e.map((e=>({value:e,px:x(e,t)})));return r.sort(((e,t)=>e.px-t.px)),r}function k(e){return"object"==typeof e&&null!==e?"base"in e?e.base:void 0:e}var C=r(268);const S=(e,t)=>"content"===e?"auto":"auto"===e?"0rem":e?100/(t/e)+"%":void 0,N=(e,t,r)=>r||"auto"===e?"100%":"content"===e?"unset":S(e,t),A=(e,t)=>{if(e)return"auto"===e||t?"1":"auto"},j=(e,t)=>0===e?"0":e?100/(t/e)+"%":void 0;function z({span:e,order:t,offset:r,selector:a}){const n=(0,s.xd)(),o=f(),i=void 0===k(e)?12:k(e),c=(0,v.J)({"--col-order":k(t)?.toString(),"--col-flex-grow":A(i,o.grow),"--col-flex-basis":S(i,o.columns),"--col-width":"content"===i?"auto":void 0,"--col-max-width":N(i,o.columns,o.grow),"--col-offset":j(k(r),o.columns)}),d=(0,y.H)(n.breakpoints).reduce(((a,n)=>(a[n]||(a[n]={}),"object"==typeof t&&void 0!==t[n]&&(a[n]["--col-order"]=t[n]?.toString()),"object"==typeof e&&void 0!==e[n]&&(a[n]["--col-flex-grow"]=A(e[n],o.grow),a[n]["--col-flex-basis"]=S(e[n],o.columns),a[n]["--col-width"]="content"===e[n]?"auto":void 0,a[n]["--col-max-width"]=N(e[n],o.columns,o.grow)),"object"==typeof r&&void 0!==r[n]&&(a[n]["--col-offset"]=j(r[n],o.columns)),a)),{}),u=E((0,y.H)(d),n).filter((e=>(0,y.H)(d[e.value]).length>0)).map((e=>({query:`(min-width: ${n.breakpoints[e.value]})`,styles:d[e.value]})));return(0,l.jsx)(C.K,{styles:c,media:u,selector:a})}var _={root:"m_410352e9",inner:"m_dee7bd2f",col:"m_96bdd299"};const L={span:12},R=(0,p.P)(((e,t)=>{const r=(0,d.Y)("GridCol",L,e),{classNames:a,className:n,style:o,styles:s,vars:c,span:u,order:p,offset:g,...h}=r,y=f(),v=(0,m.C)();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(z,{selector:`.${v}`,span:u,order:p,offset:g}),(0,l.jsx)(i.a,{ref:t,...y.getStyles("col",{className:(0,b.A)(n,v),style:o,classNames:a,styles:s}),...h})]})}));R.classes=_,R.displayName="@mantine/core/GridCol";var I=r(178);function $({gutter:e,selector:t}){const r=(0,s.xd)(),a=(0,v.J)({"--grid-gutter":(0,I.GY)(k(e))}),n=(0,y.H)(r.breakpoints).reduce(((t,r)=>(t[r]||(t[r]={}),"object"==typeof e&&void 0!==e[r]&&(t[r]["--grid-gutter"]=(0,I.GY)(e[r])),t)),{}),o=E((0,y.H)(n),r).filter((e=>(0,y.H)(n[e.value]).length>0)).map((e=>({query:`(min-width: ${r.breakpoints[e.value]})`,styles:n[e.value]})));return(0,l.jsx)(C.K,{styles:a,media:o,selector:t})}const M={gutter:"md",grow:!1,columns:12},T=(0,c.V)(((e,{justify:t,align:r,overflow:a})=>({root:{"--grid-justify":t,"--grid-align":r,"--grid-overflow":a}}))),F=(0,p.P)(((e,t)=>{const r=(0,d.Y)("Grid",M,e),{classNames:a,className:n,style:o,styles:s,unstyled:c,vars:p,grow:g,gutter:f,columns:b,align:y,justify:v,children:w,...x}=r,E=(0,u.I)({name:"Grid",classes:_,props:r,className:n,style:o,classNames:a,styles:s,unstyled:c,vars:p,varsResolver:T}),k=(0,m.C)();return(0,l.jsxs)(h,{value:{getStyles:E,grow:g,columns:b},children:[(0,l.jsx)($,{selector:`.${k}`,...r}),(0,l.jsx)(i.a,{ref:t,...E("root",{className:k}),...x,children:(0,l.jsx)("div",{...E("inner"),children:w})})]})}));F.classes=_,F.displayName="@mantine/core/Grid",F.Col=R;var D=r(4325),P=r(6892),W=r(6037),H=r(2591);const Y=["h1","h2","h3","h4","h5","h6"];var O={root:"m_8a5d1357"};const q={order:1},G=(0,c.V)(((e,{order:t,size:r,lineClamp:a,textWrap:n})=>{const o=function(e,t){const r=void 0!==t?t:`h${e}`;return Y.includes(r)?{fontSize:`var(--mantine-${r}-font-size)`,fontWeight:`var(--mantine-${r}-font-weight)`,lineHeight:`var(--mantine-${r}-line-height)`}:{fontSize:(0,H.D)(r),fontWeight:`var(--mantine-h${e}-font-weight)`,lineHeight:`var(--mantine-h${e}-line-height)`}}(t,r);return{root:{"--title-fw":o.fontWeight,"--title-lh":o.lineHeight,"--title-fz":o.fontSize,"--title-line-clamp":"number"==typeof a?a.toString():void 0,"--title-text-wrap":n}}})),U=(0,p.P)(((e,t)=>{const r=(0,d.Y)("Title",q,e),{classNames:a,className:n,style:o,styles:s,unstyled:c,order:m,vars:p,size:g,variant:h,lineClamp:f,textWrap:b,mod:y,...v}=r,w=(0,u.I)({name:"Title",props:r,classes:O,className:n,style:o,classNames:a,styles:s,unstyled:c,vars:p,varsResolver:G});return[1,2,3,4,5,6].includes(m)?(0,l.jsx)(i.a,{...w("root"),component:`h${m}`,variant:h,ref:t,mod:[{order:m,"data-line-clamp":"number"==typeof f},y],size:g,...v}):null}));U.classes=O,U.displayName="@mantine/core/Title";var B=r(4012),J=r(3933),V={root:"m_849cf0da"};const X={underline:"hover"},Z=(0,J.v)(((e,t)=>{const{underline:r,className:a,unstyled:n,mod:o,...s}=(0,d.Y)("Anchor",X,e);return(0,l.jsx)(B.E,{component:"a",ref:t,className:(0,b.A)({[V.root]:!n},a),...s,mod:[{underline:r},o],__staticSelector:"Anchor",unstyled:n})}));Z.classes=V,Z.displayName="@mantine/core/Anchor";var Q="Welcome-module--avatarZoom--710e5",K=r(2722);function ee(){(0,s.xd)();const e=(0,D.U)("(max-width: 1200px)");return a.createElement(a.Fragment,null,a.createElement(P.o,null,a.createElement(W.m,{label:"Hello!",position:"center"},a.createElement("div",null," ",a.createElement(K.S,{src:"../../images/avatar.png",className:Q,width:150,style:{borderRadius:"50%"},alt:"",quality:95,__imageData:r(838)})))),a.createElement(U,{ta:"center",mt:10,style:{fontSize:e?32:46,fontWeight:700,letterSpacing:-2,color:"var(--mantine-color-text)"}},"Adham Elarabawy"),a.createElement(B.E,{size:"lg",color:"dimmed",ta:"center",maw:580,mx:"auto",mt:"l"},"Research Engineer at ",a.createElement(Z,{href:"https://π.com",target:"_blank",rel:"noopener noreferrer"},"Physical Intelligence")))}var te=r(3665),re=r(2959),ae=r(913),ne=r(9658),oe=r(6447),se=r(6424);function ie(){return a.createElement(te.Y,{gap:0,mt:1,justify:"center",wrap:"nowrap"},a.createElement(re.M,{size:"lg",color:"gray",variant:"subtle",component:"a",href:"https://github.com/adham-elarabawy",target:"_blank",rel:"noopener noreferrer"},a.createElement(ae.A,{style:{width:18,height:18},stroke:1.5})),a.createElement(re.M,{size:"lg",color:"gray",variant:"subtle",component:"a",href:"https://www.linkedin.com/in/adham-elarabawy/",target:"_blank",rel:"noopener noreferrer"},a.createElement(ne.A,{style:{width:18,height:18},stroke:1.5})),a.createElement(re.M,{size:"lg",color:"gray",variant:"subtle",component:"a",href:"https://www.youtube.com/channel/UCMXZwXFwd7tI7pO7vUo5iuQ",target:"_blank",rel:"noopener noreferrer"},a.createElement(oe.A,{style:{width:18,height:18},stroke:1.5})),a.createElement(re.M,{size:"lg",color:"gray",variant:"subtle",component:"a",href:"https://twitter.com/adhamelarabawy",target:"_blank",rel:"noopener noreferrer"},a.createElement(se.A,{style:{width:18,height:18},stroke:1.5})))}var le=r(9595);const ce={a:.95,b:.7,c:.6,d:3.5,e:.25,f:.1};function de(e){const t=e.startsWith("#")?parseInt(e.substring(1),16):parseInt(e.replace(/[^0-9a-f]/gi,""),16);return[(t>>16&255)/255,(t>>8&255)/255,(255&t)/255]}function ue(e,t,r,a){return{dx:(r-a.b)*e-a.d*t,dy:a.d*e+(r-a.b)*t,dz:a.c+a.a*r-Math.pow(r,3)/3-(Math.pow(e,2)+Math.pow(t,2))*(1+a.e*r)+a.f*r*Math.pow(e,3)}}function me(e){let{params:t=ce,noiseFactor:r=.001,wobble:n={frequency:.5,amplitude:.1},particleCounts:o={baseActive:4e3,hoverActive:4e3,trail:5e4},color:s="#FFFFFF",backgroundColor:i="#000000"}=e;const l=(0,a.useRef)(null),{0:c,1:d}=(0,a.useState)(!1),{0:u,1:m}=(0,a.useState)(!1),{0:p,1:g}=(0,a.useState)(null);return(0,a.useEffect)((()=>{if(!l.current)return;const e=l.current,a=new le.Z58,u=new le.ubm(60,1,.1,1e3),p=new le.JeP({antialias:!0,alpha:!0});p.setPixelRatio(window.devicePixelRatio);const h=Math.min(e.clientWidth,e.clientHeight);p.setSize(h,h);const[f,b,y]=de(i);p.setClearColor(new le.Q1f(f,b,y),1),e.appendChild(p.domElement);const v=o.baseActive,w=o.hoverActive,x=w,E=o.trail,k=new le.LoY,C=new Float32Array(3*x),S=new Float32Array(3*x),N=new Float32Array(x);let A=v;const j=new le.LoY,z=new Float32Array(3*E),_=new Float32Array(3*E),L=new Float32Array(E);function R(e,r,a,n,o,i){void 0===i&&(i={});const{scale:l=1.5,particleSize:c=.04}=i;let d=.1*(Math.random()-.5),u=.1*(Math.random()-.5),m=.1*(Math.random()-.5);const[p,g,h]=de(s),f=.01,b=.025;for(let s=0;s<r;s++){const r=3*(e+s);d+=(Math.random()-.5)*b,u+=(Math.random()-.5)*b,m+=(Math.random()-.5)*b;const{dx:i,dy:y,dz:v}=ue(d,u,m,t);d+=i*f,u+=y*f,m+=v*f,a[r]=d*l,a[r+1]=u*l,a[r+2]=m*l,n[r]=p,n[r+1]=g,n[r+2]=h,o[e+s]=c}}!function(){const e=x/8;for(let t=0;t<8;t++)R(t*e,e,C,S,N);for(let t=0;t<8;t++)R(t*(E/8),E/8,z,_,L)}(),k.setAttribute("position",new le.THS(C,3)),k.setAttribute("color",new le.THS(S,3)),k.setAttribute("size",new le.THS(N,1)),j.setAttribute("position",new le.THS(z,3)),j.setAttribute("color",new le.THS(_,3)),j.setAttribute("size",new le.THS(L,1)),k.setDrawRange(0,A);const I=new le.BH$({size:.035,vertexColors:!0,transparent:!0,opacity:.8,sizeAttenuation:!0}),$=new le.BH$({size:.02,vertexColors:!0,transparent:!0,opacity:.2,sizeAttenuation:!0}),M=new le.ONl(k,I),T=new le.ONl(j,$);M.position.set(0,0,0),T.position.set(0,0,0);const F=new le.YJl;F.position.set(0,-1,0);const D=-Math.PI/2;F.rotation.x=D,u.position.set(0,0,9),u.lookAt(0,-1,0),u.up.set(0,1,0),F.add(M),F.add(T),a.add(F);const P=8e-4;let W=0,H=P,Y=P,O=9,q=9;function G(){d(!0),Y=2e-4,q=4,m(!0)}function U(){d(!1),Y=P,q=9,m(!1)}const B=t=>{const r=e.getBoundingClientRect();g({x:t.clientX-r.left,y:t.clientY-r.top})};function J(){if(!l.current)return;const e=l.current,t=Math.min(e.clientWidth,e.clientHeight);p.setSize(t,t)}return e.addEventListener("mouseenter",G),e.addEventListener("mouseleave",U),e.addEventListener("mousemove",B),window.addEventListener("resize",J),function e(){requestAnimationFrame(e),W+=.01,O+=.05*(q-O),u.position.setZ(O);const o=Math.sin(W*n.frequency)*n.amplitude,s=Math.cos(W*n.frequency)*n.amplitude;F.rotation.x=D+o,F.rotation.y=s,function(){H+=.1*(Y-H);const e=H;function a(a,n,o){void 0===o&&(o={});const{speedMultiplier:s=1,updateSizes:i=!1}=o;for(let l=0;l<n;l++){const n=3*l;let o=a[n]/2,c=a[n+1]/2,d=a[n+2]/2;const{dx:u,dy:m,dz:p}=ue(o,c,d,t);a[n]=2*(o+u*e*s+(Math.random()-.5)*r),a[n+1]=2*(c+m*e*s+(Math.random()-.5)*r),a[n+2]=2*(d+p*e*s+(Math.random()-.5)*r),i&&(N[l]=.02*(1+.3*Math.sin(4*W+l)))}}a(C,x,{updateSizes:!0}),a(z,E,{speedMultiplier:.2}),c&&A<w?(A=Math.min(w,A+50),k.setDrawRange(0,A)):!c&&A>v&&(A=Math.max(v,A-50),k.setDrawRange(0,A)),k.attributes.position.needsUpdate=!0,k.attributes.size.needsUpdate=!0,j.attributes.position.needsUpdate=!0}(),p.render(a,u)}(),()=>{window.removeEventListener("resize",J),e.removeEventListener("mouseenter",G),e.removeEventListener("mouseleave",U),e.removeEventListener("mousemove",B),p.dispose()}}),[]),a.createElement("div",{ref:l,style:{width:"100%",height:"100%",position:"relative",overflow:"hidden",cursor:"crosshair"}},u&&p&&a.createElement("div",{style:{position:"absolute",left:p.x+10,top:p.y+10,pointerEvents:"none",zIndex:1e3,backgroundColor:"rgba(0, 0, 0, 0.4)",padding:"8px 12px",borderRadius:"4px",fontSize:"12px",color:"white",boxShadow:"0 2px 4px rgba(0,0,0,0.1)"}},a.createElement("div",{style:{fontWeight:600,marginBottom:"4px"}},"Aizawa Attractor"),a.createElement("div",{style:{color:"rgba(255,255,255,0.9)",fontSize:"11px"}},"a: ",t.a.toFixed(2),", b: ",t.b.toFixed(2),", c: ",t.c.toFixed(2),", d: ",t.d.toFixed(2),", e: ",t.e.toFixed(2),", f: ",t.f.toFixed(2))))}var pe={root:"m_1b7284a3"};const ge={},he=(0,c.V)(((e,{radius:t,shadow:r})=>({root:{"--paper-radius":void 0===t?void 0:(0,I.nJ)(t),"--paper-shadow":(0,I.dh)(r)}}))),fe=(0,J.v)(((e,t)=>{const r=(0,d.Y)("Paper",ge,e),{classNames:a,className:n,style:o,styles:s,unstyled:c,withBorder:m,vars:p,radius:g,shadow:h,variant:f,mod:b,...y}=r,v=(0,u.I)({name:"Paper",props:r,classes:pe,className:n,style:o,classNames:a,styles:s,unstyled:c,vars:p,varsResolver:he});return(0,l.jsx)(i.a,{ref:t,mod:[{"data-with-border":m},b],...v("root"),variant:f,...y})}));fe.classes=pe,fe.displayName="@mantine/core/Paper";const[be,ye]=g("Card component was not found in tree");var ve={root:"m_e615b15f",section:"m_599a2148"};const we={},xe=(0,J.v)(((e,t)=>{const r=(0,d.Y)("CardSection",we,e),{classNames:a,className:n,style:o,styles:s,vars:c,withBorder:u,inheritPadding:m,mod:p,...g}=r,h=ye();return(0,l.jsx)(i.a,{ref:t,mod:[{"with-border":u,"inherit-padding":m},p],...h.getStyles("section",{className:n,style:o,styles:s,classNames:a}),...g})}));xe.classes=ve,xe.displayName="@mantine/core/CardSection";const Ee={},ke=(0,c.V)(((e,{padding:t})=>({root:{"--card-padding":(0,I.GY)(t)}}))),Ce=(0,J.v)(((e,t)=>{const r=(0,d.Y)("Card",Ee,e),{classNames:n,className:o,style:s,styles:i,unstyled:c,vars:m,children:p,padding:g,...h}=r,f=(0,u.I)({name:"Card",props:r,classes:ve,className:o,style:s,classNames:n,styles:i,unstyled:c,vars:m,varsResolver:ke}),b=a.Children.toArray(p),y=b.map(((e,t)=>"object"==typeof e&&e&&"type"in e&&e.type===xe?(0,a.cloneElement)(e,{"data-first-section":0===t||void 0,"data-last-section":t===b.length-1||void 0}):e));return(0,l.jsx)(be,{value:{getStyles:f},children:(0,l.jsx)(fe,{ref:t,unstyled:c,...f("root"),...h,children:y})})}));Ce.classes=ve,Ce.displayName="@mantine/core/Card",Ce.Section=xe;var Se=r(8686),Ne={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"};const Ae={},je=(0,c.V)(((e,{radius:t,color:r,gradient:a,variant:n,size:o,autoContrast:s})=>{const i=e.variantColorResolver({color:r||e.primaryColor,theme:e,gradient:a,variant:n||"filled",autoContrast:s});return{root:{"--badge-height":(0,I.YC)(o,"badge-height"),"--badge-padding-x":(0,I.YC)(o,"badge-padding-x"),"--badge-fz":(0,I.YC)(o,"badge-fz"),"--badge-radius":void 0===t?void 0:(0,I.nJ)(t),"--badge-bg":r||n?i.background:void 0,"--badge-color":r||n?i.color:void 0,"--badge-bd":r||n?i.border:void 0,"--badge-dot-color":"dot"===n?(0,Se.r)(r,e):void 0}}})),ze=(0,J.v)(((e,t)=>{const r=(0,d.Y)("Badge",Ae,e),{classNames:a,className:n,style:o,styles:s,unstyled:c,vars:m,radius:p,color:g,gradient:h,leftSection:f,rightSection:b,children:y,variant:v,fullWidth:w,autoContrast:x,circle:E,mod:k,...C}=r,S=(0,u.I)({name:"Badge",props:r,classes:Ne,className:n,style:o,classNames:a,styles:s,unstyled:c,vars:m,varsResolver:je});return(0,l.jsxs)(i.a,{variant:v,mod:[{block:w,circle:E},k],...S("root",{variant:v}),ref:t,...C,children:[f&&(0,l.jsx)("span",{...S("section"),"data-position":"left",children:f}),(0,l.jsx)("span",{...S("label"),children:y}),b&&(0,l.jsx)("span",{...S("section"),"data-position":"right",children:b})]})}));ze.classes=Ne,ze.displayName="@mantine/core/Badge";var _e="ProjectCard-module--card--634a6",Le="ProjectCard-module--description--69b8a",Re="ProjectCard-module--descriptionContainer--42fd4",Ie="ProjectCard-module--section--871be";const $e={width:"100%",height:"300px",overflow:"hidden",display:"flex",justifyContent:"center",alignItems:"center"},Me={width:"102%",height:"102%",objectFit:"cover",objectPosition:"center"},Te=e=>{let{src:t,alt:r}=e;return a.createElement("div",{style:$e},a.createElement("img",{src:t,alt:r,style:Me}))},Fe={robotics:"#9775fa",nlp:"#ff8787","machine learning":"#20c997",paper:"blue",github:"gray"},De={"in-progress":"yellow",maintained:"blue",done:"green"};function Pe(e){let{project:t,theme:r}=e;(e=>{const t=new Date(e);isNaN(t.getTime())||t.toLocaleDateString("en-US",{year:"numeric",month:"long"})})(t.date);const o=e=>{let{children:r}=e;return t.url_override?a.createElement("a",{href:t.url_override,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"}},r):a.createElement(n.Link,{to:t.slug,style:{textDecoration:"none"}},r)};return a.createElement(o,null,a.createElement(Ce,{withBorder:!0,radius:"md",p:0,className:_e,style:{backgroundColor:"transparent",overflow:"hidden",border:"1px solid "+("dark"===r.colorScheme?"rgba(255, 255, 255, 0.15)":"rgba(0, 0, 0, 0.1)")}},a.createElement("div",{style:{height:"300px"}},a.createElement(Te,{src:t.featured_image,alt:t.title})),a.createElement("div",{className:Ie,style:{background:"dark"===r.colorScheme?"rgba(255, 255, 255, 0.08)":"rgba(255, 255, 255, 0.85)",backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",boxShadow:"dark"===r.colorScheme?"inset 0 1px 0 0 rgba(255, 255, 255, 0.1)":"inset 0 1px 0 0 rgba(255, 255, 255, 0.9)",position:"relative"}},t.state&&a.createElement(ze,{variant:"dot",size:"sm",color:De[t.state],style:{position:"absolute",top:"0.5rem",right:"0.5rem",textTransform:"lowercase",fontFamily:"monospace",letterSpacing:"-0.02em",backdropFilter:"blur(8px)",backgroundColor:"dark"===r.colorScheme?"rgba(0, 0, 0, 0.5)":"rgba(255, 255, 255, 0.5)",border:"1px solid "+("dark"===r.colorScheme?"rgba(255, 255, 255, 0.2)":"rgba(0, 0, 0, 0.1)")}},t.state),a.createElement(te.Y,{position:"apart",mb:4},a.createElement(B.E,{size:"lg",weight:900,style:{letterSpacing:"-0.01em",color:"dark"===r.colorScheme?"rgba(255, 255, 255, 0.95)":"rgba(0, 0, 0, 0.9)"}},t.title)),a.createElement(B.E,{size:"xs",mb:"xs",style:{fontFamily:"monospace",color:"dark"===r.colorScheme?"rgba(255, 255, 255, 0.5)":"rgba(0, 0, 0, 0.5)",letterSpacing:"-0.02em"}},new Date(t.date).toLocaleDateString("en-US",{year:"numeric",month:"2-digit"}).replace(/\//g,".")),a.createElement("div",{className:Re},a.createElement(B.E,{className:Le,style:{color:"dark"===r.colorScheme?"rgba(255, 255, 255, 0.7)":"rgba(0, 0, 0, 0.7)",fontSize:"0.9rem",lineHeight:"1.4"}},t.description)),a.createElement(te.Y,{spacing:8,mt:"auto"},t.type&&Array.isArray(t.type)&&t.type.map(((e,t)=>a.createElement(ze,{key:t,variant:"light",radius:"sm",size:"sm",style:{backgroundColor:`${Fe[e]}15`,color:Fe[e],border:`1px solid ${Fe[e]}30`,textTransform:"lowercase",fontFamily:"monospace",letterSpacing:"-0.02em"}},e)))))))}const We=a.memo((e=>{let{projects:t,textColor:r,backgroundColor:n,isMobile:o=!1,scrollRef:i}=e;const l=(0,a.useMemo)((()=>({CARD_WIDTH:400,CARD_GAP:32})),[]),c=(0,s.xd)(),d=(0,a.useRef)(null),{0:u,1:m}=(0,a.useState)(0),{0:p,1:g}=(0,a.useState)(!1),h=(0,a.useCallback)((()=>{if(!d.current)return;const{scrollLeft:e,clientWidth:r,scrollWidth:a}=d.current;if(Math.abs(e+r-a)<10)return t.length-1;const n=Math.round(e/(l.CARD_WIDTH+l.CARD_GAP));return Math.min(n,t.length-1)}),[l,t.length]),f=(0,a.useCallback)((()=>{const e=h();void 0!==e&&m(e)}),[h]),b=(0,a.useCallback)((e=>{if(d.current){const t=e*(l.CARD_WIDTH+l.CARD_GAP);d.current.scrollTo({left:t,behavior:"smooth"}),m(e)}}),[l]),y=(0,a.useMemo)((()=>Array.from({length:t.length},((e,t)=>({active:t===u,onClick:()=>b(t)})))),[t.length,u,b]);(0,a.useEffect)((()=>{const e=d.current;if(!e)return;const t=new ResizeObserver((()=>{g(e.scrollWidth>e.clientWidth)}));return e.addEventListener("scroll",f),t.observe(e),()=>{e.removeEventListener("scroll",f),t.unobserve(e)}}),[f]);const v=(0,a.useCallback)((e=>{e.preventDefault(),d.current&&(d.current.scrollLeft+=e.deltaY,f())}),[f]);return(0,a.useEffect)((()=>{if(null!=i&&i.current){const e=e=>{e.preventDefault(),d.current&&(d.current.scrollLeft+=e.deltaY,f())};return i.current.addEventListener("wheel",e,{passive:!1}),()=>{var t;null===(t=i.current)||void 0===t||t.removeEventListener("wheel",e)}}}),[f,i]),a.createElement("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center"},onWheel:v},a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"520px"}},a.createElement("div",{ref:d,style:{width:"100%",overflowX:"auto",overflowY:"hidden",msOverflowStyle:"none",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"},"::-webkit-scrollbar":{display:"none"}}},a.createElement("div",{style:{display:"inline-flex",alignItems:"center",gap:`${l.CARD_GAP}px`,padding:`0 ${l.CARD_GAP}px`,minHeight:"520px",width:`${t.length*(l.CARD_WIDTH+l.CARD_GAP)+l.CARD_GAP}px`}},t.map((e=>a.createElement("div",{key:e.id,className:"project-card",style:{width:`${l.CARD_WIDTH}px`,flex:"none",transition:"opacity 0.3s ease-out",whiteSpace:"normal"}},a.createElement(Pe,{project:{...e.frontmatter,url_override:e.frontmatter.url_override},theme:c}))))))),a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"1rem"}},a.createElement("div",{style:{display:"inline-flex",gap:"8px",padding:"8px 12px",backgroundColor:"dark"===c.colorScheme?"rgba(0, 0, 0, 0.4)":"rgba(255, 255, 255, 0.4)",backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",borderRadius:"12px",border:"1px solid "+("dark"===c.colorScheme?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"),boxShadow:"dark"===c.colorScheme?"0 4px 20px rgba(0, 0, 0, 0.3)":"0 4px 20px rgba(0, 0, 0, 0.1)"}},y.map(((e,t)=>a.createElement("div",{key:t,onClick:e.onClick,style:{width:e.active?"32px":"8px",height:"8px",borderRadius:"4px",background:"dark"===c.colorScheme?e.active?"linear-gradient(45deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.4))":"rgba(255, 255, 255, 0.2)":e.active?"linear-gradient(45deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4))":"rgba(0, 0, 0, 0.2)",cursor:"pointer",transition:"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"}}))))))}));var He=r(8237);function Ye(e){let{data:t}=e;const r=(0,s.xd)(),n=(0,D.U)("(max-width: 1200px)"),o="dark"===r.colorScheme?r.colors.dark[0]:r.colors.gray[7],l="dark"===r.colorScheme?r.colors.dark[7]:r.colors.gray[0],c="dark"===r.colorScheme?r.colors.dark[8]:r.colors.gray[1],d="dark"===r.colorScheme?"rgba(255, 255, 255, 0.05)":"rgba(0, 0, 0, 0.05)",u=(0,a.useRef)(null),m=t.allMdx.nodes.sort(((e,t)=>e.frontmatter.sort_id-t.frontmatter.sort_id));return(0,a.useEffect)((()=>{if(!n)return document.body.style.overflow="hidden",()=>{document.body.style.overflow="auto"}}),[n]),n?a.createElement("div",{style:{width:"100%",minHeight:"100vh",backgroundColor:c,display:"flex",flexDirection:"column",backgroundImage:`\n          linear-gradient(${d} 0.5px, transparent 0.5px),\n          linear-gradient(90deg, ${d} 0.5px, transparent 0.5px)\n        `,backgroundSize:"20px 20px",backgroundPosition:"10px 10px"}},a.createElement("div",{style:{backgroundColor:l,boxShadow:"0 2px 8px rgba(0, 0, 0, 0.08)",zIndex:1,position:"relative",padding:"0.25rem"}},a.createElement("div",{style:{position:"relative",zIndex:2,color:o,backdropFilter:"blur(3px)",background:"dark"===r.colorScheme?"rgba(0, 0, 0, 0.1)":"rgba(255, 255, 255, 0.1)",margin:"0.25rem",borderRadius:r.radius.md,padding:"0.5rem"}},a.createElement(ee,null),a.createElement(i.a,{mt:"0.25rem"},a.createElement(ie,null)))),a.createElement(i.a,{style:{padding:"0 5%",margin:"0 auto",maxWidth:"1600px",position:"relative",marginTop:"2rem"}},a.createElement(F,{grow:!0,justify:"center",gutter:"xl"},m.map((e=>a.createElement(F.Col,{key:e.id,span:12,sm:6,style:{display:"flex",justifyContent:"center"}},a.createElement(i.a,{sx:{width:"100%",maxWidth:"400px",display:"flex",justifyContent:"center"}},a.createElement("div",{style:{width:"100%"}},a.createElement(Pe,{project:{...e.frontmatter,url_override:e.frontmatter.url_override},theme:r})))))))),a.createElement(He.w,null)):a.createElement("div",{style:{width:"100%",height:"100vh",backgroundColor:l,display:"flex",flexDirection:"column"}},a.createElement("div",{style:{flex:1,display:"flex",flexDirection:"row",position:"relative",overflow:"hidden"}},a.createElement("div",{ref:u,style:{width:"35%",height:"100%",position:"relative",backgroundColor:l,boxShadow:"2px 0 8px rgba(0, 0, 0, 0.08)",zIndex:1,display:"flex",flexDirection:"column",gap:"2rem"}},a.createElement("div",{style:{position:"relative",zIndex:2,color:o,backdropFilter:"blur(3px)",background:"dark"===r.colorScheme?"rgba(0, 0, 0, 0.1)":"rgba(255, 255, 255, 0.1)",padding:"2rem",margin:"1rem",borderRadius:r.radius.md,flex:"0 0 auto"}},a.createElement(ee,null),a.createElement(i.a,{mt:"md"},a.createElement(ie,null))),a.createElement("div",{style:{position:"relative",width:"100%",aspectRatio:"1 / 1",flex:"0 0 auto",zIndex:1,marginTop:"-14vh"}},a.createElement("div",{style:{position:"absolute",top:0,left:0,right:0,height:"20%",background:`linear-gradient(to bottom, ${l} 0%, transparent 100%)`,zIndex:2,pointerEvents:"none"}}),a.createElement(me,{color:"#000000",backgroundColor:l}))),a.createElement("div",{style:{width:"65%",height:"100%",display:"flex",position:"relative",backgroundColor:c,backgroundImage:`\n            linear-gradient(${d} 0.5px, transparent 0.5px),\n            linear-gradient(90deg, ${d} 0.5px, transparent 0.5px)\n          `,backgroundSize:"20px 20px",backgroundPosition:"10px 10px"}},a.createElement("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",paddingBottom:"2rem"}},a.createElement(We,{projects:m,textColor:o,backgroundColor:c,scrollRef:u,isMobile:n})),a.createElement("div",{style:{position:"absolute",bottom:0,left:0,right:0}},a.createElement(He.w,null)))))}const Oe=()=>a.createElement(o,null)},838:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#c8c8d8","images":{"fallback":{"src":"/static/279e7f22264a4bf0ed1862c77396864b/63b96/avatar.png","srcSet":"/static/279e7f22264a4bf0ed1862c77396864b/517b8/avatar.png 38w,\\n/static/279e7f22264a4bf0ed1862c77396864b/d88ae/avatar.png 75w,\\n/static/279e7f22264a4bf0ed1862c77396864b/63b96/avatar.png 150w,\\n/static/279e7f22264a4bf0ed1862c77396864b/a6496/avatar.png 300w","sizes":"(min-width: 150px) 150px, 100vw"},"sources":[{"srcSet":"/static/279e7f22264a4bf0ed1862c77396864b/4e06d/avatar.webp 38w,\\n/static/279e7f22264a4bf0ed1862c77396864b/90a8f/avatar.webp 75w,\\n/static/279e7f22264a4bf0ed1862c77396864b/3041a/avatar.webp 150w,\\n/static/279e7f22264a4bf0ed1862c77396864b/8964a/avatar.webp 300w","type":"image/webp","sizes":"(min-width: 150px) 150px, 100vw"}]},"width":150,"height":145.99999999999997}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-48770b13955efe067f36.js.map