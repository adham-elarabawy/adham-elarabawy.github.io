"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[194],{6701:function(e,t,o){o.r(t),o.d(t,{default:function(){return m}});var i=o(6540),n=o(1503),a=o(2659),r=o(1670),l=o(1983),s=o(5133),c=o(8149);function d({timeout:e=2e3}={}){const[t,o]=(0,i.useState)(null),[n,a]=(0,i.useState)(!1),[r,l]=(0,i.useState)(null);return{copy:t=>{"clipboard"in navigator?navigator.clipboard.writeText(t).then((()=>{return t=!0,window.clearTimeout(r),l(window.setTimeout((()=>a(!1)),e)),void a(t);var t})).catch((e=>o(e))):o(new Error("useClipboard: navigator.clipboard is not supported"))},reset:()=>{a(!1),o(null),window.clearTimeout(r)},error:t,copied:n}}var p=o(8728),u=(0,p.A)("outline","check","IconCheck",[["path",{d:"M5 12l5 5l10 -10",key:"svg-0"}]]),h=(0,p.A)("outline","copy","IconCopy",[["path",{d:"M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z",key:"svg-0"}],["path",{d:"M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1",key:"svg-1"}]]);function m(){const e="/images/resume.pdf",t=d();return i.createElement(n.M,null,i.createElement(a.m,{pt:80,size:"lg",mb:0,style:{paddingTop:"20px",paddingBottom:"0px"}}," ",i.createElement(r.o,null,i.createElement(l.m,{label:"Link copied!",offset:5,position:"bottom",radius:"xl",transitionProps:{duration:100,transition:"slide-down"},opened:t.copied},i.createElement(s.$,{variant:"light",rightSection:t.copied?i.createElement(u,{style:{width:(0,c.D)(20),height:(0,c.D)(20)},stroke:1.5}):i.createElement(h,{style:{width:(0,c.D)(20),height:(0,c.D)(20)},stroke:1.5}),radius:"xl",size:"sm",styles:{root:{paddingRight:(0,c.D)(14),height:(0,c.D)(48)},section:{marginLeft:(0,c.D)(22)}},onClick:()=>t.copy("https://www.adhamelarabawy.com/resume")},"Copy resume link to clipboard"))),i.createElement(r.o,{pt:20},i.createElement("iframe",{src:e,style:{width:"800px",height:"500px",border:"none"},allowFullScreen:!0},"This browser does not support PDFs. Please download the PDF to view it: ",i.createElement("a",{href:e},"Download PDF")))))}}}]);
//# sourceMappingURL=component---src-pages-resume-tsx-59c759e7e47330aeb5a7.js.map