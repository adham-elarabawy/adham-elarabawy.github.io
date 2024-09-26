/*! For license information please see d75727903ab8578dbc04e2b8b20753e54010bf02-73e7fb45a6a4b1a282af.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[610],{1503:function(e,t,r){r.d(t,{M:function(){return T}});var n={};r.r(n),r.d(n,{qr:function(){return P},vW:function(){return I},yJ:function(){return D}});var o=r(6540),a=r(9919),s=r(4999),i=r(6945);function c(e,t){return(0,i.U)("(prefers-color-scheme: dark)","dark"===e,t)?"dark":"light"}var l=r(6192);function m(e){const t=document.createElement("style");t.setAttribute("data-mantine-styles","inline"),t.innerHTML="*, *::before, *::after {transition: none !important;}",t.setAttribute("data-mantine-disable-transition","true"),e&&t.setAttribute("nonce",e),document.head.appendChild(t);return()=>document.querySelectorAll("[data-mantine-disable-transition]").forEach((e=>e.remove()))}function p({keepTransitions:e}={}){const t=(0,o.useRef)(),r=(0,o.useRef)(),n=(0,o.useContext)(l.A$),a=(0,l.WV)(),s=(0,o.useRef)(a?.());if(!n)throw new Error("[@mantine/core] MantineProvider was not found in tree");const i=o=>{n.setColorScheme(o),t.current=e?()=>{}:m(s.current),window.clearTimeout(r.current),r.current=window.setTimeout((()=>{t.current?.()}),10)},p=c("light",{getInitialValueInEffect:!1}),u="auto"===n.colorScheme?p:n.colorScheme,d=(0,o.useCallback)((()=>i("light"===u?"dark":"light")),[i,u]);return(0,o.useEffect)((()=>()=>{t.current?.(),window.clearTimeout(r.current)}),[]),{colorScheme:n.colorScheme,setColorScheme:i,clearColorScheme:()=>{n.clearColorScheme(),t.current=e?()=>{}:m(s.current),window.clearTimeout(r.current),r.current=window.setTimeout((()=>{t.current?.()}),10)},toggleColorScheme:d}}var u=r(2809),d=r(8728),y=(0,d.A)("outline","sun","IconSun",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7",key:"svg-1"}]]),f=(0,d.A)("outline","moon","IconMoon",[["path",{d:"M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z",key:"svg-0"}]]),h=r(4164),g="ColorSchemeToggle-module--dark--1942a",v="ColorSchemeToggle-module--icon--3d77a",b="ColorSchemeToggle-module--light--3d650";function x(){const{setColorScheme:e}=p(),t=function(e,t={getInitialValueInEffect:!0}){const r=c(e,t),{colorScheme:n}=p();return"auto"===n?r:n}("light",{getInitialValueInEffect:!0});return o.createElement(u.M,{onClick:()=>e("light"===t?"dark":"light"),variant:"default",size:"xl","aria-label":"Toggle color scheme"},o.createElement(y,{className:(0,h.A)(v,b),stroke:1.5}),o.createElement(f,{className:(0,h.A)(v,g),stroke:1.5}))}var w=r(4794);const N=[{link:"/",label:"Home"},{link:"/resume",label:"Resume"}];function k(e){let{location:t={pathname:"/"}}=e;const r="/"===(n=t.pathname)?n:n.endsWith("/")?n.slice(0,-1):n;var n;const a=N.map((e=>o.createElement(w.Link,{key:e.label,to:e.link,className:"Header-module--link--34a15","data-active":r===e.link?"true":void 0},e.label)));return o.createElement("header",{className:"Header-module--header--aa06a"},o.createElement("div",{className:"Header-module--inner--72b6a"},o.createElement("div",{className:"Header-module--navContainer--8bd7b"},o.createElement(s.Y,{gap:5,className:"Header-module--navGroup--58c85"},a)),o.createElement("div",{className:"Header-module--ColorSchemeToggle--6807f"},o.createElement(x,null))))}var C=r(1101),A=r(2659),E=r(7826),S=r(8149),z=r(2625),$=r(3338),j=r(5615),_=r(424),P="Footer-module--footer--519a5",I="Footer-module--inner--f4821",D="Footer-module--links--37f40";function R(){const e=(0,C.xd)(),{colorScheme:t}=p(),r="dark"===t?e.colors.dark[0]:e.colors.gray[7];return o.createElement("div",{className:P},o.createElement(A.m,{className:I},o.createElement(E.E,{align:"center",size:"sm",color:r,className:n.copyright},"© 2024 Adham Elarabawy. All rights reserved."),o.createElement(s.Y,{gap:0,className:D,justify:"flex-end",wrap:"nowrap"},o.createElement(u.M,{size:"lg",color:"gray",variant:"subtle",component:"a",href:"https://github.com/adham-elarabawy",target:"_blank",rel:"noopener noreferrer"},o.createElement(z.A,{style:{width:(0,S.D)(18),height:(0,S.D)(18)},stroke:1.5})),o.createElement(u.M,{size:"lg",color:"gray",variant:"subtle",component:"a",href:"https://www.linkedin.com/in/adham-elarabawy/",target:"_blank",rel:"noopener noreferrer"},o.createElement($.A,{style:{width:(0,S.D)(18),height:(0,S.D)(18)},stroke:1.5})),o.createElement(u.M,{size:"lg",color:"gray",variant:"subtle",component:"a",href:"https://www.youtube.com/channel/UCMXZwXFwd7tI7pO7vUo5iuQ",target:"_blank",rel:"noopener noreferrer"},o.createElement(j.A,{style:{width:(0,S.D)(18),height:(0,S.D)(18)},stroke:1.5})),o.createElement(u.M,{size:"lg",color:"gray",variant:"subtle",component:"a",href:"https://twitter.com/adhamelarabawy",target:"_blank",rel:"noopener noreferrer"},o.createElement(_.A,{style:{width:(0,S.D)(18),height:(0,S.D)(18)},stroke:1.5})))))}var Y=r(6462);const T=e=>{let{children:t}=e;const r=(0,Y.useLocation)();return o.createElement(a.e,{transition:"fade",duration:150,timingFunction:"ease-out",mounted:!0},(e=>o.createElement("div",{style:e},o.createElement(k,{location:r}),o.createElement("div",{className:"mx-auto mb-12 max-w-5xl"},t),o.createElement(R,null))))}},2809:function(e,t,r){r.d(t,{M:function(){return w}});var n=r(4848),o=(r(6540),r(6324)),a=r(9396),s=r(6100),i=r(9205),c=r(134),l=r(8639),m=r(4952),p=r(9919),u=r(6076),d=r(8149),y=r(2412),f={root:"m_8d3f4000",icon:"m_8d3afb97",loader:"m_302b9fb1",group:"m_1a0f1b21"};const h={orientation:"horizontal"},g=(0,a.V)(((e,{borderWidth:t})=>({group:{"--ai-border-width":(0,d.D)(t)}}))),v=(0,y.P)(((e,t)=>{const r=(0,s.Y)("ActionIconGroup",h,e),{className:o,style:a,classNames:l,styles:m,unstyled:p,orientation:u,vars:d,borderWidth:y,variant:v,mod:b,...x}=(0,s.Y)("ActionIconGroup",h,e),w=(0,i.I)({name:"ActionIconGroup",props:r,classes:f,className:o,style:a,classNames:l,styles:m,unstyled:p,vars:d,varsResolver:g,rootSelector:"group"});return(0,n.jsx)(c.a,{...w("group"),ref:t,variant:v,mod:[{"data-orientation":u},b],role:"group",...x})}));v.classes=f,v.displayName="@mantine/core/ActionIconGroup";const b={},x=(0,a.V)(((e,{size:t,radius:r,variant:n,gradient:a,color:s,autoContrast:i})=>{const c=e.variantColorResolver({color:s||e.primaryColor,theme:e,gradient:a,variant:n||"filled",autoContrast:i});return{root:{"--ai-size":(0,o.YC)(t,"ai-size"),"--ai-radius":void 0===r?void 0:(0,o.nJ)(r),"--ai-bg":s||n?c.background:void 0,"--ai-hover":s||n?c.hover:void 0,"--ai-hover-color":s||n?c.hoverColor:void 0,"--ai-color":c.color,"--ai-bd":s||n?c.border:void 0}}})),w=(0,l.v)(((e,t)=>{const r=(0,s.Y)("ActionIcon",b,e),{className:o,unstyled:a,variant:l,classNames:d,styles:y,style:h,loading:g,loaderProps:v,size:w,color:N,radius:k,__staticSelector:C,gradient:A,vars:E,children:S,disabled:z,"data-disabled":$,autoContrast:j,mod:_,...P}=r,I=(0,i.I)({name:["ActionIcon",C],props:r,className:o,style:h,classes:f,classNames:d,styles:y,unstyled:a,vars:E,varsResolver:x});return(0,n.jsxs)(u.N,{...I("root",{active:!z&&!g&&!$}),...P,unstyled:a,variant:l,size:w,disabled:z||g,ref:t,mod:[{loading:g,disabled:z||$},_],children:[(0,n.jsx)(p.e,{mounted:!!g,transition:"slide-down",duration:150,children:e=>(0,n.jsx)(c.a,{component:"span",...I("loader",{style:e}),"aria-hidden":!0,children:(0,n.jsx)(m.a,{color:"var(--ai-color)",size:"calc(var(--ai-size) * 0.55)",...v})})}),(0,n.jsx)(c.a,{component:"span",mod:{loading:g},...I("icon"),children:S})]})}));w.classes=f,w.displayName="@mantine/core/ActionIcon",w.Group=v},2659:function(e,t,r){r.d(t,{m:function(){return d}});var n=r(4848),o=(r(6540),r(6324)),a=r(9396),s=r(6100),i=r(9205),c=r(134),l=r(2412),m={root:"m_7485cace"};const p={},u=(0,a.V)(((e,{size:t,fluid:r})=>({root:{"--container-size":r?void 0:(0,o.YC)(t,"container-size")}}))),d=(0,l.P)(((e,t)=>{const r=(0,s.Y)("Container",p,e),{classNames:o,className:a,style:l,styles:d,unstyled:y,vars:f,fluid:h,mod:g,...v}=r,b=(0,i.I)({name:"Container",classes:m,props:r,className:a,style:l,classNames:o,styles:d,unstyled:y,vars:f,varsResolver:u});return(0,n.jsx)(c.a,{ref:t,mod:[{fluid:h},g],...b("root"),...v})}));d.classes=m,d.displayName="@mantine/core/Container"},4999:function(e,t,r){r.d(t,{Y:function(){return y}});var n=r(4848),o=r(6540),a=r(6324),s=r(9396),i=r(6100),c=r(9205),l=r(134),m=r(2412);var p={root:"m_4081bf90"};const u={preventGrowOverflow:!0,gap:"md",align:"center",justify:"flex-start",wrap:"wrap"},d=(0,s.V)(((e,{grow:t,preventGrowOverflow:r,gap:n,align:o,justify:s,wrap:i},{childWidth:c})=>({root:{"--group-child-width":t&&r?c:void 0,"--group-gap":(0,a.GY)(n),"--group-align":o,"--group-justify":s,"--group-wrap":i}}))),y=(0,m.P)(((e,t)=>{const r=(0,i.Y)("Group",u,e),{classNames:s,className:m,style:y,styles:f,unstyled:h,children:g,gap:v,align:b,justify:x,wrap:w,grow:N,preventGrowOverflow:k,vars:C,variant:A,__size:E,mod:S,...z}=r,$=function(e){return o.Children.toArray(e).filter(Boolean)}(g),j=$.length,_=(0,a.GY)(v??"md"),P={childWidth:`calc(${100/j}% - (${_} - ${_} / ${j}))`},I=(0,c.I)({name:"Group",props:r,stylesCtx:P,className:m,style:y,classes:p,classNames:s,styles:f,unstyled:h,vars:C,varsResolver:d});return(0,n.jsx)(l.a,{...I("root"),ref:t,variant:A,mod:[{grow:N},S],size:E,...z,children:$})}));y.classes=p,y.displayName="@mantine/core/Group"},4952:function(e,t,r){r.d(t,{a:function(){return b}});var n=r(4848),o=r(6540),a=r(6324),s=r(9396),i=r(6344),c=r(6100),l=r(9205),m=r(134),p=r(2412),u=r(4164),d={root:"m_5ae2e3c",barsLoader:"m_7a2bd4cd",bar:"m_870bb79","bars-loader-animation":"m_5d2b3b9d",dotsLoader:"m_4e3f22d7",dot:"m_870c4af","loader-dots-animation":"m_aac34a1",ovalLoader:"m_b34414df","oval-loader-animation":"m_f8e89c4b"};const y=(0,o.forwardRef)((({className:e,...t},r)=>(0,n.jsxs)(m.a,{component:"span",className:(0,u.A)(d.barsLoader,e),...t,ref:r,children:[(0,n.jsx)("span",{className:d.bar}),(0,n.jsx)("span",{className:d.bar}),(0,n.jsx)("span",{className:d.bar})]}))),f=(0,o.forwardRef)((({className:e,...t},r)=>(0,n.jsxs)(m.a,{component:"span",className:(0,u.A)(d.dotsLoader,e),...t,ref:r,children:[(0,n.jsx)("span",{className:d.dot}),(0,n.jsx)("span",{className:d.dot}),(0,n.jsx)("span",{className:d.dot})]}))),h={bars:y,oval:(0,o.forwardRef)((({className:e,...t},r)=>(0,n.jsx)(m.a,{component:"span",className:(0,u.A)(d.ovalLoader,e),...t,ref:r}))),dots:f},g={loaders:h,type:"oval"},v=(0,s.V)(((e,{size:t,color:r})=>({root:{"--loader-size":(0,a.YC)(t,"loader-size"),"--loader-color":r?(0,i.r)(r,e):void 0}}))),b=(0,p.P)(((e,t)=>{const r=(0,c.Y)("Loader",g,e),{size:o,color:a,type:s,vars:i,className:p,style:u,classNames:y,styles:f,unstyled:h,loaders:b,variant:x,children:w,...N}=r,k=(0,l.I)({name:"Loader",props:r,classes:d,className:p,style:u,classNames:y,styles:f,unstyled:h,vars:i,varsResolver:v});return w?(0,n.jsx)(m.a,{...k("root"),ref:t,...N,children:w}):(0,n.jsx)(m.a,{...k("root"),ref:t,component:b[s],variant:x,size:o,...N})}));b.defaultLoaders=h,b.classes=d,b.displayName="@mantine/core/Loader"},7826:function(e,t,r){r.d(t,{E:function(){return h}});var n=r(4848),o=(r(6540),r(6324)),a=r(9396),s=r(6344),i=r(1752),c=r(6100),l=r(9205),m=r(134),p=r(8639),u={root:"m_b6d8b162"};function d(e){return"start"===e?"start":"end"===e||e?"end":void 0}const y={inherit:!1},f=(0,a.V)(((e,{variant:t,lineClamp:r,gradient:n,size:a,color:c})=>({root:{"--text-fz":(0,o.ny)(a),"--text-lh":(0,o.ks)(a),"--text-gradient":"gradient"===t?(0,i.v)(n,e):void 0,"--text-line-clamp":"number"==typeof r?r.toString():void 0,"--text-color":c?(0,s.r)(c,e):void 0}}))),h=(0,p.v)(((e,t)=>{const r=(0,c.Y)("Text",y,e),{lineClamp:o,truncate:a,inline:s,inherit:i,gradient:p,span:h,__staticSelector:g,vars:v,className:b,style:x,classNames:w,styles:N,unstyled:k,variant:C,mod:A,size:E,...S}=r,z=(0,l.I)({name:["Text",g],props:r,classes:u,className:b,style:x,classNames:w,styles:N,unstyled:k,vars:v,varsResolver:f});return(0,n.jsx)(m.a,{...z("root",{focusable:!0}),ref:t,component:h?"span":"p",variant:C,mod:[{"data-truncate":d(a),"data-line-clamp":"number"==typeof o,"data-inline":s,"data-inherit":i},A],size:E,...S})}));h.classes=u,h.displayName="@mantine/core/Text"},9919:function(e,t,r){r.d(t,{e:function(){return f}});var n=r(4848),o=r(8149),a=r(6540);const s=e=>({in:{opacity:1,transform:"scale(1)"},out:{opacity:0,transform:`scale(.9) translateY(${(0,o.D)("bottom"===e?10:-10)})`},transitionProperty:"transform, opacity"}),i={fade:{in:{opacity:1},out:{opacity:0},transitionProperty:"opacity"},"fade-up":{in:{opacity:1,transform:"translateY(0)"},out:{opacity:0,transform:`translateY(${(0,o.D)(30)}`},transitionProperty:"opacity, transform"},"fade-down":{in:{opacity:1,transform:"translateY(0)"},out:{opacity:0,transform:`translateY(${(0,o.D)(-30)}`},transitionProperty:"opacity, transform"},"fade-left":{in:{opacity:1,transform:"translateX(0)"},out:{opacity:0,transform:`translateX(${(0,o.D)(30)}`},transitionProperty:"opacity, transform"},"fade-right":{in:{opacity:1,transform:"translateX(0)"},out:{opacity:0,transform:`translateX(${(0,o.D)(-30)}`},transitionProperty:"opacity, transform"},scale:{in:{opacity:1,transform:"scale(1)"},out:{opacity:0,transform:"scale(0)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"scale-y":{in:{opacity:1,transform:"scaleY(1)"},out:{opacity:0,transform:"scaleY(0)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"scale-x":{in:{opacity:1,transform:"scaleX(1)"},out:{opacity:0,transform:"scaleX(0)"},common:{transformOrigin:"left"},transitionProperty:"transform, opacity"},"skew-up":{in:{opacity:1,transform:"translateY(0) skew(0deg, 0deg)"},out:{opacity:0,transform:`translateY(${(0,o.D)(-20)}) skew(-10deg, -5deg)`},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"skew-down":{in:{opacity:1,transform:"translateY(0) skew(0deg, 0deg)"},out:{opacity:0,transform:`translateY(${(0,o.D)(20)}) skew(-10deg, -5deg)`},common:{transformOrigin:"bottom"},transitionProperty:"transform, opacity"},"rotate-left":{in:{opacity:1,transform:"translateY(0) rotate(0deg)"},out:{opacity:0,transform:`translateY(${(0,o.D)(20)}) rotate(-5deg)`},common:{transformOrigin:"bottom"},transitionProperty:"transform, opacity"},"rotate-right":{in:{opacity:1,transform:"translateY(0) rotate(0deg)"},out:{opacity:0,transform:`translateY(${(0,o.D)(20)}) rotate(5deg)`},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"slide-down":{in:{opacity:1,transform:"translateY(0)"},out:{opacity:0,transform:"translateY(-100%)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"slide-up":{in:{opacity:1,transform:"translateY(0)"},out:{opacity:0,transform:"translateY(100%)"},common:{transformOrigin:"bottom"},transitionProperty:"transform, opacity"},"slide-left":{in:{opacity:1,transform:"translateX(0)"},out:{opacity:0,transform:"translateX(100%)"},common:{transformOrigin:"left"},transitionProperty:"transform, opacity"},"slide-right":{in:{opacity:1,transform:"translateX(0)"},out:{opacity:0,transform:"translateX(-100%)"},common:{transformOrigin:"right"},transitionProperty:"transform, opacity"},pop:{...s("bottom"),common:{transformOrigin:"center center"}},"pop-bottom-left":{...s("bottom"),common:{transformOrigin:"bottom left"}},"pop-bottom-right":{...s("bottom"),common:{transformOrigin:"bottom right"}},"pop-top-left":{...s("top"),common:{transformOrigin:"top left"}},"pop-top-right":{...s("top"),common:{transformOrigin:"top right"}}},c={entering:"in",entered:"in",exiting:"out",exited:"out","pre-exiting":"out","pre-entering":"out"};function l({transition:e,state:t,duration:r,timingFunction:n}){const o={transitionDuration:`${r}ms`,transitionTimingFunction:n};return"string"==typeof e?e in i?{transitionProperty:i[e].transitionProperty,...o,...i[e].common,...i[e][c[t]]}:{}:{transitionProperty:e.transitionProperty,...o,...e.common,...e[c[t]]}}var m=r(961),p=r(6945);var u=r(297),d=r(1101);function y({duration:e,exitDuration:t,timingFunction:r,mounted:n,onEnter:o,onExit:s,onEntered:i,onExited:c,enterDelay:l,exitDelay:y}){const f=(0,d.xd)(),h=(0,p.U)("(prefers-reduced-motion: reduce)",g,v);var g,v;const b=!!f.respectReducedMotion&&h,[x,w]=(0,a.useState)(b?0:e),[N,k]=(0,a.useState)(n?"entered":"exited"),C=(0,a.useRef)(-1),A=(0,a.useRef)(-1),E=(0,a.useRef)(-1),S=r=>{const n=r?o:s,a=r?i:c;window.clearTimeout(C.current);const l=b?0:r?e:t;w(l),0===l?("function"==typeof n&&n(),"function"==typeof a&&a(),k(r?"entered":"exited")):E.current=requestAnimationFrame((()=>{m.flushSync((()=>{k(r?"pre-entering":"pre-exiting")})),E.current=requestAnimationFrame((()=>{"function"==typeof n&&n(),k(r?"entering":"exiting"),C.current=window.setTimeout((()=>{"function"==typeof a&&a(),k(r?"entered":"exited")}),l)}))}))};return(0,u.C)((()=>{var e;e=n,window.clearTimeout(A.current),"number"==typeof(e?l:y)?A.current=window.setTimeout((()=>{S(e)}),e?l:y):S(e)}),[n]),(0,a.useEffect)((()=>()=>{window.clearTimeout(C.current),cancelAnimationFrame(E.current)}),[]),{transitionDuration:x,transitionStatus:N,transitionTimingFunction:r||"ease"}}function f({keepMounted:e,transition:t="fade",duration:r=250,exitDuration:o=r,mounted:a,children:s,timingFunction:i="ease",onExit:c,onEntered:m,onEnter:p,onExited:u,enterDelay:d,exitDelay:f}){const{transitionDuration:h,transitionStatus:g,transitionTimingFunction:v}=y({mounted:a,exitDuration:o,duration:r,timingFunction:i,onExit:c,onEntered:m,onEnter:p,onExited:u,enterDelay:d,exitDelay:f});return 0===h?a?(0,n.jsx)(n.Fragment,{children:s({})}):e?s({display:"none"}):null:"exited"===g?e?s({display:"none"}):null:(0,n.jsx)(n.Fragment,{children:s(l({transition:t,duration:h,state:g,timingFunction:v}))})}f.displayName="@mantine/core/Transition"},6076:function(e,t,r){r.d(t,{N:function(){return m}});var n=r(4848),o=(r(6540),r(6100)),a=r(9205),s=r(134),i=r(8639),c={root:"m_87cf2631"};const l={__staticSelector:"UnstyledButton"},m=(0,i.v)(((e,t)=>{const r=(0,o.Y)("UnstyledButton",l,e),{className:i,component:m="button",__staticSelector:p,unstyled:u,classNames:d,styles:y,style:f,...h}=r,g=(0,a.I)({name:p,props:r,classes:c,className:i,style:f,classNames:d,styles:y,unstyled:u});return(0,n.jsx)(s.a,{...g("root",{focusable:!0}),component:m,ref:t,type:"button"===m?"button":void 0,...h})}));m.classes=c,m.displayName="@mantine/core/UnstyledButton"},134:function(e,t,r){r.d(t,{a:function(){return b}});var n=r(4848),o=r(6540),a=r(4164);var s=r(5074),i=r(2940),c=r(6192),l=r(1101);function m(e){return e.startsWith("data-")?e:`data-${e}`}function p(e){return e?"string"==typeof e?{[m(e)]:!0}:Array.isArray(e)?[...e].reduce(((e,t)=>({...e,...p(t)})),{}):(t=e,Object.keys(t).reduce(((e,r)=>{const n=t[r];return void 0===n||""===n||!1===n||null===n||(e[m(r)]=t[r]),e}),{})):null;var t}function u(e,t){return Array.isArray(e)?[...e].reduce(((e,r)=>({...e,...u(r,t)})),{}):"function"==typeof e?e(t):null==e?{}:e}function d({theme:e,style:t,vars:r,styleProps:n}){return{...u(t,e),...u(r,e),...n}}var y=r(7602);const f={m:{type:"spacing",property:"margin"},mt:{type:"spacing",property:"marginTop"},mb:{type:"spacing",property:"marginBottom"},ml:{type:"spacing",property:"marginLeft"},mr:{type:"spacing",property:"marginRight"},ms:{type:"spacing",property:"marginInlineStart"},me:{type:"spacing",property:"marginInlineEnd"},mx:{type:"spacing",property:"marginInline"},my:{type:"spacing",property:"marginBlock"},p:{type:"spacing",property:"padding"},pt:{type:"spacing",property:"paddingTop"},pb:{type:"spacing",property:"paddingBottom"},pl:{type:"spacing",property:"paddingLeft"},pr:{type:"spacing",property:"paddingRight"},ps:{type:"spacing",property:"paddingInlineStart"},pe:{type:"spacing",property:"paddingInlineEnd"},px:{type:"spacing",property:"paddingInline"},py:{type:"spacing",property:"paddingBlock"},bd:{type:"border",property:"border"},bg:{type:"color",property:"background"},c:{type:"textColor",property:"color"},opacity:{type:"identity",property:"opacity"},ff:{type:"fontFamily",property:"fontFamily"},fz:{type:"fontSize",property:"fontSize"},fw:{type:"identity",property:"fontWeight"},lts:{type:"size",property:"letterSpacing"},ta:{type:"identity",property:"textAlign"},lh:{type:"lineHeight",property:"lineHeight"},fs:{type:"identity",property:"fontStyle"},tt:{type:"identity",property:"textTransform"},td:{type:"identity",property:"textDecoration"},w:{type:"spacing",property:"width"},miw:{type:"spacing",property:"minWidth"},maw:{type:"spacing",property:"maxWidth"},h:{type:"spacing",property:"height"},mih:{type:"spacing",property:"minHeight"},mah:{type:"spacing",property:"maxHeight"},bgsz:{type:"size",property:"backgroundSize"},bgp:{type:"identity",property:"backgroundPosition"},bgr:{type:"identity",property:"backgroundRepeat"},bga:{type:"identity",property:"backgroundAttachment"},pos:{type:"identity",property:"position"},top:{type:"identity",property:"top"},left:{type:"size",property:"left"},bottom:{type:"size",property:"bottom"},right:{type:"size",property:"right"},inset:{type:"size",property:"inset"},display:{type:"identity",property:"display"},flex:{type:"identity",property:"flex"}};var h=r(3552),g=r(3974);const v=(0,o.forwardRef)((({component:e,style:t,__vars:r,className:o,variant:m,mod:u,size:v,hiddenFrom:b,visibleFrom:x,lightHidden:w,darkHidden:N,renderRoot:k,__size:C,...A},E)=>{const S=(0,l.xd)(),z=e||"div",{styleProps:$,rest:j}=function(e){const{m:t,mx:r,my:n,mt:o,mb:a,ml:s,mr:i,me:c,ms:l,p:m,px:p,py:u,pt:d,pb:f,pl:h,pr:g,pe:v,ps:b,bd:x,bg:w,c:N,opacity:k,ff:C,fz:A,fw:E,lts:S,ta:z,lh:$,fs:j,tt:_,td:P,w:I,miw:D,maw:R,h:Y,mih:T,mah:F,bgsz:M,bgp:O,bgr:L,bga:H,pos:W,top:B,left:G,bottom:X,right:V,inset:U,display:q,flex:J,hiddenFrom:K,visibleFrom:Z,lightHidden:Q,darkHidden:ee,sx:te,...re}=e;return{styleProps:(0,y.J)({m:t,mx:r,my:n,mt:o,mb:a,ml:s,mr:i,me:c,ms:l,p:m,px:p,py:u,pt:d,pb:f,pl:h,pr:g,pe:v,ps:b,bd:x,bg:w,c:N,opacity:k,ff:C,fz:A,fw:E,lts:S,ta:z,lh:$,fs:j,tt:_,td:P,w:I,miw:D,maw:R,h:Y,mih:T,mah:F,bgsz:M,bgp:O,bgr:L,bga:H,pos:W,top:B,left:G,bottom:X,right:V,inset:U,display:q,flex:J,hiddenFrom:K,visibleFrom:Z,lightHidden:Q,darkHidden:ee,sx:te}),rest:re}}(A),_=(0,c.NL)(),P=_?.()?.($.sx),I=(0,g.C)(),D=(0,h.X)({styleProps:$,theme:S,data:f}),R={ref:E,style:d({theme:S,style:t,vars:r,styleProps:D.inlineStyles}),className:(0,a.A)(o,P,{[I]:D.hasResponsiveStyles,"mantine-light-hidden":w,"mantine-dark-hidden":N,[`mantine-hidden-from-${b}`]:b,[`mantine-visible-from-${x}`]:x}),"data-variant":m,"data-size":(0,i.t)(v)?void 0:v||void 0,size:C,...p(u),...j};return(0,n.jsxs)(n.Fragment,{children:[D.hasResponsiveStyles&&(0,n.jsx)(s.K,{selector:`.${I}`,styles:D.styles,media:D.media}),"function"==typeof k?k(R):(0,n.jsx)(z,{...R})]})}));v.displayName="@mantine/core/Box";const b=v},3552:function(e,t,r){r.d(t,{X:function(){return d}});var n=r(3052),o=(r(6540),r(4848),r(8149)),a=r(9569);function s(e,t){const r=(0,a.g)({color:e,theme:t});return"dimmed"===r.color?"var(--mantine-color-dimmed)":"bright"===r.color?"var(--mantine-color-bright)":r.variable?`var(${r.variable})`:r.color}const i={text:"var(--mantine-font-family)",mono:"var(--mantine-font-family-monospace)",monospace:"var(--mantine-font-family-monospace)",heading:"var(--mantine-font-family-headings)",headings:"var(--mantine-font-family-headings)"};const c=["h1","h2","h3","h4","h5","h6"];const l=["h1","h2","h3","h4","h5","h6"];const m={color:s,textColor:function(e,t){const r=(0,a.g)({color:e,theme:t});return r.isThemeColor&&void 0===r.shade?`var(--mantine-color-${r.color}-text)`:s(e,t)},fontSize:function(e,t){return"string"==typeof e&&e in t.fontSizes?`var(--mantine-font-size-${e})`:"string"==typeof e&&c.includes(e)?`var(--mantine-${e}-font-size)`:"number"==typeof e||"string"==typeof e?(0,o.D)(e):e},spacing:function(e,t){if("number"==typeof e)return(0,o.D)(e);if("string"==typeof e){const r=e.replace("-","");if(!(r in t.spacing))return(0,o.D)(e);const n=`--mantine-spacing-${r}`;return e.startsWith("-")?`calc(var(${n}) * -1)`:`var(${n})`}return e},identity:function(e){return e},size:function(e){return"number"==typeof e?(0,o.D)(e):e},lineHeight:function(e,t){return"string"==typeof e&&e in t.lineHeights?`var(--mantine-line-height-${e})`:"string"==typeof e&&l.includes(e)?`var(--mantine-${e}-line-height)`:e},fontFamily:function(e){return"string"==typeof e&&e in i?i[e]:e},border:function(e,t){if("number"==typeof e)return(0,o.D)(e);if("string"==typeof e){const[r,n,...a]=e.split(" ").filter((e=>""!==e.trim()));let i=`${(0,o.D)(r)}`;return n&&(i+=` ${n}`),a.length>0&&(i+=` ${s(a.join(" "),t)}`),i.trim()}return e}};function p(e){return e.replace("(min-width: ","").replace("em)","")}function u(e,t){return"object"==typeof e&&null!==e&&t in e?e[t]:e}function d({styleProps:e,data:t,theme:r}){return function({media:e,...t}){return{...t,media:Object.keys(e).sort(((e,t)=>Number(p(e))-Number(p(t)))).map((t=>({query:t,styles:e[t]})))}}((0,n.H)(e).reduce(((o,a)=>{if("hiddenFrom"===a||"visibleFrom"===a||"sx"===a)return o;const s=t[a],i=Array.isArray(s.property)?s.property:[s.property],c="object"==typeof(l=e[a])&&null!==l?"base"in l?l.base:void 0:l;var l;if(!function(e){if("object"!=typeof e||null===e)return!1;const t=Object.keys(e);return 1!==t.length||"base"!==t[0]}(e[a]))return i.forEach((e=>{o.inlineStyles[e]=m[s.type](c,r)})),o;o.hasResponsiveStyles=!0;const p=function(e){return"object"==typeof e&&null!==e?(0,n.H)(e).filter((e=>"base"!==e)):[]}(e[a]);return i.forEach((t=>{c&&(o.styles[t]=m[s.type](c,r)),p.forEach((n=>{const i=`(min-width: ${r.breakpoints[n]})`;o.media[i]={...o.media[i],[t]:m[s.type](u(e[a],n),r)}}))})),o}),{hasResponsiveStyles:!1,styles:{},inlineStyles:{},media:{}}))}},3974:function(e,t,r){r.d(t,{C:function(){return o}});var n=r(6540);function o(){return`__m__-${(0,n.useId)().replace(/:/g,"")}`}},5074:function(e,t,r){r.d(t,{K:function(){return c}});var n=r(4848),o=(r(6540),r(6192)),a=r(3052);function s(e){return(0,a.H)(e).reduce(((t,r)=>{return void 0!==e[r]?`${t}${n=r,n.replace(/[A-Z]/g,(e=>`-${e.toLowerCase()}`))}:${e[r]};`:t;var n}),"").trim()}function i({selector:e,styles:t,media:r,container:n}){const o=t?s(t):"",a=Array.isArray(r)?r.map((t=>`@media${t.query}{${e}{${s(t.styles)}}}`)):[],i=Array.isArray(n)?n.map((t=>`@container ${t.query}{${e}{${s(t.styles)}}}`)):[];return`${o?`${e}{${o}}`:""}${a.join("")}${i.join("")}`.trim()}function c(e){const t=(0,o.WV)();return(0,n.jsx)("style",{"data-mantine-styles":"inline",nonce:t?.(),dangerouslySetInnerHTML:{__html:i(e)}})}},6100:function(e,t,r){r.d(t,{Y:function(){return a}});var n=r(7602),o=(r(6540),r(4848),r(1101));function a(e,t,r){const a=(0,o.xd)(),s=a.components[e]?.defaultProps;return{...t,..."function"==typeof s?s(a):s,...(0,n.J)(r)}}},2412:function(e,t,r){r.d(t,{D:function(){return a},P:function(){return s}});var n=r(4848),o=r(6540);function a(e){return e}function s(e){const t=(0,o.forwardRef)(e);return t.extend=a,t.withProps=e=>{const r=(0,o.forwardRef)(((r,o)=>(0,n.jsx)(t,{...e,...r,ref:o})));return r.extend=t.extend,r.displayName=`WithProps(${t.displayName})`,r},t}},8639:function(e,t,r){r.d(t,{v:function(){return s}});var n=r(4848),o=r(6540),a=r(2412);function s(e){const t=(0,o.forwardRef)(e);return t.withProps=e=>{const r=(0,o.forwardRef)(((r,o)=>(0,n.jsx)(t,{...e,...r,ref:o})));return r.extend=t.extend,r.displayName=`WithProps(${t.displayName})`,r},t.extend=a.D,t}},9396:function(e,t,r){function n(e){return e}r.d(t,{V:function(){return n}})},9205:function(e,t,r){r.d(t,{I:function(){return g}});r(6540),r(4848);var n=r(6192),o=r(1101),a=r(4164);const s={always:"mantine-focus-always",auto:"mantine-focus-auto",never:"mantine-focus-never"};const i={};function c({theme:e,classNames:t,props:r,stylesCtx:n}){return function(e){const t={};return e.forEach((e=>{Object.entries(e).forEach((([e,r])=>{t[e]?t[e]=(0,a.A)(t[e],r):t[e]=r}))})),t}((Array.isArray(t)?t:[t]).map((t=>"function"==typeof t?t(e,r,n):t||i)))}function l({selector:e,stylesCtx:t,theme:r,classNames:n,props:o}){return c({theme:r,classNames:n,props:o,stylesCtx:t})[e]}function m({theme:e,options:t,themeName:r,selector:n,classNamesPrefix:o,classNames:i,classes:m,unstyled:p,className:u,rootSelector:d,props:y,stylesCtx:f,withStaticClasses:h,headless:g,transformedStyles:v}){return(0,a.A)(function({theme:e,options:t,unstyled:r}){return(0,a.A)(t?.focusable&&!r&&(e.focusClassName||s[e.focusRing]),t?.active&&!r&&e.activeClassName)}({theme:e,options:t,unstyled:p||g}),function({themeName:e,theme:t,selector:r,props:n,stylesCtx:o}){return e.map((e=>c({theme:t,classNames:t.components[e]?.classNames,props:n,stylesCtx:o})?.[r]))}({theme:e,themeName:r,selector:n,props:y,stylesCtx:f}),function({options:e,classes:t,selector:r,unstyled:n}){return e?.variant&&!n?t[`${r}--${e.variant}`]:void 0}({options:t,classes:m,selector:n,unstyled:p}),l({selector:n,stylesCtx:f,theme:e,classNames:i,props:y}),l({selector:n,stylesCtx:f,theme:e,classNames:v,props:y}),function({selector:e,stylesCtx:t,options:r,props:n,theme:o}){return c({theme:o,classNames:r?.classNames,props:r?.props||n,stylesCtx:t})[e]}({selector:n,stylesCtx:f,options:t,props:y,theme:e}),function({rootSelector:e,selector:t,className:r}){return e===t?r:void 0}({rootSelector:d,selector:n,className:u}),function({selector:e,classes:t,unstyled:r}){return r?void 0:t[e]}({selector:n,classes:m,unstyled:p||g}),h&&!g&&function({themeName:e,classNamesPrefix:t,selector:r,withStaticClass:n}){return!1===n?[]:e.map((e=>`${t}-${e}-${r}`))}({themeName:r,classNamesPrefix:o,selector:n,withStaticClass:t?.withStaticClass}),t?.className)}function p({theme:e,styles:t,props:r,stylesCtx:n}){return(Array.isArray(t)?t:[t]).reduce(((t,o)=>"function"==typeof o?{...t,...o(e,r,n)}:{...t,...o}),{})}function u({theme:e,themeName:t,props:r,stylesCtx:n,selector:o}){return t.map((t=>p({theme:e,styles:e.components[t]?.styles,props:r,stylesCtx:n})[o])).reduce(((e,t)=>({...e,...t})),{})}function d({style:e,theme:t}){return Array.isArray(e)?[...e].reduce(((e,r)=>({...e,...d({style:r,theme:t})})),{}):"function"==typeof e?e(t):null==e?{}:e}var y=r(7602);function f({vars:e,varsResolver:t,theme:r,props:n,stylesCtx:o,selector:a,themeName:s,headless:i}){return function(e){return e.reduce(((e,t)=>(t&&Object.keys(t).forEach((r=>{e[r]={...e[r],...(0,y.J)(t[r])}})),e)),{})}([i?{}:t?.(r,n,o),...s.map((e=>r.components?.[e]?.vars?.(r,n,o))),e?.(r,n,o)])?.[a]}function h({theme:e,themeName:t,selector:r,options:n,props:o,stylesCtx:a,rootSelector:s,styles:i,style:c,vars:l,varsResolver:m,headless:y,withStylesTransform:h}){return{...!h&&u({theme:e,themeName:t,props:o,stylesCtx:a,selector:r}),...!h&&p({theme:e,styles:i,props:o,stylesCtx:a})[r],...!h&&p({theme:e,styles:n?.styles,props:n?.props||o,stylesCtx:a})[r],...f({theme:e,props:o,stylesCtx:a,vars:l,varsResolver:m,selector:r,themeName:t,headless:y}),...s===r?d({style:c,theme:e}):null,...d({style:n?.style,theme:e})}}function g({name:e,classes:t,props:r,stylesCtx:a,className:s,style:i,rootSelector:c="root",unstyled:l,classNames:p,styles:u,vars:d,varsResolver:y}){const f=(0,o.xd)(),g=(0,n.AI)(),v=(0,n.If)(),b=(0,n.FI)(),x=(Array.isArray(e)?e:[e]).filter((e=>e)),{withStylesTransform:w,getTransformedStyles:N}=function({props:e,stylesCtx:t,themeName:r}){const a=(0,o.xd)(),s=(0,n.m6)()?.();return{getTransformedStyles:n=>s?[...n.map((r=>s(r,{props:e,theme:a,ctx:t}))),...r.map((r=>s(a.components[r]?.styles,{props:e,theme:a,ctx:t})))].filter(Boolean):[],withStylesTransform:!!s}}({props:r,stylesCtx:a,themeName:x});return(e,n)=>({className:m({theme:f,options:n,themeName:x,selector:e,classNamesPrefix:g,classNames:p,classes:t,unstyled:l,className:s,rootSelector:c,props:r,stylesCtx:a,withStaticClasses:v,headless:b,transformedStyles:N([n?.styles,u])}),style:h({theme:f,themeName:x,selector:e,options:n,props:r,stylesCtx:a,rootSelector:c,styles:u,style:i,vars:d,varsResolver:y,headless:b,withStylesTransform:w})})}},7602:function(e,t,r){function n(e){return Object.keys(e).reduce(((t,r)=>(void 0!==e[r]&&(t[r]=e[r]),t)),{})}r.d(t,{J:function(){return n}})},6324:function(e,t,r){r.d(t,{GY:function(){return s},YC:function(){return a},dh:function(){return m},ks:function(){return l},nJ:function(){return i},ny:function(){return c}});var n=r(2940),o=r(8149);function a(e,t="size",r=!0){if(void 0!==e)return(0,n.t)(e)?r?(0,o.D)(e):e:`var(--${t}-${e})`}function s(e){return a(e,"mantine-spacing")}function i(e){return void 0===e?"var(--mantine-radius-default)":a(e,"mantine-radius")}function c(e){return a(e,"mantine-font-size")}function l(e){return a(e,"mantine-line-height",!1)}function m(e){if(e)return a(e,"mantine-shadow",!1)}},2940:function(e,t,r){function n(e){return"number"==typeof e||"string"==typeof e&&(!!(e.startsWith("calc(")||e.startsWith("var(")||e.includes(" ")&&""!==e.trim())||/[0-9]/.test(e.trim().replace("-","")[0]))}r.d(t,{t:function(){return n}})},297:function(e,t,r){r.d(t,{C:function(){return o}});var n=r(6540);function o(e,t){const r=(0,n.useRef)(!1);(0,n.useEffect)((()=>()=>{r.current=!1}),[]),(0,n.useEffect)((()=>{if(r.current)return e();r.current=!0}),t)}},6945:function(e,t,r){r.d(t,{U:function(){return o}});var n=r(6540);function o(e,t,{getInitialValueInEffect:r}={getInitialValueInEffect:!0}){const[o,a]=(0,n.useState)(r?t:function(e,t){return"boolean"==typeof t?t:"undefined"!=typeof window&&"matchMedia"in window&&window.matchMedia(e).matches}(e)),s=(0,n.useRef)();return(0,n.useEffect)((()=>{if("matchMedia"in window)return s.current=window.matchMedia(e),a(s.current.matches),function(e,t){try{return e.addEventListener("change",t),()=>e.removeEventListener("change",t)}catch(r){return e.addListener(t),()=>e.removeListener(t)}}(s.current,(e=>a(e.matches)))}),[e]),o}},8728:function(e,t,r){r.d(t,{A:function(){return a}});var n=r(6540),o={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};const a=(e,t,r,a)=>{const s=(0,n.forwardRef)((({color:r="currentColor",size:s=24,stroke:i=2,title:c,className:l,children:m,...p},u)=>(0,n.createElement)("svg",{ref:u,...o[e],width:s,height:s,className:["tabler-icon",`tabler-icon-${t}`,l].join(" "),..."filled"===e?{fill:r}:{strokeWidth:i,stroke:r},...p},[c&&(0,n.createElement)("title",{key:"svg-title"},c),...a.map((([e,t])=>(0,n.createElement)(e,t))),...Array.isArray(m)?m:[m]])));return s.displayName=`${r}`,s}},2625:function(e,t,r){r.d(t,{A:function(){return n}});var n=(0,r(8728).A)("outline","brand-github","IconBrandGithub",[["path",{d:"M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5",key:"svg-0"}]])},3338:function(e,t,r){r.d(t,{A:function(){return n}});var n=(0,r(8728).A)("outline","brand-linkedin","IconBrandLinkedin",[["path",{d:"M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M8 11l0 5",key:"svg-1"}],["path",{d:"M8 8l0 .01",key:"svg-2"}],["path",{d:"M12 16l0 -5",key:"svg-3"}],["path",{d:"M16 16v-3a2 2 0 0 0 -4 0",key:"svg-4"}]])},424:function(e,t,r){r.d(t,{A:function(){return n}});var n=(0,r(8728).A)("outline","brand-x","IconBrandX",[["path",{d:"M4 4l11.733 16h4.267l-11.733 -16z",key:"svg-0"}],["path",{d:"M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772",key:"svg-1"}]])},5615:function(e,t,r){r.d(t,{A:function(){return n}});var n=(0,r(8728).A)("outline","brand-youtube","IconBrandYoutube",[["path",{d:"M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z",key:"svg-0"}],["path",{d:"M10 9l5 3l-5 3z",key:"svg-1"}]])},4164:function(e,t,r){function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r)}else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}t.A=function(){for(var e,t,r=0,o="",a=arguments.length;r<a;r++)(e=arguments[r])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}}}]);
//# sourceMappingURL=d75727903ab8578dbc04e2b8b20753e54010bf02-73e7fb45a6a4b1a282af.js.map