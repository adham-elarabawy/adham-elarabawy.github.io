/*! For license information please see component---src-templates-project-page-tsx-content-file-path-src-projects-open-quadruped-mdx-cc5233106bd457264f44.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[709],{8654:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var o=n(8453),a=n(6540);function r(e){const t=Object.assign({h4:"h4",p:"p",a:"a",ul:"ul",li:"li"},(0,o.R)(),e.components);return a.createElement(a.Fragment,null,a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},a.createElement("img",{src:"/images/open_quadruped_demo.gif",alt:"Alt text",title:"Image Title",style:{width:"300px"}})),"\n",a.createElement(t.h4,null,"Presentation"),"\n",a.createElement(t.p,null,"I gave this R&D presentation about my OpenQuadruped project during my time working at Formlabs. If you'd rather a visual presentation as an overview of this project, you can find it below:"),"\n",a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/K3KR-O-sAyI",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),"\n",a.createElement(t.h4,null,"Controllability"),"\n",a.createElement(t.p,null,"My first milestone was deriving a full inverse kinematics model for a 3 DOF (degree of freedom) leg with various joint offsets that would allow me to simplify my design. In essence, an Inverse Kinematics (IK) model attempts to convert some intuitive domain, like xyz cartesian coordinate system, into directly useful values, like motor angles. To help you visualize, here’s a diagram from ",a.createElement(t.a,{href:"https://www.adhamelarabawy.com/images/IK_Model.pdf"},"the paper I wrote about the IK model I derived.")),"\n",a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},a.createElement("img",{src:"/images/ik_demo.png",alt:"Alt text",title:"Image Title",style:{width:"200px"}})),"\n",a.createElement(t.p,null,"I ended up writing a small paper on the full derivation for documentation and reference, and I also made a visualization tool to illustrate the IK model at work:"),"\n",a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/LBjqJVEXwhM",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),"\n",a.createElement(t.h4,null,"Mechanical Design"),"\n",a.createElement(t.p,null,"Then, I designed and 3D printed my first design what I now call MK1. This design was riddled with many problems. At heart, I’m much more of a computer science person than I am an electrical engineering one. And I’m both of those 10x more than I am a mechanical engineer. So, I had a lot to learn and tweak my design about 2 times before I realized that some of the design problems were too big to be ‘tweaked’, and I needed a design overhaul. I then spent about a month redesigning a lot of the major parts to address backlash and reduce moment forces on joints. Here’s the design I converged on:"),"\n",a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},a.createElement("img",{src:"/images/OQ_SideView.png",alt:"Alt text",title:"Image Title",style:{width:"400px"}})),"\n",a.createElement(t.h4,null,"Electronics"),"\n",a.createElement(t.p,null,"To handle all the power distribution & signal processing, I created a PCB that handled all of the low-level hardware control and interfaced with a Jetson Nano over serial."),"\n",a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},a.createElement("img",{src:"/images/OQ_Electronics.png",alt:"Alt text",title:"Image Title",style:{width:"300px"}})),"\n",a.createElement(t.p,null,"I also created a full wiring schematic to help other people create their own versions of my dog:"),"\n",a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},a.createElement("img",{src:"/images/OQ_wiring_diagram.png",alt:"Alt text",title:"Image Title",style:{width:"500px"}})),"\n",a.createElement(t.h4,null,"Software"),"\n",a.createElement(t.p,null,"Since there are multiple processors handling the low-level control and high-level path planning and gait generation, and since both processors need to interface with each other, I utilized the ROS infrastructure to handle all the interfacing between concurrent processes. This design decision resulted in a much simpler debugging process, and I wholely attribute it to Maurice Rahme's technical guidance (More on that in the Collaboration + Conclusion section in the end)."),"\n",a.createElement(t.p,null,"To visualize all the concurrent processes that run on this dog, I created the following diagram:"),"\n",a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},a.createElement("img",{src:"/images/OQ_node_infrastructure.png",alt:"Alt text",title:"Image Title",style:{width:"600px"}})),"\n",a.createElement(t.h4,null,"Technical Explanation"),"\n",a.createElement(t.p,null,"To clarify exactly what is happening on the Jetson Nano: currently there can only be 1 of two main control processes running at a time on the jetson, based on the desired robot output. The first control process is the body IK model, which takes in the desired static yaw/pitch/roll/xyz within the scope of the body, and returns the hip-to-leg vectors (aka the xyz coordinates of each leg relative to the hip location). This is for static manipulation of the body's pose (when it isn't walking). The second control process is the RL Agent (which takes in IMU values and passes them through a matrix to figure out control parameters for foot clearance, etc to increase robustness) which feeds into the foot path planner (a 12-point bezier curve), which is then passed into the gait planner which time-parameterizes the aforementioned foot path into a trajectory for each foot. Now, we have a trajectory for a foot to follow that we can sample with real-time. However, we don't want all the feet to move at the same exact time or even in the same direction. What I then do is apply the phase offsets for each leg (which define the gait), which simply offsets the sample time by a factor of the stride period. I also rotate each leg's trajectory about the z axis based on user input from the controller. Now that I have a trajectory, I simply sample it with ROS time and send the resulting xyz points for each respective leg to the LLC controller (teensy). The main point here is that no matter which control process is running, the output of the jetson nano to the teensy is a set of xyz points (or hip-to-foot vectors if you want to think about it that way) that need to be converted somehow into motor angles."),"\n",a.createElement(t.p,null,"Once the teensy receives this information from the jetson nano using the rosserial package, the teensy runs the hip-to-foot vectors through the leg IK model, which outputs a set of joint angles for each leg. Then, the newly computed desired joint angles are sent to the servo speed controller, which compares the relative distance that each servo needs to move and scales the corresponding joint speed in order to reduce unwanted body acceleration and to linearize motion. The servo speed controller is constantly running on the teensy LLC (low level controller), and the ROS topic simply updates the setpoints."),"\n",a.createElement(t.p,null,"Due to the way that rosserial works, all the code running on the teensy must be encapsulated within a single node, so I just treat the teensy as a single node altogether."),"\n",a.createElement(t.h4,null,"Collaboration + Conclusion"),"\n",a.createElement(t.p,null,"At this point, I had already learned and refined so many skills: I created a custom PCB, improved my CAD skills, formalized my documentation, collaborated with a masters student, and maintained an open-source project."),"\n",a.createElement(t.p,null,"One of the most rewarding things in this entire project was collaborating with Maurice Rahme, a new Boston Dynamics engineer! Check him out ",a.createElement(t.a,{href:"https://moribots.github.io/"},"here"),"."),"\n",a.createElement(t.h4,null,"More information:"),"\n",a.createElement(t.p,null,"You can find much more technical information about this project on ",a.createElement(t.a,{href:"https://github.com/adham-elarabawy/open-quadruped"},"my github repo"),". I also wrote ",a.createElement(t.a,{href:"/images/IK_Model.pdf"},"this whitepaper")," on my custom 12DOF Inverse Kinematic Model that accounts for the various joint offsets in my design."),"\n",a.createElement(t.p,null,"In the meantime, you can also take a look at some of the demo videos I've uploaded to youtube about my robot dog!"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://youtu.be/fMi5kvk-6Ek"},"Inverse Kinematics Demo 1")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://youtu.be/GEAmn419laA"},"Inverse Kinematics Demo 2")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://youtu.be/_3zA3F-i4RU"},"Rudimentary Trot Gait (pre-tuning) 1")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://youtu.be/O10b29GVjn4"},"Rudimentary Trot Gait (pre-tuning) 2")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://youtu.be/LBjqJVEXwhM"},"Custom Matplotlib 3D Visualization Tool")),"\n"))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,o.R)(),e.components);return t?a.createElement(t,e,a.createElement(r,e)):r(e)},l=n(4794),s=n(1503),c=n(2659),m=n(5133),d=n(103);const h={Link:l.Link};function u(e){let{data:t,children:n}=e;return a.createElement(s.M,null,a.createElement(c.m,{pt:100},a.createElement(m.$,{leftSection:a.createElement(d.A,{size:14}),onClick:()=>{(0,l.navigate)("/")}},"Back to Projects"),a.createElement("h1",null,t.mdx.frontmatter.title),a.createElement("p",null,t.mdx.frontmatter.description),a.createElement(o.x,{components:h},n)))}function p(e){return a.createElement(u,e,a.createElement(i,e))}},5133:function(e,t,n){n.d(t,{$:function(){return I}});var o=n(4848),a=n(8149),r=(n(6540),n(6324)),i=n(9396),l=n(6100),s=n(9205),c=n(134),m=n(8639),d=n(4952),h=n(9919),u=n(6076),p=n(2412),f={root:"m_77c9d27d",inner:"m_80f1301b",label:"m_811560b9",section:"m_a74036a",loader:"m_a25b86ee",group:"m_80d6d844"};const g={orientation:"horizontal"},y=(0,i.V)(((e,{borderWidth:t})=>({group:{"--button-border-width":(0,a.D)(t)}}))),w=(0,p.P)(((e,t)=>{const n=(0,l.Y)("ButtonGroup",g,e),{className:a,style:r,classNames:i,styles:m,unstyled:d,orientation:h,vars:u,borderWidth:p,variant:w,mod:b,...v}=(0,l.Y)("ButtonGroup",g,e),E=(0,s.I)({name:"ButtonGroup",props:n,classes:f,className:a,style:r,classNames:i,styles:m,unstyled:d,vars:u,varsResolver:y,rootSelector:"group"});return(0,o.jsx)(c.a,{...E("group"),ref:t,variant:w,mod:[{"data-orientation":h},b],role:"group",...v})}));w.classes=f,w.displayName="@mantine/core/ButtonGroup";const b={in:{opacity:1,transform:`translate(-50%, calc(-50% + ${(0,a.D)(1)}))`},out:{opacity:0,transform:"translate(-50%, -200%)"},common:{transformOrigin:"center"},transitionProperty:"transform, opacity"},v={},E=(0,i.V)(((e,{radius:t,color:n,gradient:o,variant:a,size:i,justify:l,autoContrast:s})=>{const c=e.variantColorResolver({color:n||e.primaryColor,theme:e,gradient:o,variant:a||"filled",autoContrast:s});return{root:{"--button-justify":l,"--button-height":(0,r.YC)(i,"button-height"),"--button-padding-x":(0,r.YC)(i,"button-padding-x"),"--button-fz":i?.includes("compact")?(0,r.ny)(i.replace("compact-","")):(0,r.ny)(i),"--button-radius":void 0===t?void 0:(0,r.nJ)(t),"--button-bg":n||a?c.background:void 0,"--button-hover":n||a?c.hover:void 0,"--button-color":c.color,"--button-bd":n||a?c.border:void 0,"--button-hover-color":n||a?c.hoverColor:void 0}}})),I=(0,m.v)(((e,t)=>{const n=(0,l.Y)("Button",v,e),{style:a,vars:r,className:i,color:m,disabled:p,children:g,leftSection:y,rightSection:w,fullWidth:I,variant:x,radius:j,loading:k,loaderProps:C,gradient:T,classNames:z,styles:_,unstyled:M,"data-disabled":A,autoContrast:O,mod:R,...N}=n,K=(0,s.I)({name:"Button",props:n,classes:f,className:i,style:a,classNames:z,styles:_,unstyled:M,vars:r,varsResolver:E}),B=!!y,D=!!w;return(0,o.jsxs)(u.N,{ref:t,...K("root",{active:!p&&!k&&!A}),unstyled:M,variant:x,disabled:p||k,mod:[{disabled:p||A,loading:k,block:I,"with-left-section":B,"with-right-section":D},R],...N,children:[(0,o.jsx)(h.e,{mounted:!!k,transition:b,duration:150,children:e=>(0,o.jsx)(c.a,{component:"span",...K("loader",{style:e}),"aria-hidden":!0,children:(0,o.jsx)(d.a,{color:"var(--button-color)",size:"calc(var(--button-height) / 1.8)",...C})})}),(0,o.jsxs)("span",{...K("inner"),children:[y&&(0,o.jsx)(c.a,{component:"span",...K("section"),mod:{position:"left"},children:y}),(0,o.jsx)(c.a,{component:"span",mod:{loading:k},...K("label"),children:g}),w&&(0,o.jsx)(c.a,{component:"span",...K("section"),mod:{position:"right"},children:w})]})]})}));I.classes=f,I.displayName="@mantine/core/Button",I.Group=w},8453:function(e,t,n){n.d(t,{R:function(){return i},x:function(){return l}});var o=n(6540);const a={},r=o.createContext(a);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(r.Provider,{value:t},e.children)}},103:function(e,t,n){n.d(t,{A:function(){return o}});var o=(0,n(8728).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])}}]);
//# sourceMappingURL=component---src-templates-project-page-tsx-content-file-path-src-projects-open-quadruped-mdx-cc5233106bd457264f44.js.map