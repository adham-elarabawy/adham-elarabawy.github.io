"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[194],{6701:function(t,e,o){o.r(e),o.d(e,{default:function(){return h}});var n=o(6540),r=o(1503),a=o(2659),s=o(1670),i=o(8091),l=o(5133),d=o(8149);function c({timeout:t=2e3}={}){const[e,o]=(0,n.useState)(null),[r,a]=(0,n.useState)(!1),[s,i]=(0,n.useState)(null);return{copy:e=>{"clipboard"in navigator?navigator.clipboard.writeText(e).then((()=>{return e=!0,window.clearTimeout(s),i(window.setTimeout((()=>a(!1)),t)),void a(e);var e})).catch((t=>o(t))):o(new Error("useClipboard: navigator.clipboard is not supported"))},reset:()=>{a(!1),o(null),window.clearTimeout(s)},error:e,copied:r}}var u=o(8728),p=(0,u.A)("outline","check","IconCheck",[["path",{d:"M5 12l5 5l10 -10",key:"svg-0"}]]),m=(0,u.A)("outline","copy","IconCopy",[["path",{d:"M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z",key:"svg-0"}],["path",{d:"M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1",key:"svg-1"}]]);function h(){const t="/images/resume.pdf",e=c();return n.createElement(r.M,null,n.createElement(a.m,{pt:80,size:"lg",mb:0,style:{paddingTop:"20px",paddingBottom:"0px"}}," ",n.createElement(s.o,null,n.createElement(i.m,{label:"Link copied!",offset:5,position:"bottom",radius:"xl",transitionProps:{duration:100,transition:"slide-down"},opened:e.copied},n.createElement(l.$,{variant:"light",rightSection:e.copied?n.createElement(p,{style:{width:(0,d.D)(20),height:(0,d.D)(20)},stroke:1.5}):n.createElement(m,{style:{width:(0,d.D)(20),height:(0,d.D)(20)},stroke:1.5}),radius:"xl",size:"sm",styles:{root:{paddingRight:(0,d.D)(14),height:(0,d.D)(48)},section:{marginLeft:(0,d.D)(22)}},onClick:()=>e.copy("https://www.adhamelarabawy.com/resume")},"Copy resume link to clipboard"))),n.createElement(s.o,{pt:20},n.createElement("iframe",{src:t,style:{width:"800px",height:"500px",border:"none"},allowFullScreen:!0},"This browser does not support PDFs. Please download the PDF to view it: ",n.createElement("a",{href:t},"Download PDF")))))}},5133:function(t,e,o){o.d(e,{$:function(){return k}});var n=o(4848),r=o(8149),a=(o(6540),o(6324)),s=o(9396),i=o(6100),l=o(9205),d=o(134),c=o(8639),u=o(4952),p=o(9919),m=o(6076),h=o(2412),b={root:"m_77c9d27d",inner:"m_80f1301b",label:"m_811560b9",section:"m_a74036a",loader:"m_a25b86ee",group:"m_80d6d844"};const v={orientation:"horizontal"},g=(0,s.V)(((t,{borderWidth:e})=>({group:{"--button-border-width":(0,r.D)(e)}}))),y=(0,h.P)(((t,e)=>{const o=(0,i.Y)("ButtonGroup",v,t),{className:r,style:a,classNames:s,styles:c,unstyled:u,orientation:p,vars:m,borderWidth:h,variant:y,mod:f,...w}=(0,i.Y)("ButtonGroup",v,t),x=(0,l.I)({name:"ButtonGroup",props:o,classes:b,className:r,style:a,classNames:s,styles:c,unstyled:u,vars:m,varsResolver:g,rootSelector:"group"});return(0,n.jsx)(d.a,{...x("group"),ref:e,variant:y,mod:[{"data-orientation":p},f],role:"group",...w})}));y.classes=b,y.displayName="@mantine/core/ButtonGroup";const f={in:{opacity:1,transform:`translate(-50%, calc(-50% + ${(0,r.D)(1)}))`},out:{opacity:0,transform:"translate(-50%, -200%)"},common:{transformOrigin:"center"},transitionProperty:"transform, opacity"},w={},x=(0,s.V)(((t,{radius:e,color:o,gradient:n,variant:r,size:s,justify:i,autoContrast:l})=>{const d=t.variantColorResolver({color:o||t.primaryColor,theme:t,gradient:n,variant:r||"filled",autoContrast:l});return{root:{"--button-justify":i,"--button-height":(0,a.YC)(s,"button-height"),"--button-padding-x":(0,a.YC)(s,"button-padding-x"),"--button-fz":s?.includes("compact")?(0,a.ny)(s.replace("compact-","")):(0,a.ny)(s),"--button-radius":void 0===e?void 0:(0,a.nJ)(e),"--button-bg":o||r?d.background:void 0,"--button-hover":o||r?d.hover:void 0,"--button-color":d.color,"--button-bd":o||r?d.border:void 0,"--button-hover-color":o||r?d.hoverColor:void 0}}})),k=(0,c.v)(((t,e)=>{const o=(0,i.Y)("Button",w,t),{style:r,vars:a,className:s,color:c,disabled:h,children:v,leftSection:g,rightSection:y,fullWidth:k,variant:C,radius:D,loading:j,loaderProps:E,gradient:N,classNames:_,styles:B,unstyled:P,"data-disabled":S,autoContrast:z,mod:T,...G}=o,Y=(0,l.I)({name:"Button",props:o,classes:b,className:s,style:r,classNames:_,styles:B,unstyled:P,vars:a,varsResolver:x}),F=!!g,I=!!y;return(0,n.jsxs)(m.N,{ref:e,...Y("root",{active:!h&&!j&&!S}),unstyled:P,variant:C,disabled:h||j,mod:[{disabled:h||S,loading:j,block:k,"with-left-section":F,"with-right-section":I},T],...G,children:[(0,n.jsx)(p.e,{mounted:!!j,transition:f,duration:150,children:t=>(0,n.jsx)(d.a,{component:"span",...Y("loader",{style:t}),"aria-hidden":!0,children:(0,n.jsx)(u.a,{color:"var(--button-color)",size:"calc(var(--button-height) / 1.8)",...E})})}),(0,n.jsxs)("span",{...Y("inner"),children:[g&&(0,n.jsx)(d.a,{component:"span",...Y("section"),mod:{position:"left"},children:g}),(0,n.jsx)(d.a,{component:"span",mod:{loading:j},...Y("label"),children:v}),y&&(0,n.jsx)(d.a,{component:"span",...Y("section"),mod:{position:"right"},children:y})]})]})}));k.classes=b,k.displayName="@mantine/core/Button",k.Group=y}}]);
//# sourceMappingURL=component---src-pages-resume-tsx-da541097c5ade1c724d9.js.map