"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[245],{2729:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,s=/([\p{Alpha}\p{N}_]|$)/u,n=/[_.\- ]+/,i=new RegExp("^"+n.source),o=new RegExp(n.source+s.source,"gu"),l=new RegExp("\\d+"+s.source,"gu"),c=(e,s)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(s={pascalCase:!1,preserveConsecutiveUppercase:!1,...s},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const n=!1===s.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(s.locale),c=!1===s.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(s.locale);if(1===e.length)return s.pascalCase?c(e):n(e);return e!==n(e)&&(e=((e,r,s)=>{let n=!1,i=!1,o=!1;for(let l=0;l<e.length;l++){const c=e[l];n&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),n=!1,o=i,i=!0,l++):i&&o&&a.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),o=i,i=!1,n=!0):(n=r(c)===c&&s(c)!==c,o=i,i=s(c)===c&&r(c)!==c)}return e})(e,n,c)),e=e.replace(i,""),e=s.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,n):n(e),s.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(o.lastIndex=0,l.lastIndex=0,e.replace(o,((e,a)=>t(a))).replace(l,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},2532:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return x},P:function(){return E},S:function(){return M},_:function(){return o},a:function(){return i},b:function(){return d},g:function(){return u},h:function(){return l}});var r=a(6540),s=(a(2729),a(5556)),n=a.n(s);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)t.indexOf(a=n[r])>=0||(s[a]=e[a]);return s}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let s="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(s="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:s,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,a,r,s){return void 0===s&&(s={}),i({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},s,{opacity:t?1:0})})}function u(e,t,a,r,s,n,o,l){const c={};n&&(c.backgroundColor=n,"fixed"===a?(c.width=r,c.height=s,c.backgroundColor=n,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),l&&(c.objectPosition=l);const d=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const m=["children"],p=function(e){let{layout:t,width:a,height:s}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:s/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${s}'%20width='${a}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=o(e,m);return r.createElement(r.Fragment,null,r.createElement(p,i({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:s,alt:n="",shouldLoad:l}=e,c=o(e,h);return r.createElement("img",i({},c,{decoding:"async",loading:s,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:n}))},v=function(e){let{fallback:t,sources:a=[],shouldLoad:s=!0}=e,n=o(e,f);const l=n.sizes||(null==t?void 0:t.sizes),c=r.createElement(y,i({},n,t,{sizes:l,shouldLoad:s}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:n}=e;return r.createElement("source",{key:`${t}-${n}-${a}`,type:n,media:t,srcSet:s?a:void 0,"data-srcset":s?void 0:a,sizes:l})})),c):c};var b;y.propTypes={src:s.string.isRequired,alt:s.string.isRequired,sizes:s.string,srcSet:s.string,shouldLoad:s.bool},v.displayName="Picture",v.propTypes={alt:s.string.isRequired,shouldLoad:s.bool,fallback:s.exact({src:s.string.isRequired,srcSet:s.string,sizes:s.string}),sources:s.arrayOf(s.oneOfType([s.exact({media:s.string.isRequired,type:s.string,sizes:s.string,srcSet:s.string.isRequired}),s.exact({media:s.string,type:s.string.isRequired,sizes:s.string,srcSet:s.string.isRequired})]))};const w=["fallback"],E=function(e){let{fallback:t}=e,a=o(e,w);return t?r.createElement(v,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},a))};E.displayName="Placeholder",E.propTypes={fallback:s.string,sources:null==(b=v.propTypes)?void 0:b.sources,alt:function(e,t,a){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${a}\`. Validation failed.`):null}};const x=function(e){return r.createElement(r.Fragment,null,r.createElement(v,i({},e)),r.createElement("noscript",null,r.createElement(v,i({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=v.propTypes;const N=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],S=["style","className"],C=e=>e.replace(/\n/g,""),k=function(e,t,a){for(var r=arguments.length,s=new Array(r>3?r-3:0),i=3;i<r;i++)s[i-3]=arguments[i];return e.alt||""===e.alt?n().string.apply(n(),[e,t,a].concat(s)):new Error(`The "alt" prop is required in ${a}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},j={image:n().object.isRequired,alt:k},L=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],_=["style","className"],$=new Set;let z,I;const T=function(e){let{as:t="div",image:s,style:n,backgroundColor:d,className:u,class:m,onStartLoad:p,onLoad:g,onError:h}=e,f=o(e,L);const{width:y,height:v,layout:b}=s,w=c(y,v,b),{style:E,className:x}=w,N=o(w,_),S=(0,r.useRef)(),C=(0,r.useMemo)((()=>JSON.stringify(s.images)),[s.images]);m&&(u=m);const k=function(e,t,a){let r="";return"fullWidth"===e&&(r=`<div aria-hidden="true" style="padding-top: ${a/t*100}%;"></div>`),"constrained"===e&&(r=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),r}(b,y,v);return(0,r.useEffect)((()=>{z||(z=a.e(108).then(a.bind(a,1108)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return I=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=S.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void $.add(C);if(I&&$.has(C))return;let t,r;return z.then((e=>{let{renderImageToString:a,swapPlaceholderImage:o}=e;S.current&&(S.current.innerHTML=a(i({isLoading:!0,isLoaded:$.has(C),image:s},f)),$.has(C)||(t=requestAnimationFrame((()=>{S.current&&(r=o(S.current,C,$,n,p,g,h))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[s]),(0,r.useLayoutEffect)((()=>{$.has(C)&&I&&(S.current.innerHTML=I(i({isLoading:$.has(C),isLoaded:$.has(C),image:s},f)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[s]),(0,r.createElement)(t,i({},N,{style:i({},E,n,{backgroundColor:d}),className:`${x}${u?` ${u}`:""}`,ref:S,dangerouslySetInnerHTML:{__html:k},suppressHydrationWarning:!0}))},P=(0,r.memo)((function(e){return e.image?(0,r.createElement)(T,e):null}));P.propTypes=j,P.displayName="GatsbyImage";const R=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function Y(e){return function(t){let{src:a,__imageData:s,__error:n}=t,l=o(t,R);return n&&console.warn(n),s?r.createElement(e,i({image:s},l)):(console.warn("Image not loaded",a),null)}}const A=Y((function(e){let{as:t="div",className:a,class:s,style:n,image:l,loading:m="lazy",imgClassName:p,imgStyle:h,backgroundColor:f,objectFit:y,objectPosition:v}=e,b=o(e,N);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;s&&(a=s),h=i({objectFit:y,objectPosition:v,backgroundColor:f},h);const{width:w,height:k,layout:j,images:L,placeholder:_,backgroundColor:$}=l,z=c(w,k,j),{style:I,className:T}=z,P=o(z,S),R={fallback:void 0,sources:[]};return L.fallback&&(R.fallback=i({},L.fallback,{srcSet:L.fallback.srcSet?C(L.fallback.srcSet):void 0})),L.sources&&(R.sources=L.sources.map((e=>i({},e,{srcSet:C(e.srcSet)})))),r.createElement(t,i({},P,{style:i({},I,n,{backgroundColor:f}),className:`${T}${a?` ${a}`:""}`}),r.createElement(g,{layout:j,width:w,height:k},r.createElement(E,i({},u(_,!1,j,w,k,$,y,v))),r.createElement(x,i({"data-gatsby-image-ssr":"",className:p},b,d("eager"===m,!1,R,m,h)))))})),O=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),s=2;s<a;s++)r[s-2]=arguments[s];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?n().number.apply(n(),[e,t].concat(r)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},W=new Set(["fixed","fullWidth","constrained"]),q={src:n().string.isRequired,alt:k,width:O,height:O,sizes:n().string,layout:e=>{if(void 0!==e.layout&&!W.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};A.displayName="StaticImage",A.propTypes=q;const M=Y(P);M.displayName="StaticImage",M.propTypes=q},6960:function(e,t,a){a.d(t,{U:function(){return W}});var r=a(6540),s=a(2659),n=a(1670),i=a(4848),o=a(6324),l=a(9396),c=a(6100),d=a(9205),u=a(8639),m=a(6402),p={root:"m_1b7284a3"};const g={},h=(0,l.V)(((e,{radius:t,shadow:a})=>({root:{"--paper-radius":void 0===t?void 0:(0,o.nJ)(t),"--paper-shadow":(0,o.dh)(a)}}))),f=(0,u.v)(((e,t)=>{const a=(0,c.Y)("Paper",g,e),{classNames:r,className:s,style:n,styles:o,unstyled:l,withBorder:u,vars:f,radius:y,shadow:v,variant:b,mod:w,...E}=a,x=(0,d.I)({name:"Paper",props:a,classes:p,className:s,style:n,classNames:r,styles:o,unstyled:l,vars:f,varsResolver:h});return(0,i.jsx)(m.a,{ref:t,mod:[{"data-with-border":u},w],...x("root"),variant:b,...E})}));f.classes=p,f.displayName="@mantine/core/Paper";const[y,v]=function(e){const t=(0,r.createContext)(null);return[({children:e,value:a})=>(0,i.jsx)(t.Provider,{value:a,children:e}),()=>{const a=(0,r.useContext)(t);if(null===a)throw new Error(e);return a}]}("Card component was not found in tree");var b={root:"m_e615b15f",section:"m_599a2148"};const w={},E=(0,u.v)(((e,t)=>{const a=(0,c.Y)("CardSection",w,e),{classNames:r,className:s,style:n,styles:o,vars:l,withBorder:d,inheritPadding:u,mod:p,...g}=a,h=v();return(0,i.jsx)(m.a,{ref:t,mod:[{"with-border":d,"inherit-padding":u},p],...h.getStyles("section",{className:s,style:n,styles:o,classNames:r}),...g})}));E.classes=b,E.displayName="@mantine/core/CardSection";const x={},N=(0,l.V)(((e,{padding:t})=>({root:{"--card-padding":(0,o.GY)(t)}}))),S=(0,u.v)(((e,t)=>{const a=(0,c.Y)("Card",x,e),{classNames:s,className:n,style:o,styles:l,unstyled:u,vars:m,children:p,padding:g,...h}=a,v=(0,d.I)({name:"Card",props:a,classes:b,className:n,style:o,classNames:s,styles:l,unstyled:u,vars:m,varsResolver:N}),w=r.Children.toArray(p),S=w.map(((e,t)=>"object"==typeof e&&e&&"type"in e&&e.type===E?(0,r.cloneElement)(e,{"data-first-section":0===t||void 0,"data-last-section":t===w.length-1||void 0}):e));return(0,i.jsx)(y,{value:{getStyles:v},children:(0,i.jsx)(f,{ref:t,unstyled:u,...v("root"),...h,children:S})})}));S.classes=b,S.displayName="@mantine/core/Card",S.Section=E;var C=a(4999),k=a(7826),j=a(6344),L={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"};const _={},$=(0,l.V)(((e,{radius:t,color:a,gradient:r,variant:s,size:n,autoContrast:i})=>{const l=e.variantColorResolver({color:a||e.primaryColor,theme:e,gradient:r,variant:s||"filled",autoContrast:i});return{root:{"--badge-height":(0,o.YC)(n,"badge-height"),"--badge-padding-x":(0,o.YC)(n,"badge-padding-x"),"--badge-fz":(0,o.YC)(n,"badge-fz"),"--badge-radius":void 0===t?void 0:(0,o.nJ)(t),"--badge-bg":a||s?l.background:void 0,"--badge-color":a||s?l.color:void 0,"--badge-bd":a||s?l.border:void 0,"--badge-dot-color":"dot"===s?(0,j.r)(a,e):void 0}}})),z=(0,u.v)(((e,t)=>{const a=(0,c.Y)("Badge",_,e),{classNames:r,className:s,style:n,styles:o,unstyled:l,vars:u,radius:p,color:g,gradient:h,leftSection:f,rightSection:y,children:v,variant:b,fullWidth:w,autoContrast:E,circle:x,mod:N,...S}=a,C=(0,d.I)({name:"Badge",props:a,classes:L,className:s,style:n,classNames:r,styles:o,unstyled:l,vars:u,varsResolver:$});return(0,i.jsxs)(m.a,{variant:b,mod:[{block:w,circle:x},N],...C("root",{variant:b}),ref:t,...S,children:[f&&(0,i.jsx)("span",{...C("section"),"data-position":"left",children:f}),(0,i.jsx)("span",{...C("label"),children:v}),y&&(0,i.jsx)("span",{...C("section"),"data-position":"right",children:y})]})}));z.classes=L,z.displayName="@mantine/core/Badge";var I=a(5133),T=a(4794),P="ProjectCard-module--card--634a6",R="ProjectCard-module--section--871be";const Y={width:"100%",height:"300px",overflow:"hidden",display:"flex",justifyContent:"center",alignItems:"center"},A={width:"100%"},O=e=>{let{src:t,alt:a}=e;return r.createElement("div",{style:Y},r.createElement("img",{src:t,alt:a,style:A}))};function W(e){let{project:t}=e;return r.createElement(s.m,null,r.createElement(n.o,null,r.createElement(S,{withBorder:!0,radius:"md",p:"md",className:P},r.createElement(S.Section,null,r.createElement(O,{src:t.featured_image,alt:"Description"})),r.createElement(S.Section,{className:R,mt:"md"},r.createElement(C.Y,{justify:"apart"},r.createElement(k.E,{fz:"lg",fw:500},t.title),r.createElement(z,{size:"sm",variant:"light"},t.date)),r.createElement(k.E,{fz:"sm",mt:"xs"},t.description)),r.createElement(C.Y,{mt:"xs"},r.createElement(I.$,{radius:"md",style:{flex:1},component:T.Link,to:t.slug},"Open Project")))))}},8402:function(e,t,a){a.r(t),a.d(t,{default:function(){return J}});var r=a(6540),s=a(1670),n=a(8091),i=a(4848),o=a(9396),l=a(6100),c=a(9205),d=a(6402),u=a(2412),m=a(8149);const p=["h1","h2","h3","h4","h5","h6"];var g={root:"m_8a5d1357"};const h={order:1},f=(0,o.V)(((e,{order:t,size:a,lineClamp:r,textWrap:s})=>{const n=function(e,t){const a=void 0!==t?t:`h${e}`;return p.includes(a)?{fontSize:`var(--mantine-${a}-font-size)`,fontWeight:`var(--mantine-${a}-font-weight)`,lineHeight:`var(--mantine-${a}-line-height)`}:{fontSize:(0,m.D)(a),fontWeight:`var(--mantine-h${e}-font-weight)`,lineHeight:`var(--mantine-h${e}-line-height)`}}(t,a);return{root:{"--title-fw":n.fontWeight,"--title-lh":n.lineHeight,"--title-fz":n.fontSize,"--title-line-clamp":"number"==typeof r?r.toString():void 0,"--title-text-wrap":s}}})),y=(0,u.P)(((e,t)=>{const a=(0,l.Y)("Title",h,e),{classNames:r,className:s,style:n,styles:o,unstyled:u,order:m,vars:p,size:y,variant:v,lineClamp:b,textWrap:w,mod:E,...x}=a,N=(0,c.I)({name:"Title",props:a,classes:g,className:s,style:n,classNames:r,styles:o,unstyled:u,vars:p,varsResolver:f});return[1,2,3,4,5,6].includes(m)?(0,i.jsx)(d.a,{...N("root"),component:`h${m}`,variant:v,ref:t,mod:[{order:m,"data-line-clamp":"number"==typeof b},E],size:y,...x}):null}));y.classes=g,y.displayName="@mantine/core/Title";var v=a(7826),b="Welcome-module--avatarZoom--710e5",w="Welcome-module--title--d5b99",E=a(2532);function x(){return r.createElement(r.Fragment,null,r.createElement(s.o,{pt:70},r.createElement(n.m,{label:"Hello!",position:"center"},r.createElement("div",null," ",r.createElement(E.S,{src:"../../images/avatar.png",className:b,width:150,style:{borderRadius:"50%"},alt:"",quality:95,__imageData:a(838)})))),r.createElement(y,{className:w,ta:"center",mt:10},"Adham Elarabawy"),r.createElement(v.E,{color:"dimmed",ta:"center",size:"lg",maw:580,mx:"auto",mt:"l"},"Machine Learning Researcher"))}var N=a(1503),S=a(4999),C=a(2809),k=a(2625),j=a(3338),L=a(5615),_=a(424);var $=function(){return r.createElement(S.Y,{gap:0,mt:1,justify:"center",wrap:"nowrap"},r.createElement(C.M,{size:"lg",color:"gray",variant:"subtle",component:"a",href:"https://github.com/adham-elarabawy",target:"_blank",rel:"noopener noreferrer"},r.createElement(k.A,{style:{width:18,height:18},stroke:1.5})),r.createElement(C.M,{size:"lg",color:"gray",variant:"subtle",component:"a",href:"https://www.linkedin.com/in/adham-elarabawy/",target:"_blank",rel:"noopener noreferrer"},r.createElement(j.A,{style:{width:18,height:18},stroke:1.5})),r.createElement(C.M,{size:"lg",color:"gray",variant:"subtle",component:"a",href:"https://www.youtube.com/channel/UCMXZwXFwd7tI7pO7vUo5iuQ",target:"_blank",rel:"noopener noreferrer"},r.createElement(L.A,{style:{width:18,height:18},stroke:1.5})),r.createElement(C.M,{size:"lg",color:"gray",variant:"subtle",component:"a",href:"https://twitter.com/adhamelarabawy",target:"_blank",rel:"noopener noreferrer"},r.createElement(_.A,{style:{width:18,height:18},stroke:1.5})))},z=a(6960),I=a(3974),T=a(3052),P=a(8459),R=a(7602),Y=a(6324);function A(e,t){return e in t.breakpoints?(0,P.px)(t.breakpoints[e]):(0,P.px)(e)}function O(e){return"object"==typeof e&&null!==e?"base"in e?e.base:void 0:e}var W=a(1101),q=a(5074);function M({spacing:e,verticalSpacing:t,cols:a,selector:r}){const s=(0,W.xd)(),n=void 0===t?e:t,o=(0,R.J)({"--sg-spacing-x":(0,Y.GY)(O(e)),"--sg-spacing-y":(0,Y.GY)(O(n)),"--sg-cols":O(a)?.toString()}),l=(0,T.H)(s.breakpoints).reduce(((t,r)=>(t[r]||(t[r]={}),"object"==typeof e&&void 0!==e[r]&&(t[r]["--sg-spacing-x"]=(0,Y.GY)(e[r])),"object"==typeof n&&void 0!==n[r]&&(t[r]["--sg-spacing-y"]=(0,Y.GY)(n[r])),"object"==typeof a&&void 0!==a[r]&&(t[r]["--sg-cols"]=a[r]),t)),{}),c=function(e,t){const a=e.map((e=>({value:e,px:A(e,t)})));return a.sort(((e,t)=>e.px-t.px)),a}((0,T.H)(l),s).filter((e=>(0,T.H)(l[e.value]).length>0)),d=c.map((e=>({query:`(min-width: ${s.breakpoints[e.value]})`,styles:l[e.value]})));return(0,i.jsx)(q.K,{styles:o,media:d,selector:r})}function G(e){return"object"==typeof e&&null!==e?(0,T.H)(e):[]}function H({spacing:e,verticalSpacing:t,cols:a}){return function(e){return e.sort(((e,t)=>(0,P.px)(e)-(0,P.px)(t)))}(Array.from(new Set([...G(e),...G(t),...G(a)])))}function F({spacing:e,verticalSpacing:t,cols:a,selector:r}){const s=void 0===t?e:t,n=(0,R.J)({"--sg-spacing-x":(0,Y.GY)(O(e)),"--sg-spacing-y":(0,Y.GY)(O(s)),"--sg-cols":O(a)?.toString()}),o=H({spacing:e,verticalSpacing:t,cols:a}),l=o.reduce(((t,r)=>(t[r]||(t[r]={}),"object"==typeof e&&void 0!==e[r]&&(t[r]["--sg-spacing-x"]=(0,Y.GY)(e[r])),"object"==typeof s&&void 0!==s[r]&&(t[r]["--sg-spacing-y"]=(0,Y.GY)(s[r])),"object"==typeof a&&void 0!==a[r]&&(t[r]["--sg-cols"]=a[r]),t)),{}),c=o.map((e=>({query:`simple-grid (min-width: ${e})`,styles:l[e]})));return(0,i.jsx)(q.K,{styles:n,container:c,selector:r})}var U={container:"m_925c2d2c",root:"m_2415a157"};const D={cols:1,spacing:"md",type:"media"},V=(0,u.P)(((e,t)=>{const a=(0,l.Y)("SimpleGrid",D,e),{classNames:r,className:s,style:n,styles:o,unstyled:u,vars:m,cols:p,verticalSpacing:g,spacing:h,type:f,...y}=a,v=(0,c.I)({name:"SimpleGrid",classes:U,props:a,className:s,style:n,classNames:r,styles:o,unstyled:u,vars:m}),b=(0,I.C)();return"container"===f?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(F,{...a,selector:`.${b}`}),(0,i.jsx)("div",{...v("container"),children:(0,i.jsx)(d.a,{ref:t,...v("root",{className:b}),...y})})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(M,{...a,selector:`.${b}`}),(0,i.jsx)(d.a,{ref:t,...v("root",{className:b}),...y})]})}));function B(e){let{data:t}=e;const a=t.allMdx.nodes.sort(((e,t)=>e.frontmatter.sort_id-t.frontmatter.sort_id));return r.createElement(s.o,{style:{marginTop:"20px"}},r.createElement(V,{cols:{base:1,sm:2},spacing:"sm",verticalSpacing:"sm"},a.map((e=>r.createElement("div",{key:e.id},r.createElement(z.U,{project:e.frontmatter}))))))}V.classes=U,V.displayName="@mantine/core/SimpleGrid";function J(e){let{data:t}=e;return r.createElement(N.M,null,r.createElement(x,null),r.createElement($,null),r.createElement(B,{data:t}))}},838:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#c8c8d8","images":{"fallback":{"src":"/static/279e7f22264a4bf0ed1862c77396864b/63b96/avatar.png","srcSet":"/static/279e7f22264a4bf0ed1862c77396864b/517b8/avatar.png 38w,\\n/static/279e7f22264a4bf0ed1862c77396864b/d88ae/avatar.png 75w,\\n/static/279e7f22264a4bf0ed1862c77396864b/63b96/avatar.png 150w,\\n/static/279e7f22264a4bf0ed1862c77396864b/a6496/avatar.png 300w","sizes":"(min-width: 150px) 150px, 100vw"},"sources":[{"srcSet":"/static/279e7f22264a4bf0ed1862c77396864b/4e06d/avatar.webp 38w,\\n/static/279e7f22264a4bf0ed1862c77396864b/90a8f/avatar.webp 75w,\\n/static/279e7f22264a4bf0ed1862c77396864b/3041a/avatar.webp 150w,\\n/static/279e7f22264a4bf0ed1862c77396864b/8964a/avatar.webp 300w","type":"image/webp","sizes":"(min-width: 150px) 150px, 100vw"}]},"width":150,"height":145.99999999999997}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-afb56b1c9b20ceef7554.js.map