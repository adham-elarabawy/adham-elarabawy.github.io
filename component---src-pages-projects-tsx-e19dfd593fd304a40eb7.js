"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[789],{6960:function(e,t,a){a.d(t,{U:function(){return U}});var s=a(6540),r=a(2659),n=a(1670),l=a(6324),o=a(9396),c=a(6100),d=a(9531),i=a(8639),m=a(9694),u={root:"m-1b7284a3"};const v={},p=(0,o.V)(((e,{radius:t,shadow:a})=>({root:{"--paper-radius":void 0===t?void 0:(0,l.nJ)(t),"--paper-shadow":(0,l.dh)(a)}}))),y=(0,i.v)(((e,t)=>{const a=(0,c.Y)("Paper",v,e),{classNames:r,className:n,style:l,styles:o,unstyled:i,withBorder:y,vars:g,radius:f,shadow:h,variant:E,mod:b,...N}=a,C=(0,d.I)({name:"Paper",props:a,classes:u,className:n,style:l,classNames:r,styles:o,unstyled:i,vars:g,varsResolver:p});return s.createElement(m.a,{ref:t,mod:[{"data-with-border":y},b],...C("root"),variant:E,...N})}));y.classes=u,y.displayName="@mantine/core/Paper";const[g,f]=function(e){const t=(0,s.createContext)(null);return[({children:e,value:a})=>s.createElement(t.Provider,{value:a},e),()=>{const a=(0,s.useContext)(t);if(null===a)throw new Error(e);return a}]}("Card component was not found in tree");var h={root:"m-e615b15f",section:"m-599a2148"};const E={},b=(0,i.v)(((e,t)=>{const a=(0,c.Y)("CardSection",E,e),{classNames:r,className:n,style:l,styles:o,vars:d,withBorder:i,inheritPadding:u,mod:v,...p}=a,y=f();return s.createElement(m.a,{ref:t,mod:[{"with-border":i,"inherit-padding":u},v],...y.getStyles("section",{className:n,style:l,styles:o,classNames:r}),...p})}));b.classes=h,b.displayName="@mantine/core/CardSection";const N={},C=(0,o.V)(((e,{padding:t})=>({root:{"--card-padding":(0,l.GY)(t)}}))),w=(0,i.v)(((e,t)=>{const a=(0,c.Y)("Card",N,e),{classNames:r,className:n,style:l,styles:o,unstyled:i,vars:m,children:u,padding:v,...p}=a,f=(0,d.I)({name:"Card",props:a,classes:h,className:n,style:l,classNames:r,styles:o,unstyled:i,vars:m,varsResolver:C}),E=s.Children.toArray(u),w=E.map(((e,t)=>"object"==typeof e&&e&&"type"in e&&e.type===b?(0,s.cloneElement)(e,{"data-first-section":0===t||void 0,"data-last-section":t===E.length-1||void 0}):e));return s.createElement(g,{value:{getStyles:f}},s.createElement(y,{ref:t,unstyled:i,...f("root"),...p},w))}));w.classes=h,w.displayName="@mantine/core/Card",w.Section=b;var x=a(4999),Y=a(7826),S=a(6344),j={root:"m-347db0ec","root--dot":"m-fbd81e3d",label:"m-5add502a",section:"m-91fdda9b"};const k={},P=(0,o.V)(((e,{radius:t,color:a,gradient:s,variant:r,size:n,autoContrast:o})=>{const c=e.variantColorResolver({color:a||e.primaryColor,theme:e,gradient:s,variant:r||"filled",autoContrast:o});return{root:{"--badge-height":(0,l.YC)(n,"badge-height"),"--badge-padding-x":(0,l.YC)(n,"badge-padding-x"),"--badge-fz":(0,l.YC)(n,"badge-fz"),"--badge-radius":void 0===t?void 0:(0,l.nJ)(t),"--badge-bg":a||r?c.background:void 0,"--badge-color":a||r?c.color:void 0,"--badge-bd":a||r?c.border:void 0,"--badge-dot-color":"dot"===r?(0,S.r)(a,e):void 0}}})),_=(0,i.v)(((e,t)=>{const a=(0,c.Y)("Badge",k,e),{classNames:r,className:n,style:l,styles:o,unstyled:i,vars:u,radius:v,color:p,gradient:y,leftSection:g,rightSection:f,children:h,variant:E,fullWidth:b,autoContrast:N,circle:C,mod:w,...x}=a,Y=(0,d.I)({name:"Badge",props:a,classes:j,className:n,style:l,classNames:r,styles:o,unstyled:i,vars:u,varsResolver:P});return s.createElement(m.a,{variant:E,mod:[{block:b,circle:C},w],...Y("root",{variant:E}),ref:t,...x},g&&s.createElement("span",{...Y("section"),"data-position":"left"},g),s.createElement("span",{...Y("label")},h),f&&s.createElement("span",{...Y("section"),"data-position":"right"},f))}));_.classes=j,_.displayName="@mantine/core/Badge";var z=a(5133),B=a(4194),I="ProjectCard-module--card--634a6",R="ProjectCard-module--section--871be";const V={width:"100%",height:"300px",overflow:"hidden",display:"flex",justifyContent:"center",alignItems:"center"},J={width:"100%"},M=e=>{let{src:t,alt:a}=e;return s.createElement("div",{style:V},s.createElement("img",{src:t,alt:a,style:J}))};function U(e){let{project:t}=e;return s.createElement(r.m,null,s.createElement(n.o,null,s.createElement(w,{withBorder:!0,radius:"md",p:"md",className:I},s.createElement(w.Section,null,s.createElement(M,{src:t.featured_image,alt:"Description"})),s.createElement(w.Section,{className:R,mt:"md"},s.createElement(x.Y,{justify:"apart"},s.createElement(Y.E,{fz:"lg",fw:500},t.title),s.createElement(_,{size:"sm",variant:"light"},t.date)),s.createElement(Y.E,{fz:"sm",mt:"xs"},t.description)),s.createElement(x.Y,{mt:"xs"},s.createElement(z.$,{radius:"md",style:{flex:1},component:B.Link,to:t.slug},"Open Project")))))}},2761:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var s=a(6540),r=a(1503),n=a(6960),l=a(1670);function o(e){let{data:t}=e;const a=t.allMdx.nodes.sort(((e,t)=>e.frontmatter.sort_id-t.frontmatter.sort_id));return s.createElement(r.M,null,s.createElement(l.o,{style:{marginTop:"100px"}},s.createElement("div",null,a.map((e=>s.createElement("div",{key:e.id},s.createElement(n.U,{project:e.frontmatter})))))))}},1670:function(e,t,a){a.d(t,{o:function(){return i}});var s=a(6540),r=a(6100),n=a(9531),l=a(9694),o=a(8639),c={root:"m-4451eb3a"};const d={},i=(0,o.v)(((e,t)=>{const a=(0,r.Y)("Center",d,e),{classNames:o,className:i,style:m,styles:u,unstyled:v,vars:p,inline:y,mod:g,...f}=a,h=(0,n.I)({name:"Center",props:a,classes:c,className:i,style:m,classNames:o,styles:u,unstyled:v,vars:p});return s.createElement(l.a,{ref:t,mod:[{inline:y},g],...h("root"),...f})}));i.classes=c,i.displayName="@mantine/core/Center"}}]);
//# sourceMappingURL=component---src-pages-projects-tsx-e19dfd593fd304a40eb7.js.map