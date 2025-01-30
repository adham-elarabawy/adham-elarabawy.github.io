"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[245],{21:function(e){const t=/[\p{Lu}]/u,r=/[\p{Ll}]/u,a=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,o=/[_.\- ]+/,s=new RegExp("^"+o.source),i=new RegExp(o.source+n.source,"gu"),l=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const o=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):o(e);return e!==o(e)&&(e=((e,a,n)=>{let o=!1,s=!1,i=!1;for(let l=0;l<e.length;l++){const c=e[l];o&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),o=!1,i=s,s=!0,l++):s&&i&&r.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),i=s,s=!1,o=!0):(o=a(c)===c&&n(c)!==c,i=s,s=n(c)===c&&a(c)!==c)}return e})(e,o,c)),e=e.replace(s,""),e=n.preserveConsecutiveUppercase?((e,t)=>(a.lastIndex=0,e.replace(a,(e=>t(e)))))(e,o):o(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(i.lastIndex=0,l.lastIndex=0,e.replace(i,((e,r)=>t(r))).replace(l,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},2722:function(e,t,r){r.d(t,{L:function(){return g},M:function(){return E},P:function(){return x},S:function(){return Y},_:function(){return i},a:function(){return s},b:function(){return d},g:function(){return u},h:function(){return l}});var a=r(5637),n=(r(21),r(5983)),o=r.n(n);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},s.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t.indexOf(r=o[a])>=0||(n[r]=e[r]);return n}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,r){const a={};let n="gatsby-image-wrapper";return"fixed"===r?(a.width=e,a.height=t):"constrained"===r&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:a}}function d(e,t,r,a,n){return void 0===n&&(n={}),s({},r,{loading:a,shouldLoad:e,"data-main-image":"",style:s({},n,{opacity:t?1:0})})}function u(e,t,r,a,n,o,i,l){const c={};o&&(c.backgroundColor=o,"fixed"===r?(c.width=a,c.height=n,c.backgroundColor=o,c.position="relative"):("constrained"===r||"fullWidth"===r)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),i&&(c.objectFit=i),l&&(c.objectPosition=l);const d=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const m=["children"],p=function(e){let{layout:t,width:r,height:n}=e;return"fullWidth"===t?a.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/r*100+"%"}}):"constrained"===t?a.createElement("div",{style:{maxWidth:r,display:"block"}},a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${n}'%20width='${r}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,r=i(e,m);return a.createElement(a.Fragment,null,a.createElement(p,s({},r)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:r,loading:n,alt:o="",shouldLoad:l}=e,c=i(e,h);return a.createElement("img",s({},c,{decoding:"async",loading:n,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?r:void 0,"data-srcset":l?void 0:r,alt:o}))},v=function(e){let{fallback:t,sources:r=[],shouldLoad:n=!0}=e,o=i(e,f);const l=o.sizes||(null==t?void 0:t.sizes),c=a.createElement(y,s({},o,t,{sizes:l,shouldLoad:n}));return r.length?a.createElement("picture",null,r.map((e=>{let{media:t,srcSet:r,type:o}=e;return a.createElement("source",{key:`${t}-${o}-${r}`,type:o,media:t,srcSet:n?r:void 0,"data-srcset":n?void 0:r,sizes:l})})),c):c};var b;y.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},v.displayName="Picture",v.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const w=["fallback"],x=function(e){let{fallback:t}=e,r=i(e,w);return t?a.createElement(v,s({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):a.createElement("div",s({},r))};x.displayName="Placeholder",x.propTypes={fallback:n.string,sources:null==(b=v.propTypes)?void 0:b.sources,alt:function(e,t,r){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${r}\`. Validation failed.`):null}};const E=function(e){return a.createElement(a.Fragment,null,a.createElement(v,s({},e)),a.createElement("noscript",null,a.createElement(v,s({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=v.propTypes;const C=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],k=["style","className"],S=e=>e.replace(/\n/g,""),N=function(e,t,r){for(var a=arguments.length,n=new Array(a>3?a-3:0),s=3;s<a;s++)n[s-3]=arguments[s];return e.alt||""===e.alt?o().string.apply(o(),[e,t,r].concat(n)):new Error(`The "alt" prop is required in ${r}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},j={image:o().object.isRequired,alt:N},L=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],z=["style","className"],A=new Set;let M,_;const R=function(e){let{as:t="div",image:n,style:o,backgroundColor:d,className:u,class:m,onStartLoad:p,onLoad:g,onError:h}=e,f=i(e,L);const{width:y,height:v,layout:b}=n,w=c(y,v,b),{style:x,className:E}=w,C=i(w,z),k=(0,a.useRef)(),S=(0,a.useMemo)((()=>JSON.stringify(n.images)),[n.images]);m&&(u=m);const N=function(e,t,r){let a="";return"fullWidth"===e&&(a=`<div aria-hidden="true" style="padding-top: ${r/t*100}%;"></div>`),"constrained"===e&&(a=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${r}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),a}(b,y,v);return(0,a.useEffect)((()=>{M||(M=r.e(74).then(r.bind(r,74)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:r}=e;return _=t,{renderImageToString:t,swapPlaceholderImage:r}})));const e=k.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void A.add(S);if(_&&A.has(S))return;let t,a;return M.then((e=>{let{renderImageToString:r,swapPlaceholderImage:i}=e;k.current&&(k.current.innerHTML=r(s({isLoading:!0,isLoaded:A.has(S),image:n},f)),A.has(S)||(t=requestAnimationFrame((()=>{k.current&&(a=i(k.current,S,A,o,p,g,h))}))))})),()=>{t&&cancelAnimationFrame(t),a&&a()}}),[n]),(0,a.useLayoutEffect)((()=>{A.has(S)&&_&&(k.current.innerHTML=_(s({isLoading:A.has(S),isLoaded:A.has(S),image:n},f)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[n]),(0,a.createElement)(t,s({},C,{style:s({},x,o,{backgroundColor:d}),className:`${E}${u?` ${u}`:""}`,ref:k,dangerouslySetInnerHTML:{__html:N},suppressHydrationWarning:!0}))},I=(0,a.memo)((function(e){return e.image?(0,a.createElement)(R,e):null}));I.propTypes=j,I.displayName="GatsbyImage";const F=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function $(e){return function(t){let{src:r,__imageData:n,__error:o}=t,l=i(t,F);return o&&console.warn(o),n?a.createElement(e,s({image:n},l)):(console.warn("Image not loaded",r),null)}}const T=$((function(e){let{as:t="div",className:r,class:n,style:o,image:l,loading:m="lazy",imgClassName:p,imgStyle:h,backgroundColor:f,objectFit:y,objectPosition:v}=e,b=i(e,C);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(r=n),h=s({objectFit:y,objectPosition:v,backgroundColor:f},h);const{width:w,height:N,layout:j,images:L,placeholder:z,backgroundColor:A}=l,M=c(w,N,j),{style:_,className:R}=M,I=i(M,k),F={fallback:void 0,sources:[]};return L.fallback&&(F.fallback=s({},L.fallback,{srcSet:L.fallback.srcSet?S(L.fallback.srcSet):void 0})),L.sources&&(F.sources=L.sources.map((e=>s({},e,{srcSet:S(e.srcSet)})))),a.createElement(t,s({},I,{style:s({},_,o,{backgroundColor:f}),className:`${R}${r?` ${r}`:""}`}),a.createElement(g,{layout:j,width:w,height:N},a.createElement(x,s({},u(z,!1,j,w,N,A,y,v))),a.createElement(E,s({"data-gatsby-image-ssr":"",className:p},b,d("eager"===m,!1,F,m,h)))))})),W=function(e,t){for(var r=arguments.length,a=new Array(r>2?r-2:0),n=2;n<r;n++)a[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?o().number.apply(o(),[e,t].concat(a)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},P=new Set(["fixed","fullWidth","constrained"]),H={src:o().string.isRequired,alt:N,width:W,height:W,sizes:o().string,layout:e=>{if(void 0!==e.layout&&!P.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};T.displayName="StaticImage",T.propTypes=H;const Y=$(I);Y.displayName="StaticImage",Y.propTypes=H},4708:function(e,t,r){r.d(t,{U:function(){return Y}});var a=r(5637),n=r(1729),o=r(178),s=r(2834),i=r(3278),l=r(4191),c=r(3933),d=r(1796),u={root:"m_1b7284a3"};const m={},p=(0,s.V)(((e,{radius:t,shadow:r})=>({root:{"--paper-radius":void 0===t?void 0:(0,o.nJ)(t),"--paper-shadow":(0,o.dh)(r)}}))),g=(0,c.v)(((e,t)=>{const r=(0,i.Y)("Paper",m,e),{classNames:a,className:o,style:s,styles:c,unstyled:g,withBorder:h,vars:f,radius:y,shadow:v,variant:b,mod:w,...x}=r,E=(0,l.I)({name:"Paper",props:r,classes:u,className:o,style:s,classNames:a,styles:c,unstyled:g,vars:f,varsResolver:p});return(0,n.jsx)(d.a,{ref:t,mod:[{"data-with-border":h},w],...E("root"),variant:b,...x})}));g.classes=u,g.displayName="@mantine/core/Paper";var h=r(6404);const[f,y]=(0,h.F)("Card component was not found in tree");var v={root:"m_e615b15f",section:"m_599a2148"};const b={},w=(0,c.v)(((e,t)=>{const r=(0,i.Y)("CardSection",b,e),{classNames:a,className:o,style:s,styles:l,vars:c,withBorder:u,inheritPadding:m,mod:p,...g}=r,h=y();return(0,n.jsx)(d.a,{ref:t,mod:[{"with-border":u,"inherit-padding":m},p],...h.getStyles("section",{className:o,style:s,styles:l,classNames:a}),...g})}));w.classes=v,w.displayName="@mantine/core/CardSection";const x={},E=(0,s.V)(((e,{padding:t})=>({root:{"--card-padding":(0,o.GY)(t)}}))),C=(0,c.v)(((e,t)=>{const r=(0,i.Y)("Card",x,e),{classNames:o,className:s,style:c,styles:d,unstyled:u,vars:m,children:p,padding:h,...y}=r,b=(0,l.I)({name:"Card",props:r,classes:v,className:s,style:c,classNames:o,styles:d,unstyled:u,vars:m,varsResolver:E}),C=a.Children.toArray(p),k=C.map(((e,t)=>"object"==typeof e&&e&&"type"in e&&e.type===w?(0,a.cloneElement)(e,{"data-first-section":0===t||void 0,"data-last-section":t===C.length-1||void 0}):e));return(0,n.jsx)(f,{value:{getStyles:b},children:(0,n.jsx)(g,{ref:t,unstyled:u,...b("root"),...y,children:k})})}));C.classes=v,C.displayName="@mantine/core/Card",C.Section=w;var k=r(4012),S=r(3665),N=r(8686),j={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"};const L={},z=(0,s.V)(((e,{radius:t,color:r,gradient:a,variant:n,size:s,autoContrast:i})=>{const l=e.variantColorResolver({color:r||e.primaryColor,theme:e,gradient:a,variant:n||"filled",autoContrast:i});return{root:{"--badge-height":(0,o.YC)(s,"badge-height"),"--badge-padding-x":(0,o.YC)(s,"badge-padding-x"),"--badge-fz":(0,o.YC)(s,"badge-fz"),"--badge-radius":void 0===t?void 0:(0,o.nJ)(t),"--badge-bg":r||n?l.background:void 0,"--badge-color":r||n?l.color:void 0,"--badge-bd":r||n?l.border:void 0,"--badge-dot-color":"dot"===n?(0,N.r)(r,e):void 0}}})),A=(0,c.v)(((e,t)=>{const r=(0,i.Y)("Badge",L,e),{classNames:a,className:o,style:s,styles:c,unstyled:u,vars:m,radius:p,color:g,gradient:h,leftSection:f,rightSection:y,children:v,variant:b,fullWidth:w,autoContrast:x,circle:E,mod:C,...k}=r,S=(0,l.I)({name:"Badge",props:r,classes:j,className:o,style:s,classNames:a,styles:c,unstyled:u,vars:m,varsResolver:z});return(0,n.jsxs)(d.a,{variant:b,mod:[{block:w,circle:E},C],...S("root",{variant:b}),ref:t,...k,children:[f&&(0,n.jsx)("span",{...S("section"),"data-position":"left",children:f}),(0,n.jsx)("span",{...S("label"),children:v}),y&&(0,n.jsx)("span",{...S("section"),"data-position":"right",children:y})]})}));A.classes=j,A.displayName="@mantine/core/Badge";var M=r(2139),_="ProjectCard-module--card--634a6",R="ProjectCard-module--description--69b8a",I="ProjectCard-module--descriptionContainer--42fd4",F="ProjectCard-module--section--871be";const $={width:"100%",height:"300px",overflow:"hidden",display:"flex",justifyContent:"center",alignItems:"center"},T={width:"102%",height:"102%",objectFit:"cover",objectPosition:"center"},W=e=>{let{src:t,alt:r}=e;return a.createElement("div",{style:$},a.createElement("img",{src:t,alt:r,style:T}))},P={robotics:"#9775fa",nlp:"#ff8787","machine learning":"#20c997",paper:"blue",github:"gray"},H={"in-progress":"yellow",maintained:"blue",done:"green"};function Y(e){let{project:t}=e;console.log("adham"),console.log(t.date);const r=(e=>{const t=new Date(e);return isNaN(t.getTime())?e||"No date":t.toLocaleDateString("en-US",{year:"numeric",month:"long"})})(t.date),n=e=>{let{children:r}=e;return t.url_override?a.createElement("a",{href:t.url_override,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"}},r):a.createElement(M.Link,{to:t.slug,style:{textDecoration:"none"}},r)};return a.createElement(n,null,a.createElement(C,{withBorder:!0,radius:"md",p:"xs",className:_,style:{width:"100%"}},a.createElement(C.Section,null,a.createElement(W,{src:t.featured_image,alt:"Description"})),a.createElement(C.Section,{className:F,mt:"xs"},a.createElement("div",{style:{position:"relative"}},t.state&&a.createElement("div",{style:{position:"absolute",top:8,right:8,backgroundColor:`var(--mantine-color-${H[t.state]}-light)`,padding:"4px 8px",borderRadius:"4px",display:"flex",alignItems:"center"}},a.createElement("div",{style:{width:"6px",height:"6px",borderRadius:"50%",backgroundColor:`var(--mantine-color-${H[t.state]}-filled)`,marginRight:"6px"}}),a.createElement(k.E,{size:"xs"},t.state.charAt(0).toUpperCase()+t.state.slice(1))),a.createElement(k.E,{fz:"lg",fw:500},t.title),a.createElement(k.E,{fz:"xs",c:"dimmed",style:{fontWeight:300,marginTop:"4px"}},r)),a.createElement(S.Y,{mt:"xs"},t.type&&Array.isArray(t.type)&&t.type.map(((e,t)=>a.createElement(A,{key:t,size:"sm",variant:"light",color:P[e]||"gray"},e)))),a.createElement("div",{className:I},a.createElement(k.E,{fz:"sm",className:R},t.description)))))}},7072:function(e,t,r){r.r(t),r.d(t,{default:function(){return me}});var a=r(5637),n=r(6892),o=r(6037),s=r(1729),i=r(2834),l=r(3278),c=r(4191),d=r(1796),u=r(6586),m=r(2591);const p=["h1","h2","h3","h4","h5","h6"];var g={root:"m_8a5d1357"};const h={order:1},f=(0,i.V)(((e,{order:t,size:r,lineClamp:a,textWrap:n})=>{const o=function(e,t){const r=void 0!==t?t:`h${e}`;return p.includes(r)?{fontSize:`var(--mantine-${r}-font-size)`,fontWeight:`var(--mantine-${r}-font-weight)`,lineHeight:`var(--mantine-${r}-line-height)`}:{fontSize:(0,m.D)(r),fontWeight:`var(--mantine-h${e}-font-weight)`,lineHeight:`var(--mantine-h${e}-line-height)`}}(t,r);return{root:{"--title-fw":o.fontWeight,"--title-lh":o.lineHeight,"--title-fz":o.fontSize,"--title-line-clamp":"number"==typeof a?a.toString():void 0,"--title-text-wrap":n}}})),y=(0,u.P)(((e,t)=>{const r=(0,l.Y)("Title",h,e),{classNames:a,className:n,style:o,styles:i,unstyled:u,order:m,vars:p,size:y,variant:v,lineClamp:b,textWrap:w,mod:x,...E}=r,C=(0,c.I)({name:"Title",props:r,classes:g,className:n,style:o,classNames:a,styles:i,unstyled:u,vars:p,varsResolver:f});return[1,2,3,4,5,6].includes(m)?(0,s.jsx)(d.a,{...C("root"),component:`h${m}`,variant:v,ref:t,mod:[{order:m,"data-line-clamp":"number"==typeof b},x],size:y,...E}):null}));y.classes=g,y.displayName="@mantine/core/Title";var v=r(4012),b=r(5392),w=r(3933),x={root:"m_849cf0da"};const E={underline:"hover"},C=(0,w.v)(((e,t)=>{const{underline:r,className:a,unstyled:n,mod:o,...i}=(0,l.Y)("Anchor",E,e);return(0,s.jsx)(v.E,{component:"a",ref:t,className:(0,b.A)({[x.root]:!n},a),...i,mod:[{underline:r},o],__staticSelector:"Anchor",unstyled:n})}));C.classes=x,C.displayName="@mantine/core/Anchor";var k="Welcome-module--avatarZoom--710e5",S="Welcome-module--title--d5b99",N=r(2722);function j(){return a.createElement(a.Fragment,null,a.createElement(n.o,{pt:40},a.createElement(o.m,{label:"Hello!",position:"center"},a.createElement("div",null," ",a.createElement(N.S,{src:"../../images/avatar.png",className:k,width:150,style:{borderRadius:"50%"},alt:"",quality:95,__imageData:r(838)})))),a.createElement(y,{className:S,ta:"center",mt:10},"Adham Elarabawy"),a.createElement(v.E,{size:"lg",color:"dimmed",ta:"center",maw:580,mx:"auto",mt:"l"},"ML Research at ",a.createElement(C,{href:"https://π.com",target:"_blank",rel:"noopener noreferrer"},"Physical Intelligence")))}var L=r(6721),z=r(6104),A=r(6404);const[M,_]=(0,A.F)("Grid component was not found in tree");var R=r(7226),I=r(5e3),F=r(389);function $(e,t){return e in t.breakpoints?(0,F.px)(t.breakpoints[e]):(0,F.px)(e)}function T(e,t){const r=e.map((e=>({value:e,px:$(e,t)})));return r.sort(((e,t)=>e.px-t.px)),r}function W(e){return"object"==typeof e&&null!==e?"base"in e?e.base:void 0:e}var P=r(4147),H=r(268);const Y=(e,t)=>"content"===e?"auto":"auto"===e?"0rem":e?100/(t/e)+"%":void 0,q=(e,t,r)=>r||"auto"===e?"100%":"content"===e?"unset":Y(e,t),O=(e,t)=>{if(e)return"auto"===e||t?"1":"auto"},D=(e,t)=>0===e?"0":e?100/(t/e)+"%":void 0;function U({span:e,order:t,offset:r,selector:a}){const n=(0,P.xd)(),o=_(),i=void 0===W(e)?12:W(e),l=(0,I.J)({"--col-order":W(t)?.toString(),"--col-flex-grow":O(i,o.grow),"--col-flex-basis":Y(i,o.columns),"--col-width":"content"===i?"auto":void 0,"--col-max-width":q(i,o.columns,o.grow),"--col-offset":D(W(r),o.columns)}),c=(0,R.H)(n.breakpoints).reduce(((a,n)=>(a[n]||(a[n]={}),"object"==typeof t&&void 0!==t[n]&&(a[n]["--col-order"]=t[n]?.toString()),"object"==typeof e&&void 0!==e[n]&&(a[n]["--col-flex-grow"]=O(e[n],o.grow),a[n]["--col-flex-basis"]=Y(e[n],o.columns),a[n]["--col-width"]="content"===e[n]?"auto":void 0,a[n]["--col-max-width"]=q(e[n],o.columns,o.grow)),"object"==typeof r&&void 0!==r[n]&&(a[n]["--col-offset"]=D(r[n],o.columns)),a)),{}),d=T((0,R.H)(c),n).filter((e=>(0,R.H)(c[e.value]).length>0)).map((e=>({query:`(min-width: ${n.breakpoints[e.value]})`,styles:c[e.value]})));return(0,s.jsx)(H.K,{styles:l,media:d,selector:a})}var B={root:"m_410352e9",inner:"m_dee7bd2f",col:"m_96bdd299"};const G={span:12},J=(0,u.P)(((e,t)=>{const r=(0,l.Y)("GridCol",G,e),{classNames:a,className:n,style:o,styles:i,vars:c,span:u,order:m,offset:p,...g}=r,h=_(),f=(0,z.C)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(U,{selector:`.${f}`,span:u,order:m,offset:p}),(0,s.jsx)(d.a,{ref:t,...h.getStyles("col",{className:(0,b.A)(n,f),style:o,classNames:a,styles:i}),...g})]})}));J.classes=B,J.displayName="@mantine/core/GridCol";var V=r(178);function X({gutter:e,selector:t}){const r=(0,P.xd)(),a=(0,I.J)({"--grid-gutter":(0,V.GY)(W(e))}),n=(0,R.H)(r.breakpoints).reduce(((t,r)=>(t[r]||(t[r]={}),"object"==typeof e&&void 0!==e[r]&&(t[r]["--grid-gutter"]=(0,V.GY)(e[r])),t)),{}),o=T((0,R.H)(n),r).filter((e=>(0,R.H)(n[e.value]).length>0)).map((e=>({query:`(min-width: ${r.breakpoints[e.value]})`,styles:n[e.value]})));return(0,s.jsx)(H.K,{styles:a,media:o,selector:t})}const Z={gutter:"md",grow:!1,columns:12},K=(0,i.V)(((e,{justify:t,align:r,overflow:a})=>({root:{"--grid-justify":t,"--grid-align":r,"--grid-overflow":a}}))),Q=(0,u.P)(((e,t)=>{const r=(0,l.Y)("Grid",Z,e),{classNames:a,className:n,style:o,styles:i,unstyled:u,vars:m,grow:p,gutter:g,columns:h,align:f,justify:y,children:v,...b}=r,w=(0,c.I)({name:"Grid",classes:B,props:r,className:n,style:o,classNames:a,styles:i,unstyled:u,vars:m,varsResolver:K}),x=(0,z.C)();return(0,s.jsxs)(M,{value:{getStyles:w,grow:p,columns:h},children:[(0,s.jsx)(X,{selector:`.${x}`,...r}),(0,s.jsx)(d.a,{ref:t,...w("root",{className:x}),...b,children:(0,s.jsx)("div",{...w("inner"),children:v})})]})}));Q.classes=B,Q.displayName="@mantine/core/Grid",Q.Col=J;var ee=r(3665),te=r(2959),re=r(913),ae=r(9658),ne=r(6447),oe=r(6424);var se=function(){return a.createElement(ee.Y,{gap:0,mt:1,justify:"center",wrap:"nowrap"},a.createElement(te.M,{size:"lg",color:"gray",variant:"subtle",component:"a",href:"https://github.com/adham-elarabawy",target:"_blank",rel:"noopener noreferrer"},a.createElement(re.A,{style:{width:18,height:18},stroke:1.5})),a.createElement(te.M,{size:"lg",color:"gray",variant:"subtle",component:"a",href:"https://www.linkedin.com/in/adham-elarabawy/",target:"_blank",rel:"noopener noreferrer"},a.createElement(ae.A,{style:{width:18,height:18},stroke:1.5})),a.createElement(te.M,{size:"lg",color:"gray",variant:"subtle",component:"a",href:"https://www.youtube.com/channel/UCMXZwXFwd7tI7pO7vUo5iuQ",target:"_blank",rel:"noopener noreferrer"},a.createElement(ne.A,{style:{width:18,height:18},stroke:1.5})),a.createElement(te.M,{size:"lg",color:"gray",variant:"subtle",component:"a",href:"https://twitter.com/adhamelarabawy",target:"_blank",rel:"noopener noreferrer"},a.createElement(oe.A,{style:{width:18,height:18},stroke:1.5})))},ie=r(9595);const le={a:.95,b:.7,c:.6,d:3.5,e:.25,f:.1};var ce=e=>{let{params:t=le,noiseFactor:r=.001,wobble:n={frequency:3,amplitude:.1},particleCounts:o={baseActive:2e3,hoverActive:4e3,trail:2e4},color:s="#ffffff",backgroundColor:i="#000000"}=e;const l=(0,a.useRef)(null),{0:c,1:d}=(0,a.useState)(!1),{0:u,1:m}=(0,a.useState)(!1),{0:p,1:g}=(0,a.useState)(null);return(0,a.useEffect)((()=>{if(!l.current)return;const e=l.current,a=new ie.Z58,u=new ie.ubm(60,e.clientWidth/e.clientHeight,.1,1e3),p=new ie.JeP({antialias:!0,alpha:!0});p.setPixelRatio(window.devicePixelRatio),p.setSize(e.clientWidth,e.clientHeight);const h=i.startsWith("#")?parseInt(i.substring(1),16):parseInt(i.replace(/[^0-9a-f]/gi,""),16),f=(h>>16&255)/255,y=(h>>8&255)/255,v=(255&h)/255;p.setClearColor(new ie.Q1f(f,y,v),1),e.appendChild(p.domElement);const b=o.baseActive,w=o.hoverActive,x=w,E=o.trail,C=new ie.LoY,k=new Float32Array(3*x),S=new Float32Array(3*x),N=new Float32Array(x);let j=b;const L=new ie.LoY,z=new Float32Array(3*E),A=new Float32Array(3*E),M=new Float32Array(E);function _(e,r,a,n,o,i){void 0===i&&(i=1.5);let l=.1*(Math.random()-.5),c=.1*(Math.random()-.5),d=.1*(Math.random()-.5);for(let u=0;u<r;u++){const r=3*(e+u),m=.01,p=.025;l+=(Math.random()-.5)*p,c+=(Math.random()-.5)*p,d+=(Math.random()-.5)*p;const g=(d-t.b)*l-t.d*c,h=t.d*l+(d-t.b)*c,f=t.c+t.a*d-Math.pow(d,3)/3-(Math.pow(l,2)+Math.pow(c,2))*(1+t.e*d)+t.f*d*Math.pow(l,3);l+=g*m,c+=h*m,d+=f*m,a[r]=l*i,a[r+1]=c*i,a[r+2]=d*i;const y=parseInt(s.substring(1),16),v=(y>>16)/255,b=(y>>8&255)/255,w=(255&y)/255;n[r]=v,n[r+1]=b,n[r+2]=w,o[e+u]=.04}}!function(){const e=x/8;for(let t=0;t<8;t++)_(t*e,e,k,S,N);for(let t=0;t<8;t++)_(t*(E/8),E/8,z,A,M)}(),C.setAttribute("position",new ie.THS(k,3)),C.setAttribute("color",new ie.THS(S,3)),C.setAttribute("size",new ie.THS(N,1)),L.setAttribute("position",new ie.THS(z,3)),L.setAttribute("color",new ie.THS(A,3)),L.setAttribute("size",new ie.THS(M,1)),C.setDrawRange(0,j);const R=new ie.BH$({size:.035,vertexColors:!0,transparent:!0,opacity:.8,sizeAttenuation:!0}),I=new ie.BH$({size:.02,vertexColors:!0,transparent:!0,opacity:.2,sizeAttenuation:!0}),F=new ie.ONl(C,R),$=new ie.ONl(L,I);F.position.set(0,2,0),$.position.set(0,2,0);const T=new ie.YJl;T.position.set(0,0,0),u.position.set(0,6,10),u.lookAt(0,2,0),u.up.set(0,1,0),T.add(F),T.add($),a.add(T);const W=.001;let P=0,H=W,Y=W;function q(){d(!0),Y=.005,m(!0)}function O(){d(!1),Y=W,m(!1)}const D=t=>{const r=e.getBoundingClientRect();g({x:t.clientX-r.left,y:t.clientY-r.top})};function U(){l.current&&(u.aspect=l.current.clientWidth/l.current.clientHeight,u.updateProjectionMatrix(),p.setSize(l.current.clientWidth,l.current.clientHeight))}return e.addEventListener("mouseenter",q),e.addEventListener("mouseleave",O),e.addEventListener("mousemove",D),window.addEventListener("resize",U),function e(){requestAnimationFrame(e),P+=.002,function(){H+=.1*(Y-H);const e=H;for(let a=0;a<x;a++){const n=3*a;let o=k[n]/2,s=k[n+1]/2,i=k[n+2]/2;const l=(i-t.b)*o-t.d*s,c=t.d*o+(i-t.b)*s,d=t.c+t.a*i-Math.pow(i,3)/3-(Math.pow(o,2)+Math.pow(s,2))*(1+t.e*i)+t.f*i*Math.pow(o,3);k[n]=2*(o+l*e+(Math.random()-.5)*r),k[n+1]=2*(s+c*e+(Math.random()-.5)*r),k[n+2]=2*(i+d*e+(Math.random()-.5)*r),N[a]=.02*(1+.3*Math.sin(4*P+a))}for(let r=0;r<E;r++){const a=3*r;let n=z[a]/2,o=z[a+1]/2,s=z[a+2]/2;const i=(s-t.b)*n-t.d*o,l=t.d*n+(s-t.b)*o,c=t.c+t.a*s-Math.pow(s,3)/3-(Math.pow(n,2)+Math.pow(o,2))*(1+t.e*s)+t.f*s*Math.pow(n,3);z[a]=2*(n+i*e*.2),z[a+1]=2*(o+l*e*.2),z[a+2]=2*(s+c*e*.2)}c&&j<w?(j=Math.min(w,j+50),C.setDrawRange(0,j)):!c&&j>b&&(j=Math.max(b,j-50),C.setDrawRange(0,j)),C.attributes.position.needsUpdate=!0,C.attributes.size.needsUpdate=!0,L.attributes.position.needsUpdate=!0}(),T.rotation.x=Math.sin(P*n.frequency)*n.amplitude,T.rotation.y=Math.cos(P*n.frequency)*n.amplitude,p.render(a,u)}(),()=>{window.removeEventListener("resize",U),e.removeEventListener("mouseenter",q),e.removeEventListener("mouseleave",O),e.removeEventListener("mousemove",D),p.dispose()}}),[]),a.createElement("div",{ref:l,style:{width:"100%",height:"75vh",position:"relative",overflow:"hidden",cursor:"crosshair"}},u&&p&&a.createElement("div",{style:{position:"absolute",left:p.x+10,top:p.y+10,pointerEvents:"none",zIndex:1e3,backgroundColor:"rgba(0, 0, 0, 0.85)",padding:"8px 12px",borderRadius:"4px",fontSize:"12px",color:"white",boxShadow:"0 2px 4px rgba(0,0,0,0.2)"}},a.createElement("div",{style:{fontWeight:600,marginBottom:"4px"}},"Aizawa Attractor"),a.createElement("div",{style:{color:"rgba(255,255,255,0.8)",fontSize:"11px"}},"a: ",t.a.toFixed(2),", b: ",t.b.toFixed(2),", c: ",t.c.toFixed(2),", d: ",t.d.toFixed(2),", e: ",t.e.toFixed(2),", f: ",t.f.toFixed(2))))},de=r(4708),ue=r(4325);function me(e){let{data:t}=e;const r=(0,P.xd)(),n=(0,ue.U)("(max-width: 1200px)"),{0:o,1:s}=(0,a.useState)(!1),i="dark"===r.colorScheme?r.colors.gray[0]:r.colors.dark[7],l="dark"===r.colorScheme?"#1A1A1A":"#FFFFFF",c=(0,a.useRef)(null),{0:u,1:m}=(0,a.useState)(0),p=t.allMdx.nodes.sort(((e,t)=>e.frontmatter.sort_id-t.frontmatter.sort_id));(0,a.useEffect)((()=>{var e,t;const r=e=>{if(!n&&Math.abs(e.deltaY)>Math.abs(e.deltaX)){var t;e.preventDefault();const r=.5*e.deltaY;null===(t=c.current)||void 0===t||t.scrollBy({left:r,behavior:"auto"})}},a=()=>{if(!c.current||n)return;const e=c.current.querySelectorAll(".project-card"),t=c.current.getBoundingClientRect();e.forEach((e=>{const r=e.getBoundingClientRect(),a=Math.abs(r.left+r.width/2-(t.left+t.width/2)),n=t.width/2+r.width/2,o=Math.max(.3,Math.pow(1-a/n,.5));e.style.opacity=o}))},o=()=>{if(c.current){const{scrollWidth:e,clientWidth:t}=c.current;s(e>t)}},i=()=>{if(c.current){const e=532,t=c.current.scrollLeft;if(c.current.scrollWidth-c.current.clientWidth-t<20)m(p.length-1);else{const r=Math.round(t/e);r!==u&&m(r)}}};return o(),document.addEventListener("wheel",r,{passive:!1}),null===(e=c.current)||void 0===e||e.addEventListener("scroll",a),null===(t=c.current)||void 0===t||t.addEventListener("scroll",i),a(),window.addEventListener("resize",o),()=>{var e,t;document.removeEventListener("wheel",r),null===(e=c.current)||void 0===e||e.removeEventListener("scroll",a),null===(t=c.current)||void 0===t||t.removeEventListener("scroll",i),window.removeEventListener("resize",o)}}),[n,u,p.length]);return n?a.createElement("div",{style:{width:"100%",minHeight:"100vh",display:"flex",justifyContent:"center"}},a.createElement(L.m,{size:"md",px:"md",style:{width:"100%"}},a.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:"2rem",alignItems:"center",padding:"1rem 0"}},a.createElement("div",{style:{color:i,backdropFilter:"blur(10px)",background:"dark"===r.colorScheme?"rgba(0, 0, 0, 0.05)":"rgba(255, 255, 255, 0.05)",padding:"2rem",borderRadius:r.radius.md,width:"100%",maxWidth:"600px"}},a.createElement(j,null),a.createElement(d.a,{mt:"md"},a.createElement(se,null))),a.createElement(Q,{gutter:"xl",style:{width:"100%"},justify:"center"},p.map((e=>a.createElement(Q.Col,{key:e.id,span:12,sm:6,style:{display:"flex",justifyContent:"center"}},a.createElement(d.a,{sx:{width:"100%",maxWidth:"500px",display:"flex",justifyContent:"center"}},a.createElement("div",{style:{width:"100%"}},a.createElement(de.U,{project:{...e.frontmatter,url_override:e.frontmatter.url_override}})))))))))):a.createElement("div",{style:{width:"100vw",height:"100vh",margin:0,padding:0,overflow:"hidden"}},a.createElement("div",{style:{width:"100%",height:"100%",display:"flex",position:"fixed",top:0,left:0}},a.createElement("div",{style:{width:"35%",height:"100%",position:"relative",padding:"1rem"}},a.createElement("div",{style:{position:"relative",zIndex:1,color:i,backdropFilter:"blur(10px)",background:"dark"===r.colorScheme?"rgba(0, 0, 0, 0.1)":"rgba(255, 255, 255, 0.1)",padding:"2rem",borderRadius:r.radius.md,marginTop:"0rem"}},a.createElement(j,null),a.createElement(d.a,{mt:"md"},a.createElement(se,null))),a.createElement("div",{style:{position:"absolute",bottom:0,left:0,width:"100%",height:"70vh",zIndex:0}},a.createElement(ce,{color:i,backgroundColor:l}))),a.createElement("div",{style:{width:"65%",height:"100%",position:"relative",backgroundColor:l,display:"flex",flexDirection:"column"}},a.createElement("div",{ref:c,style:{width:"100%",height:"calc(100% - 30px)",overflowX:"auto",overflowY:"hidden",whiteSpace:"nowrap",msOverflowStyle:"none",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"},"::-webkit-scrollbar":{display:"none"}}},a.createElement("div",{style:{display:"inline-flex",height:"100%",alignItems:"center",paddingLeft:"2rem",paddingRight:"2rem"}},p.map(((e,t)=>a.createElement("div",{key:e.id,className:"project-card",style:{width:"500px",flex:"none",transition:"opacity 0.3s ease-out",marginRight:"2rem"}},a.createElement(de.U,{project:{...e.frontmatter,url_override:e.frontmatter.url_override}})))))),a.createElement("div",{style:{height:"30px",display:"flex",justifyContent:"center",alignItems:"center",gap:"8px"}},p.map(((e,t)=>a.createElement("div",{key:t,onClick:()=>(e=>{if(c.current){const t=532;c.current.scrollLeft=e*t}})(t),style:{width:"6px",height:"6px",borderRadius:"50%",backgroundColor:t===u?i:"dark"===r.colorScheme?"#444":"#ddd",cursor:"pointer",transition:"all 0.2s ease",opacity:t===u?1:.5,transform:t===u?"scale(1.2)":"scale(1)"}})))),o&&a.createElement("div",{style:{position:"absolute",right:0,top:0,height:"100%",width:"100px",background:"dark"===r.colorScheme?"linear-gradient(90deg, rgba(26, 26, 26, 0), rgba(26, 26, 26, 0.8))":"linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.8))",pointerEvents:"none",zIndex:10}}))))}},6404:function(e,t,r){r.d(t,{F:function(){return o}});var a=r(1729),n=r(5637);function o(e){const t=(0,n.createContext)(null);return[({children:e,value:r})=>(0,a.jsx)(t.Provider,{value:r,children:e}),()=>{const r=(0,n.useContext)(t);if(null===r)throw new Error(e);return r}]}},838:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#c8c8d8","images":{"fallback":{"src":"/static/279e7f22264a4bf0ed1862c77396864b/63b96/avatar.png","srcSet":"/static/279e7f22264a4bf0ed1862c77396864b/517b8/avatar.png 38w,\\n/static/279e7f22264a4bf0ed1862c77396864b/d88ae/avatar.png 75w,\\n/static/279e7f22264a4bf0ed1862c77396864b/63b96/avatar.png 150w,\\n/static/279e7f22264a4bf0ed1862c77396864b/a6496/avatar.png 300w","sizes":"(min-width: 150px) 150px, 100vw"},"sources":[{"srcSet":"/static/279e7f22264a4bf0ed1862c77396864b/4e06d/avatar.webp 38w,\\n/static/279e7f22264a4bf0ed1862c77396864b/90a8f/avatar.webp 75w,\\n/static/279e7f22264a4bf0ed1862c77396864b/3041a/avatar.webp 150w,\\n/static/279e7f22264a4bf0ed1862c77396864b/8964a/avatar.webp 300w","type":"image/webp","sizes":"(min-width: 150px) 150px, 100vw"}]},"width":150,"height":145.99999999999997}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-f6516108a66d3e60327f.js.map