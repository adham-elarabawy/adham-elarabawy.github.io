/*! For license information please see component---src-templates-project-page-tsx-content-file-path-src-projects-precision-drivetrain-mdx-4a7af7f4e19495f1b1c9.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[228],{4653:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var i=n(8453),a=n(6540);function r(e){const t=Object.assign({h4:"h4",p:"p",a:"a",em:"em",code:"code"},(0,i.R)(),e.components);return a.createElement(a.Fragment,null,a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},a.createElement("img",{src:"/images/drivetrain-demo.gif",alt:"Alt text",title:"Image Title",style:{width:"350px"}})),"\n",a.createElement(t.h4,null,"Introduction"),"\n",a.createElement(t.p,null,"After 3 years of high school robotics, working primarily on differential drives, I was slightly frustrated by the inaccuracies stemming primarily from elementary mechanical tolerances. Considering that I was about to graduate from this level of high school robotics into my undergraduate studies at Berkeley, I decided to undertake this project to formalize all that I learned into a 'from-scratch', 'start-to-finish' differential drive system where I had control over every single step along the design process."),"\n",a.createElement(t.h4,null,"Design Process"),"\n",a.createElement(t.p,null,"My first step was to decide on the motors I wanted to use. I had it narrowed down to two options. Firstly, I could go the brushed motor route (very similar to what I had done previously in FRC), characterize the motors and determine a voltage-velocity equation and solve for the arbitrary constants, then design and tune a velocity PID controller. Although familiar, I really wanted to take my precision and accuracy up a notch, so I decided to go the second route. The second option (that I picked) was to use stepper motors, which are inherently accurate and precise (assuming the load isn't too large), since I would just be able to tell the motors to go to a velocity and assume they reached it semi-instantaneously. An added benefit was not having to worry about encoders."),"\n",a.createElement(t.p,null,"This design choice came in the form of NEMA-17 motors and DRV-8825 stepper drivers. Electronics-wise, I decided on using an arduino nano for interfacing with the stepper drivers, and a raspberry pi for all the higher-level control and controller interface."),"\n",a.createElement(t.p,null,"I then designed and 3D-printed the precision platform, seen here:"),"\n",a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},a.createElement("img",{src:"/images/drivetrain_model.png",alt:"Alt text",title:"Image Title",style:{width:"350px"}})),"\n",a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},a.createElement("img",{src:"/images/final_drivetrain.JPG",alt:"Alt text",title:"Image Title",style:{width:"350px","-webkit-transform":"scaleX(-1)",transform:"scaleX(-1)"}})),"\n",a.createElement(t.p,null,"You can find the source code for base control (for both the arduino & RPi) ",a.createElement(t.a,{href:"https://github.com/adham-elarabawy/Precision-Drivetrain-Platform"},"on my github.")),"\n",a.createElement(t.p,null,"I also created a custom drive controller board that handled the interface between the arduino nano and the DRV stepper drivers:"),"\n",a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},a.createElement("img",{src:"/images/drivetrain_top_board.jpg",alt:"Alt text",title:"Image Title",style:{width:"200px"}})),"\n",a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},a.createElement("img",{src:"/images/drivetrain_bottom_board.jpg",alt:"Alt text",title:"Image Title",style:{width:"200px"}})),"\n",a.createElement(t.p,null,"By this point, I could drive the robot with an xbox controller by using some simple differential drive logic to map the joystick values to velocities for the left & right sides of the drivetrain."),"\n",a.createElement(t.h4,null,"Path Generation & Pursuit"),"\n",a.createElement(t.p,null,"Now that I had a working drivetrain that I could precisely control, I decided to implement a path generation and pursuit suite. The basic premise is as follows: I wanted to be able to select waypoints with a specified heading (global yaw), and the suite should find a continuous path of continuous curvature (since this is a differential drive after all) constrained by the selected waypoints. Then, I wanted the suite to create a time-parametrized trajectory from the aforementioned path using the velocity and acceleration constraints of the platform."),"\n",a.createElement(t.p,null,"This didn't turn out to be trivial. After doing some research, I decided that I wanted to use Quintic Hermite Spline interpolation to determine the path, since it is the only option that I could find that had C2 continuity (curvature continuity) & properly constrained the output path to the given waypoints and their specified tangents. The more popular options (i.e. Bezier Curves & Cubic Hermite Splines) either only had C1 continuity (which would result in jerky turning) or didn't actually ",a.createElement(t.em,null,"constrain")," the path to the points, rather merely getting the path somewhat close to the points. The below chart summarizes the clear disadvantage of cubic splines quite well, and ",a.createElement(t.a,{href:"http://www2.informatik.uni-freiburg.de/~lau/students/Sprunk2008.pdf"},"this paper")," outlined the choice for quintic hermite splines clearly."),"\n",a.createElement(t.p,null,a.createElement(t.em,null,'Note: If there is only one polynomial segment, the spline is often called a Bézier curve. If each segment is described by its ending positions and derivatives, it is said to be in "Hermite" form.')),"\n",a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},a.createElement("img",{src:"/images/drivetrain_chart.png",alt:"Alt text",title:"Image Title",style:{width:"300px"}})),"\n",a.createElement(t.p,null,"Then, it was just a matter of using a trapezoidal motion profile to find the corresponding velocity and acceleration for evenly spaced points to create a trajectory. But wait! Evenly spaced points? Well, it's quite hard to derive a fully continuous trajectory function, so what I did was determine the acceleration and velocity for a whole bunch of evenly spaced points on the path, then during runtime, I sample this model of the trajectory by passing in the elapsed time since the trajectory started, and I have a sample method that returns the estimated desired velocity by using simple linear interpolation. Since I have an excess of ~1000 control points on average, this is definitely more than accurate enough and it keeps this entire process fast enough to be sampled runtime."),"\n",a.createElement(t.p,null,"Just because I like matplotlib (who doesn't?), I decided to make a simple visualization tool so that one can preview the path & trajectory before actually deploying to the robot. ",a.createElement(t.em,null,"Note: Keep in mind that the trajectory animation isn't 100% accurate, since matplotlib sometimes takes more time to plot the animation than the desired timestep.")),"\n",a.createElement(t.p,null,"You can find the source code for the visualization tool ",a.createElement(t.a,{href:"https://github.com/adham-elarabawy/PyDataAnalysis/tree/master/src/common/interpolation"},"on my github."),"\n",a.createElement(t.em,null,"The file to run is ",a.createElement(t.code,null,"test_interface.py"))),"\n",a.createElement(t.p,null,"Here's a little demo:"),"\n",a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},a.createElement("iframe",{width:"560",height:"315",class:"centered",src:"https://www.youtube.com/embed/E_C7dhMRbvQ",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),"\n",a.createElement(t.h4,null,"Some fun!"),"\n",a.createElement(t.p,null,"I wanted to make a visualization tool for deriving quintic hermite splines, so while messing around with desmos, I decided to show all the control points, hermite basis functions, xy position/derivative/second derivative functions on the same plot. I found this to be quite aesthetically pleasing."),"\n",a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},a.createElement("img",{src:"/images/drivetrain_plot.png",alt:"Alt text",title:"Image Title",style:{width:"300px"}})))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,i.R)(),e.components);return t?a.createElement(t,e,a.createElement(r,e)):r(e)},l=n(4194),s=n(1503),c=n(2659),d=n(5133),m=n(103);const h={Link:l.Link};function u(e){let{data:t,children:n}=e;return a.createElement(s.M,null,a.createElement(c.m,{pt:100},a.createElement(d.$,{leftSection:a.createElement(m.A,{size:14}),onClick:()=>{(0,l.navigate)("/")}},"Back to Projects"),a.createElement("h1",null,t.mdx.frontmatter.title),a.createElement("p",null,t.mdx.frontmatter.description),a.createElement(i.x,{components:h},n)))}function p(e){return a.createElement(u,e,a.createElement(o,e))}},8453:function(e,t,n){n.d(t,{R:function(){return o},x:function(){return l}});var i=n(6540);const a={},r=i.createContext(a);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(r.Provider,{value:t},e.children)}},103:function(e,t,n){n.d(t,{A:function(){return i}});var i=(0,n(8728).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])}}]);
//# sourceMappingURL=component---src-templates-project-page-tsx-content-file-path-src-projects-precision-drivetrain-mdx-4a7af7f4e19495f1b1c9.js.map