"use strict";(self.webpackChunknuvirlab_dev=self.webpackChunknuvirlab_dev||[]).push([[116],{5046:(t,e,n)=>{n.d(e,{TV:()=>d,bM:()=>a,bn:()=>c});const o=new(n(4583).z);let i,r,s=null;function a(t){t.params.showTime&&(i=document.querySelector("#time")),null!==s&&cancelAnimationFrame(s),o.start(),l(t)}function c(t){t.stop(),o.stop(),null!==s&&cancelAnimationFrame(s)}function d(t){t.stop(),o.stop(),null!==s&&cancelAnimationFrame(s),t.reset(),t.update()}function l(t){s=requestAnimationFrame((()=>{l(t)})),r=o.getElapsedTime(),t.params.showTime&&(i.innerText="Time: "+r.toFixed(t.params.timeToFixed)+" s"),t.params.time&&r>t.params.time?c(t):t.start()}},6019:(t,e,n)=>{function o(t,e){const n=t.getObjectByName(e);if(n)return n;t.children.forEach((t=>{o(t,e)}))}n.d(e,{P:()=>o})},2264:(t,e,n)=>{n.d(e,{_:()=>i});var o=n(7924);function i(){return new o.cL}},1824:(t,e,n)=>{function o(t){let e=t.split(" ");return e.forEach((t=>{t.trim()})),e=e.filter((t=>""!==t)),e}n.d(e,{Y:()=>o})},194:(t,e,n)=>{n.d(e,{W:()=>i});var o=n(9437);function i(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:15;const i=new o.ubm(35,1,.1,100);i.position.set(t,e,n);let r=!0;return i.tick=t=>{i.position.z<0&&(r=!1),i.position.z>n&&(r=!0),r?i.position.z-=1*t:i.position.z+=1*t},i}},2195:(t,e,n)=>{function o(t,e,n){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const i=document.createElement(e);return i.textContent=n,o.type&&i.setAttribute("type",o.type),Object.keys(o).forEach((t=>{i.setAttribute(t,o[t])})),t.appendChild(i),i}n.d(e,{o:()=>o})},1116:(t,e,n)=>{n.d(e,{mD:()=>i});var o=n(9437);function i(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"white",s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:5;const a=new o.ZyN(r,s);a.position.set(e,n,i),t.add(a)}},7485:(t,e,n)=>{n.d(e,{B:()=>i});var o=n(9437);function i(){return new o.Z58}},2142:(t,e,n)=>{n.d(e,{J9:()=>s,Ih:()=>r});var o=n(1824);var i=n(6243);function r(t,e){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];const r=function(t){const e=(0,o.Y)(t),n=["x","y","z"];for(let t=0;t<e.length;t++)if("1"==e[t])return n[t]}(e.setRotationAxis);let s=function(t){const e=(0,o.Y)(t);return(0,i.C6)(e[0],"degree").to("radian")}(e.setRotationAngle);n&&(s=-s),t.rotation[r]=s}function s(t,e,n,o){let i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];i&&t.parent.localToWorld(t.position),t.position.sub(e),t.position.applyAxisAngle(n,o),t.position.add(e),i&&t.parent.worldToLocal(t.position),t.rotateOnAxis(n,o)}},4376:(t,e,n)=>{n.d(e,{F:()=>i});const o=new(n(9437).zD7);class i{constructor(t,e,n,o){this.camera=t,this.scene=e,this.renderer=n,this.labelRenderer=o,this.updatables=[]}start(){this.renderer.setAnimationLoop((()=>{this.tick(),this.renderer.render(this.scene,this.camera),this.labelRenderer.render(this.scene,this.camera)}))}stop(){this.renderer.setAnimationLoop(null)}tick(){const t=o.getDelta();for(const e of this.updatables)e.tick(t)}}},6266:(t,e,n)=>{n.d(e,{L:()=>i});const o=(t,e,n,o)=>{e.aspect=t.clientWidth/t.clientHeight,e.updateProjectionMatrix(),n.setSize(t.clientWidth,t.clientHeight),o.setSize(t.clientWidth,t.clientHeight),n.setPixelRatio(window.devicePixelRatio)};class i{constructor(t,e,n,i){o(t,e,n,i),window.addEventListener("resize",(()=>{o(t,e,n,i),this.onResize()}))}onResize(){}}},6297:(t,e,n)=>{n.d(e,{B:()=>i});var o=n(7024);function i(t,e){const n=new o.N(t,e);return n.enableDamping=!0,n.minDistance=.1,n.maxDistance=100,n.tick=()=>n.update(),n}},4393:(t,e,n)=>{n.d(e,{m:()=>i});var o=n(6074);function i(){const t=new o.B;return t.domElement.style.position="absolute",t.domElement.style.top="0px",t}},4049:(t,e,n)=>{n.d(e,{K:()=>i});var o=n(9437);function i(){const t=new o.JeP({antialias:!0});return t.physicallyCorrectLights=!0,t.shadowMap=!0,t}},8962:(t,e,n)=>{var o=n(194),i=n(1116),r=n(7485),s=n(9437),a=n(4264),c=n(4385),d=n(8857);function l(t){const e=new s.YJl,n=[16774595,4112315,16740960],o=[];let i=0;return["Nu","Vir","Lab"].forEach(((t,e)=>{const r=function(t,e){const n=[new s._4j({color:e,flatShading:!0}),new s._4j({color:e})];let o=(new a.J).parse(d);const i=new c._(t,{font:o,size:1,height:.2,curveSegments:12,bevelEnabled:!0,bevelThickness:.03,bevelSize:.05,bevelSegments:5});i.computeBoundingBox();const r=new s.eaF(i,n);return r.position.y=-.5,r.rotation.x=0,r.rotation.y=2*Math.PI,r}(t,n[e]);r.name=t,i+=r.geometry.boundingBox.max.x-r.geometry.boundingBox.min.x,o.push(r)})),o.forEach(((t,n)=>{t.position.x=.9*(t.geometry.boundingBox.max.x-t.geometry.boundingBox.min.x)*n-.5*i,e.add(t)})),{group:e}}var u=n(2195);function h(t,e){const n=document.querySelector(".control-container");(0,u.o)(n,"button",t,{class:"control-button",id:e})}var m=n(6019),p=n(5046);let g;function b(t){["Nu","Vir","Lab"].forEach((e=>{document.querySelector("#"+e).addEventListener("click",(e=>{!function(t,e){const n=t.target.id,o=(0,m.P)(e,n);e.pivotPoint.copy(o.position),e.pivotPoint.x+=.5*(o.geometry.boundingBox.max.x-o.geometry.boundingBox.min.x),g=document.querySelector("#pivot"),g.innerText=t.target.innerText}(e,t)}),!1)})),document.querySelector("#Start").addEventListener("click",(()=>{(0,p.bM)(t)}),!1),document.querySelector("#Pause").addEventListener("click",(()=>{(0,p.bn)(t)}),!1),document.querySelector("#Stop").addEventListener("click",(()=>{(0,p.TV)(t)}),!1)}var v=n(2142);const f={description:"NuVirLab orbit control training",infors:{macro:"",data:"",refs:{},authors:["Trang Hoang"],courses:{}},color:6316128,setGui:!1,showInfor:!1,animation:!0,showTime:!0,delta:1/60,cycleTime:10,timeToFixed:1,get time(){return 1*this.cycleTime},radsPerCycle:Math.PI,get angularVelocity(){return this.radsPerCycle/this.cycleTime},get tickTheta(){return this.delta*this.angularVelocity}};class y extends s.YJl{constructor(t,e,n){super(),this.params={...f,...n},this.size=t,this.gui=e,this.meshes=l(),this.add(this.meshes.group),function(){const t=document.querySelector(".note");(0,u.o)(t,"span","Orbit controls: "),(0,u.o)(t,"br"),(0,u.o)(t,"span","Use the left mouse button to rotate,"),(0,u.o)(t,"br"),(0,u.o)(t,"span","Hold the right button and drag the mouse to move,"),(0,u.o)(t,"br"),(0,u.o)(t,"span","Scroll the middle mouse button upward to zoom in, and"),(0,u.o)(t,"br"),(0,u.o)(t,"span","downward to zoom out.")}(),this.params.animation&&(this.pivotPoint=new s.Pq0(0,0,0),this.rotationAxis=new s.Pq0(0,1,0),function(){h("Rotate about Nu","Nu"),h("Rotate about Vir","Vir"),h("Rotate about Lab","Lab"),h("Start","Start"),h("Pause","Pause"),h("Stop","Stop");const t=document.querySelector(".note");(0,u.o)(t,"br"),(0,u.o)(t,"br"),(0,u.o)(t,"span","",{id:"pivot"}),(0,u.o)(t,"br"),(0,u.o)(t,"span","",{id:"time"})}(),b(this))}setBackgroundColor(){}update(){}zoom(t){}reset(){this.position.set(0,0,0),this.rotation.set(0,0,0)}start(){}stop(){}tick(t){(0,v.J9)(this,this.pivotPoint,this.rotationAxis,this.params.tickTheta,!1)}async init(){this.setBackgroundColor(this.params.color)}}n(2264);var w=n(6297),x=n(4049),S=n(4393),k=n(6266),L=n(4376);let T,z,E,P,B,A,q,C,R=15;class F{constructor(t){this.worldParams={setXLength:R,setYLength:R,setZLength:R},T=(0,o.W)(0,0,R),P=(0,r.B)(),z=(0,x.K)(),E=(0,S.m)(),B=new L.F(T,P,z,E),t.append(z.domElement,E.domElement),A=(0,w.B)(T,E.domElement),q=new y(R,undefined,this.worldParams),C=new s.fTw(R,R),C.position.y=-.6,(0,i.mD)(T,10,10,10,"white",3),B.updatables.push(A,q),P.add(T,q,C),q.setBackgroundColor=t=>{P.background=new s.Q1f(t),this.render()},q.zoom=t=>{T.position.z*=t,this.render()},q.update=()=>{this.render()},q.start=()=>{B.start()},q.stop=()=>{B.stop()};new k.L(t,T,z,E).onResize=()=>{this.render()},A.addEventListener("change",(()=>{this.render()}))}render(){z.render(P,T),E.render(P,T)}start(){B.start()}stop(){B.stop()}async init(){await q.init()}}n(8875),"loading"==document.readyState?document.addEventListener("DOMContentLoaded",ready):async function(){const t=document.querySelector("#scene-container");t.style.display="block";const e=new F(t);await e.init(),e.render()}().catch((t=>{console.log(t)}))},8875:(t,e,n)=>{n.r(e)}},t=>{t.O(0,[708,676],(()=>{return e=8962,t(t.s=e);var e}));t.O()}]);