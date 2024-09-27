"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[245],{2729:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,s=/[_.\- ]+/,o=new RegExp("^"+s.source),i=new RegExp(s.source+n.source,"gu"),l=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const s=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):s(e);return e!==s(e)&&(e=((e,r,n)=>{let s=!1,o=!1,i=!1;for(let l=0;l<e.length;l++){const c=e[l];s&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),s=!1,i=o,o=!0,l++):o&&i&&a.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),i=o,o=!1,s=!0):(s=r(c)===c&&n(c)!==c,i=o,o=n(c)===c&&r(c)!==c)}return e})(e,s,c)),e=e.replace(o,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,s):s(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(i.lastIndex=0,l.lastIndex=0,e.replace(i,((e,a)=>t(a))).replace(l,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},2532:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return x},P:function(){return E},S:function(){return M},_:function(){return i},a:function(){return o},b:function(){return d},g:function(){return u},h:function(){return l}});var r=a(6540),n=(a(2729),a(5556)),s=a.n(n);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t.indexOf(a=s[r])>=0||(n[a]=e[a]);return n}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,a,r,n){return void 0===n&&(n={}),o({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:o({},n,{opacity:t?1:0})})}function u(e,t,a,r,n,s,i,l){const c={};s&&(c.backgroundColor=s,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=s,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),i&&(c.objectFit=i),l&&(c.objectPosition=l);const d=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const m=["children"],p=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${n}'%20width='${a}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=i(e,m);return r.createElement(r.Fragment,null,r.createElement(p,o({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],f=function(e){let{src:t,srcSet:a,loading:n,alt:s="",shouldLoad:l}=e,c=i(e,h);return r.createElement("img",o({},c,{decoding:"async",loading:n,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:s}))},v=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,s=i(e,y);const l=s.sizes||(null==t?void 0:t.sizes),c=r.createElement(f,o({},s,t,{sizes:l,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return r.createElement("source",{key:`${t}-${s}-${a}`,type:s,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:l})})),c):c};var b;f.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},v.displayName="Picture",v.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const w=["fallback"],E=function(e){let{fallback:t}=e,a=i(e,w);return t?r.createElement(v,o({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",o({},a))};E.displayName="Placeholder",E.propTypes={fallback:n.string,sources:null==(b=v.propTypes)?void 0:b.sources,alt:function(e,t,a){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${a}\`. Validation failed.`):null}};const x=function(e){return r.createElement(r.Fragment,null,r.createElement(v,o({},e)),r.createElement("noscript",null,r.createElement(v,o({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=v.propTypes;const C=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],N=["style","className"],S=e=>e.replace(/\n/g,""),k=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),o=3;o<r;o++)n[o-3]=arguments[o];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(n)):new Error(`The "alt" prop is required in ${a}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},j={image:s().object.isRequired,alt:k},_=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],L=["style","className"],$=new Set;let z,I;const T=function(e){let{as:t="div",image:n,style:s,backgroundColor:d,className:u,class:m,onStartLoad:p,onLoad:g,onError:h}=e,y=i(e,_);const{width:f,height:v,layout:b}=n,w=c(f,v,b),{style:E,className:x}=w,C=i(w,L),N=(0,r.useRef)(),S=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);m&&(u=m);const k=function(e,t,a){let r="";return"fullWidth"===e&&(r=`<div aria-hidden="true" style="padding-top: ${a/t*100}%;"></div>`),"constrained"===e&&(r=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),r}(b,f,v);return(0,r.useEffect)((()=>{z||(z=a.e(108).then(a.bind(a,1108)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return I=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=N.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void $.add(S);if(I&&$.has(S))return;let t,r;return z.then((e=>{let{renderImageToString:a,swapPlaceholderImage:i}=e;N.current&&(N.current.innerHTML=a(o({isLoading:!0,isLoaded:$.has(S),image:n},y)),$.has(S)||(t=requestAnimationFrame((()=>{N.current&&(r=i(N.current,S,$,s,p,g,h))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{$.has(S)&&I&&(N.current.innerHTML=I(o({isLoading:$.has(S),isLoaded:$.has(S),image:n},y)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[n]),(0,r.createElement)(t,o({},C,{style:o({},E,s,{backgroundColor:d}),className:`${x}${u?` ${u}`:""}`,ref:N,dangerouslySetInnerHTML:{__html:k},suppressHydrationWarning:!0}))},P=(0,r.memo)((function(e){return e.image?(0,r.createElement)(T,e):null}));P.propTypes=j,P.displayName="GatsbyImage";const R=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function A(e){return function(t){let{src:a,__imageData:n,__error:s}=t,l=i(t,R);return s&&console.warn(s),n?r.createElement(e,o({image:n},l)):(console.warn("Image not loaded",a),null)}}const Y=A((function(e){let{as:t="div",className:a,class:n,style:s,image:l,loading:m="lazy",imgClassName:p,imgStyle:h,backgroundColor:y,objectFit:f,objectPosition:v}=e,b=i(e,C);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),h=o({objectFit:f,objectPosition:v,backgroundColor:y},h);const{width:w,height:k,layout:j,images:_,placeholder:L,backgroundColor:$}=l,z=c(w,k,j),{style:I,className:T}=z,P=i(z,N),R={fallback:void 0,sources:[]};return _.fallback&&(R.fallback=o({},_.fallback,{srcSet:_.fallback.srcSet?S(_.fallback.srcSet):void 0})),_.sources&&(R.sources=_.sources.map((e=>o({},e,{srcSet:S(e.srcSet)})))),r.createElement(t,o({},P,{style:o({},I,s,{backgroundColor:y}),className:`${T}${a?` ${a}`:""}`}),r.createElement(g,{layout:j,width:w,height:k},r.createElement(E,o({},u(L,!1,j,w,k,$,f,v))),r.createElement(x,o({"data-gatsby-image-ssr":"",className:p},b,d("eager"===m,!1,R,m,h)))))})),W=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(r)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},O=new Set(["fixed","fullWidth","constrained"]),q={src:s().string.isRequired,alt:k,width:W,height:W,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!O.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};Y.displayName="StaticImage",Y.propTypes=q;const M=A(P);M.displayName="StaticImage",M.propTypes=q},6960:function(e,t,a){a.d(t,{U:function(){return G}});var r=a(6540),n=a(2659),s=a(1670),o=a(4848),i=a(6324),l=a(9396),c=a(6100),d=a(9205),u=a(8639),m=a(6402),p={root:"m_1b7284a3"};const g={},h=(0,l.V)(((e,{radius:t,shadow:a})=>({root:{"--paper-radius":void 0===t?void 0:(0,i.nJ)(t),"--paper-shadow":(0,i.dh)(a)}}))),y=(0,u.v)(((e,t)=>{const a=(0,c.Y)("Paper",g,e),{classNames:r,className:n,style:s,styles:i,unstyled:l,withBorder:u,vars:y,radius:f,shadow:v,variant:b,mod:w,...E}=a,x=(0,d.I)({name:"Paper",props:a,classes:p,className:n,style:s,classNames:r,styles:i,unstyled:l,vars:y,varsResolver:h});return(0,o.jsx)(m.a,{ref:t,mod:[{"data-with-border":u},w],...x("root"),variant:b,...E})}));y.classes=p,y.displayName="@mantine/core/Paper";const[f,v]=function(e){const t=(0,r.createContext)(null);return[({children:e,value:a})=>(0,o.jsx)(t.Provider,{value:a,children:e}),()=>{const a=(0,r.useContext)(t);if(null===a)throw new Error(e);return a}]}("Card component was not found in tree");var b={root:"m_e615b15f",section:"m_599a2148"};const w={},E=(0,u.v)(((e,t)=>{const a=(0,c.Y)("CardSection",w,e),{classNames:r,className:n,style:s,styles:i,vars:l,withBorder:d,inheritPadding:u,mod:p,...g}=a,h=v();return(0,o.jsx)(m.a,{ref:t,mod:[{"with-border":d,"inherit-padding":u},p],...h.getStyles("section",{className:n,style:s,styles:i,classNames:r}),...g})}));E.classes=b,E.displayName="@mantine/core/CardSection";const x={},C=(0,l.V)(((e,{padding:t})=>({root:{"--card-padding":(0,i.GY)(t)}}))),N=(0,u.v)(((e,t)=>{const a=(0,c.Y)("Card",x,e),{classNames:n,className:s,style:i,styles:l,unstyled:u,vars:m,children:p,padding:g,...h}=a,v=(0,d.I)({name:"Card",props:a,classes:b,className:s,style:i,classNames:n,styles:l,unstyled:u,vars:m,varsResolver:C}),w=r.Children.toArray(p),N=w.map(((e,t)=>"object"==typeof e&&e&&"type"in e&&e.type===E?(0,r.cloneElement)(e,{"data-first-section":0===t||void 0,"data-last-section":t===w.length-1||void 0}):e));return(0,o.jsx)(f,{value:{getStyles:v},children:(0,o.jsx)(y,{ref:t,unstyled:u,...v("root"),...h,children:N})})}));N.classes=b,N.displayName="@mantine/core/Card",N.Section=E;var S=a(7826),k=a(4999),j=a(6344),_={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"};const L={},$=(0,l.V)(((e,{radius:t,color:a,gradient:r,variant:n,size:s,autoContrast:o})=>{const l=e.variantColorResolver({color:a||e.primaryColor,theme:e,gradient:r,variant:n||"filled",autoContrast:o});return{root:{"--badge-height":(0,i.YC)(s,"badge-height"),"--badge-padding-x":(0,i.YC)(s,"badge-padding-x"),"--badge-fz":(0,i.YC)(s,"badge-fz"),"--badge-radius":void 0===t?void 0:(0,i.nJ)(t),"--badge-bg":a||n?l.background:void 0,"--badge-color":a||n?l.color:void 0,"--badge-bd":a||n?l.border:void 0,"--badge-dot-color":"dot"===n?(0,j.r)(a,e):void 0}}})),z=(0,u.v)(((e,t)=>{const a=(0,c.Y)("Badge",L,e),{classNames:r,className:n,style:s,styles:i,unstyled:l,vars:u,radius:p,color:g,gradient:h,leftSection:y,rightSection:f,children:v,variant:b,fullWidth:w,autoContrast:E,circle:x,mod:C,...N}=a,S=(0,d.I)({name:"Badge",props:a,classes:_,className:n,style:s,classNames:r,styles:i,unstyled:l,vars:u,varsResolver:$});return(0,o.jsxs)(m.a,{variant:b,mod:[{block:w,circle:x},C],...S("root",{variant:b}),ref:t,...N,children:[y&&(0,o.jsx)("span",{...S("section"),"data-position":"left",children:y}),(0,o.jsx)("span",{...S("label"),children:v}),f&&(0,o.jsx)("span",{...S("section"),"data-position":"right",children:f})]})}));z.classes=_,z.displayName="@mantine/core/Badge";var I=a(4794),T="ProjectCard-module--card--634a6",P="ProjectCard-module--description--69b8a",R="ProjectCard-module--descriptionContainer--42fd4",A="ProjectCard-module--section--871be";const Y={width:"100%",height:"300px",overflow:"hidden",display:"flex",justifyContent:"center",alignItems:"center"},W={width:"102%",height:"102%",objectFit:"cover",objectPosition:"center"},O=e=>{let{src:t,alt:a}=e;return r.createElement("div",{style:Y},r.createElement("img",{src:t,alt:a,style:W}))},q={paper:"blue",robotics:"grape",github:"gray","machine learning":"green"},M={"in-progress":"yellow",maintained:"blue",done:"green"};function G(e){let{project:t}=e;const a=new Date(t.date).toLocaleDateString("en-US",{year:"numeric",month:"long"}),o=e=>{let{children:a}=e;return console.log("test adham"),console.log(t.url_override),t.url_override?r.createElement("a",{href:t.url_override,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"}},a):r.createElement(I.Link,{to:t.slug,style:{textDecoration:"none"}},a)};return r.createElement(n.m,null,r.createElement(s.o,null,r.createElement(o,null,r.createElement(N,{withBorder:!0,radius:"md",p:"md",className:T},r.createElement(N.Section,null,r.createElement(O,{src:t.featured_image,alt:"Description"})),r.createElement(N.Section,{className:A,mt:"md"},r.createElement("div",{style:{position:"relative"}},t.state&&r.createElement("div",{style:{position:"absolute",top:8,right:8,backgroundColor:`var(--mantine-color-${M[t.state]}-light)`,padding:"4px 8px",borderRadius:"4px",display:"flex",alignItems:"center"}},r.createElement("div",{style:{width:"6px",height:"6px",borderRadius:"50%",backgroundColor:`var(--mantine-color-${M[t.state]}-filled)`,marginRight:"6px"}}),r.createElement(S.E,{size:"xs"},t.state.charAt(0).toUpperCase()+t.state.slice(1))),r.createElement(S.E,{fz:"lg",fw:500},t.title),r.createElement(S.E,{fz:"xs",c:"dimmed",style:{fontWeight:300,marginTop:"4px"}},a)),r.createElement(k.Y,{mt:"xs"},t.type&&Array.isArray(t.type)&&t.type.map(((e,t)=>r.createElement(z,{key:t,size:"sm",variant:"light",color:q[e]||"gray"},e)))),r.createElement("div",{className:R},r.createElement(S.E,{fz:"sm",className:P},t.description)))))))}},8402:function(e,t,a){a.r(t),a.d(t,{default:function(){return J}});var r=a(6540),n=a(1670),s=a(8091),o=a(4848),i=a(9396),l=a(6100),c=a(9205),d=a(6402),u=a(2412),m=a(8149);const p=["h1","h2","h3","h4","h5","h6"];var g={root:"m_8a5d1357"};const h={order:1},y=(0,i.V)(((e,{order:t,size:a,lineClamp:r,textWrap:n})=>{const s=function(e,t){const a=void 0!==t?t:`h${e}`;return p.includes(a)?{fontSize:`var(--mantine-${a}-font-size)`,fontWeight:`var(--mantine-${a}-font-weight)`,lineHeight:`var(--mantine-${a}-line-height)`}:{fontSize:(0,m.D)(a),fontWeight:`var(--mantine-h${e}-font-weight)`,lineHeight:`var(--mantine-h${e}-line-height)`}}(t,a);return{root:{"--title-fw":s.fontWeight,"--title-lh":s.lineHeight,"--title-fz":s.fontSize,"--title-line-clamp":"number"==typeof r?r.toString():void 0,"--title-text-wrap":n}}})),f=(0,u.P)(((e,t)=>{const a=(0,l.Y)("Title",h,e),{classNames:r,className:n,style:s,styles:i,unstyled:u,order:m,vars:p,size:f,variant:v,lineClamp:b,textWrap:w,mod:E,...x}=a,C=(0,c.I)({name:"Title",props:a,classes:g,className:n,style:s,classNames:r,styles:i,unstyled:u,vars:p,varsResolver:y});return[1,2,3,4,5,6].includes(m)?(0,o.jsx)(d.a,{...C("root"),component:`h${m}`,variant:v,ref:t,mod:[{order:m,"data-line-clamp":"number"==typeof b},E],size:f,...x}):null}));f.classes=g,f.displayName="@mantine/core/Title";var v=a(7826),b="Welcome-module--avatarZoom--710e5",w="Welcome-module--title--d5b99",E=a(2532);function x(){return r.createElement(r.Fragment,null,r.createElement(n.o,{pt:70},r.createElement(s.m,{label:"Hello!",position:"center"},r.createElement("div",null," ",r.createElement(E.S,{src:"../../images/avatar.png",className:b,width:150,style:{borderRadius:"50%"},alt:"",quality:95,__imageData:a(838)})))),r.createElement(f,{className:w,ta:"center",mt:10},"Adham Elarabawy"),r.createElement(v.E,{color:"dimmed",ta:"center",size:"lg",maw:580,mx:"auto",mt:"l"},"Machine Learning Researcher"))}var C=a(1503),N=a(4999),S=a(2809),k=a(2625),j=a(3338),_=a(5615),L=a(424);var $=function(){return r.createElement(N.Y,{gap:0,mt:1,justify:"center",wrap:"nowrap"},r.createElement(S.M,{size:"lg",color:"gray",variant:"subtle",component:"a",href:"https://github.com/adham-elarabawy",target:"_blank",rel:"noopener noreferrer"},r.createElement(k.A,{style:{width:18,height:18},stroke:1.5})),r.createElement(S.M,{size:"lg",color:"gray",variant:"subtle",component:"a",href:"https://www.linkedin.com/in/adham-elarabawy/",target:"_blank",rel:"noopener noreferrer"},r.createElement(j.A,{style:{width:18,height:18},stroke:1.5})),r.createElement(S.M,{size:"lg",color:"gray",variant:"subtle",component:"a",href:"https://www.youtube.com/channel/UCMXZwXFwd7tI7pO7vUo5iuQ",target:"_blank",rel:"noopener noreferrer"},r.createElement(_.A,{style:{width:18,height:18},stroke:1.5})),r.createElement(S.M,{size:"lg",color:"gray",variant:"subtle",component:"a",href:"https://twitter.com/adhamelarabawy",target:"_blank",rel:"noopener noreferrer"},r.createElement(L.A,{style:{width:18,height:18},stroke:1.5})))},z=a(6960),I=a(3974),T=a(3052),P=a(8459),R=a(7602),A=a(6324);function Y(e,t){return e in t.breakpoints?(0,P.px)(t.breakpoints[e]):(0,P.px)(e)}function W(e){return"object"==typeof e&&null!==e?"base"in e?e.base:void 0:e}var O=a(1101),q=a(5074);function M({spacing:e,verticalSpacing:t,cols:a,selector:r}){const n=(0,O.xd)(),s=void 0===t?e:t,i=(0,R.J)({"--sg-spacing-x":(0,A.GY)(W(e)),"--sg-spacing-y":(0,A.GY)(W(s)),"--sg-cols":W(a)?.toString()}),l=(0,T.H)(n.breakpoints).reduce(((t,r)=>(t[r]||(t[r]={}),"object"==typeof e&&void 0!==e[r]&&(t[r]["--sg-spacing-x"]=(0,A.GY)(e[r])),"object"==typeof s&&void 0!==s[r]&&(t[r]["--sg-spacing-y"]=(0,A.GY)(s[r])),"object"==typeof a&&void 0!==a[r]&&(t[r]["--sg-cols"]=a[r]),t)),{}),c=function(e,t){const a=e.map((e=>({value:e,px:Y(e,t)})));return a.sort(((e,t)=>e.px-t.px)),a}((0,T.H)(l),n).filter((e=>(0,T.H)(l[e.value]).length>0)),d=c.map((e=>({query:`(min-width: ${n.breakpoints[e.value]})`,styles:l[e.value]})));return(0,o.jsx)(q.K,{styles:i,media:d,selector:r})}function G(e){return"object"==typeof e&&null!==e?(0,T.H)(e):[]}function H({spacing:e,verticalSpacing:t,cols:a}){return function(e){return e.sort(((e,t)=>(0,P.px)(e)-(0,P.px)(t)))}(Array.from(new Set([...G(e),...G(t),...G(a)])))}function F({spacing:e,verticalSpacing:t,cols:a,selector:r}){const n=void 0===t?e:t,s=(0,R.J)({"--sg-spacing-x":(0,A.GY)(W(e)),"--sg-spacing-y":(0,A.GY)(W(n)),"--sg-cols":W(a)?.toString()}),i=H({spacing:e,verticalSpacing:t,cols:a}),l=i.reduce(((t,r)=>(t[r]||(t[r]={}),"object"==typeof e&&void 0!==e[r]&&(t[r]["--sg-spacing-x"]=(0,A.GY)(e[r])),"object"==typeof n&&void 0!==n[r]&&(t[r]["--sg-spacing-y"]=(0,A.GY)(n[r])),"object"==typeof a&&void 0!==a[r]&&(t[r]["--sg-cols"]=a[r]),t)),{}),c=i.map((e=>({query:`simple-grid (min-width: ${e})`,styles:l[e]})));return(0,o.jsx)(q.K,{styles:s,container:c,selector:r})}var D={container:"m_925c2d2c",root:"m_2415a157"};const U={cols:1,spacing:"md",type:"media"},V=(0,u.P)(((e,t)=>{const a=(0,l.Y)("SimpleGrid",U,e),{classNames:r,className:n,style:s,styles:i,unstyled:u,vars:m,cols:p,verticalSpacing:g,spacing:h,type:y,...f}=a,v=(0,c.I)({name:"SimpleGrid",classes:D,props:a,className:n,style:s,classNames:r,styles:i,unstyled:u,vars:m}),b=(0,I.C)();return"container"===y?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(F,{...a,selector:`.${b}`}),(0,o.jsx)("div",{...v("container"),children:(0,o.jsx)(d.a,{ref:t,...v("root",{className:b}),...f})})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(M,{...a,selector:`.${b}`}),(0,o.jsx)(d.a,{ref:t,...v("root",{className:b}),...f})]})}));function B(e){let{data:t}=e;const a=t.allMdx.nodes.sort(((e,t)=>e.frontmatter.sort_id-t.frontmatter.sort_id));return console.log("Projects data:",a),r.createElement(n.o,{style:{marginTop:"20px"}},r.createElement(V,{cols:{base:1,sm:2},spacing:"sm",verticalSpacing:"sm"},a.map((e=>r.createElement("div",{key:e.id},r.createElement(z.U,{project:{...e.frontmatter,url_override:e.frontmatter.url_override}}))))))}V.classes=D,V.displayName="@mantine/core/SimpleGrid";function J(e){let{data:t}=e;return r.createElement(C.M,null,r.createElement(x,null),r.createElement($,null),r.createElement(B,{data:t}))}},838:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#c8c8d8","images":{"fallback":{"src":"/static/279e7f22264a4bf0ed1862c77396864b/63b96/avatar.png","srcSet":"/static/279e7f22264a4bf0ed1862c77396864b/517b8/avatar.png 38w,\\n/static/279e7f22264a4bf0ed1862c77396864b/d88ae/avatar.png 75w,\\n/static/279e7f22264a4bf0ed1862c77396864b/63b96/avatar.png 150w,\\n/static/279e7f22264a4bf0ed1862c77396864b/a6496/avatar.png 300w","sizes":"(min-width: 150px) 150px, 100vw"},"sources":[{"srcSet":"/static/279e7f22264a4bf0ed1862c77396864b/4e06d/avatar.webp 38w,\\n/static/279e7f22264a4bf0ed1862c77396864b/90a8f/avatar.webp 75w,\\n/static/279e7f22264a4bf0ed1862c77396864b/3041a/avatar.webp 150w,\\n/static/279e7f22264a4bf0ed1862c77396864b/8964a/avatar.webp 300w","type":"image/webp","sizes":"(min-width: 150px) 150px, 100vw"}]},"width":150,"height":145.99999999999997}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-5e869b88a093450de3e4.js.map