"use strict";(self.webpackChunknuvirlab_dev=self.webpackChunknuvirlab_dev||[]).push([[441],{7986:(e,t,n)=>{n.d(t,{$:()=>L});const o="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='800px' height='800px' viewBox='0 0 1024 1024' class='icon' version='1.1' transform='matrix(1%2c 0%2c 0%2c 1%2c 0%2c 0)'%3e%3cpath d='M117 608.4v178.5c1.5 93.7 155.7 169.5 395 169.5s393.4-75.8 395-169.5V608.4H117z' fill='%230c2269'/%3e%3cpath d='M907 607.7c0 99.4-154.8 180-395 180s-395-80.6-395-180 154.8-180 395-180 395 80.5 395 180z' fill='white'/%3e%3cpath d='M117 428.4v158.5c1.5 93.7 155.7 179.5 395 179.5s393.4-85.8 395-179.5V428.4H117z' fill='%230c2269'/%3e%3cpath d='M907 427.7c0 99.4-154.8 180-395 180s-395-80.6-395-180 154.8-180 395-180 395 80.5 395 180z' fill='white'/%3e%3cpath d='M117 248.4v158.5c1.5 93.7 155.7 179.5 395 179.5s393.4-85.8 395-179.5V248.4H117z' fill='%230c2269'/%3e%3cpath d='M907 247.7c0 99.4-154.8 180-395 180s-395-80.6-395-180 154.8-180 395-180 395 80.5 395 180z' fill='%233e6aff'/%3e%3c/svg%3e";var a=n(137);let i,r,s;const l={};function c(e){i=0,r=0,s=-1,l.tracks=[],l.runs=[],l.volumes=[];return function(e,t){i=1;let n=[];e.forEach((e=>{let o=e.toString("ascii"),a=function(e,t){let n={};t.includes(e)&&(!function(e,t){t.trackNumber=r;const n=e.split(":")[1].split(",");n.forEach((e=>{let n=e.split("=")[0].trim(),o=e.split("=")[1].trim();t[n]=o})),t.steps=[],t["2ndaries"]=[]}(t,n),r++);return n}("* G4Track Information:",o);var l;(l=a)&&0===Object.keys(l).length&&l.constructor===Object||t.tracks.push(a),-1==s?n=function(e,t,n){let o=[];if(t.includes(e)){s=0,n.steps=[];t.split(" ").forEach((e=>{""!==e.trim()&&o.push(e.trim())}))}return o}("Step#",o,t.tracks[r-1]):function(e,t,n){let o=/(\d|:)/,a=/[a-z]/,i=/[A-Z]/,r=e.substring(0,5);if(o.test(r)&&!a.test(r)&&!i.test(r)){let o={};/(\d)/.test(r)&&h(e,t,n,o),!/(:)/.test(r)||e.includes("List of 2ndaries")||e.includes("EndOf2ndaries")||function(e,t){let n=e.split(" ");n.forEach((e=>{e.trim()})),n=n.filter((e=>""!==e&&":"!==e));const o={};o["X(mm)"]=parseFloat(n[0]),o["Y(mm)"]=parseFloat(n[1]),o["Z(mm)"]=parseFloat(n[2]),o["KinE(MeV)"]=parseFloat(n[3]),o.Particle=n[4],t.push(o)}(e,t["2ndaries"])}}(o,t.tracks[r-1],n),i++}))}(e.split(/\r?\n/),l),l.tracks.forEach((e=>{e["Track ID"]=parseInt(e["Track ID"]),e["Parent ID"]=parseInt(e["Parent ID"]),e.steps.forEach((e=>{e["Step#"]=parseInt(e["Step#"]),e["X(mm)"]=parseFloat(e["X(mm)"]),e["Y(mm)"]=parseFloat(e["Y(mm)"]),e["Z(mm)"]=parseFloat(e["Z(mm)"]),e["KinE(MeV)"]=parseFloat(e["KinE(MeV)"]),e["dE(MeV)"]=parseFloat(e["dE(MeV)"]),e.StepLeng=parseFloat(e.StepLeng),e.TrackLeng=parseFloat(e.TrackLeng)}))})),function(e){const t=e.tracks.filter((e=>0==e["Parent ID"])),n=e.tracks.filter((e=>0!==e["Parent ID"]));for(let o=0;o<t.length;o++){const a=[];d(t[o],n,a),e.runs.push(a)}}(l),l}function d(e,t,n){n.includes(e.trackNumber)||n.push(e.trackNumber),e["2ndaries"].forEach((e=>{t.filter((t=>t.steps[0]["X(mm)"]==e["X(mm)"]&&t.steps[0]["Y(mm)"]==e["Y(mm)"]&&t.steps[0]["Z(mm)"]==e["Z(mm)"]&&t.steps[0]["KinE(MeV)"]==e["KinE(MeV)"]&&t.Particle==e.Particle)).forEach((e=>{d(e,t,n)}))}))}function h(e,t,n,o){const a=e.split(" "),i=[];if(a.forEach((e=>{""!==e.trim()&&i.push(e)})),n.length<=i.length){for(let e=0;e<n.length;e++)if(o[n[e]]=i[e],8==e&&i[e].includes("_phys")){let t=i[e].split("_")[0];l.volumes.includes(t)||l.volumes.push(t)}}else console.log("ERROR: keys.length ",n.length,", values.length ",i.length);t.steps.push(o),s++}var p=n(9437);function m(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3800852;const n=(new p.LoY).setFromPoints(e),o=new p.mrM({color:t});return new p.N1A(n,o)}var u=n(6243);function g(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],{__:o,value:a}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const t=Math.floor(Math.random()*e.length);return{index:t,value:e[t]}}(t);n.includes(a)||n.push(a),n.length!=e&&n.length!=t.length&&g(e,t,n)}let f,y;function b(e,t,n){n.random?g(n.end-n.start+1,t.runs,e.runs):e.runs=t.runs.slice(n.start-1,n.end);v(e,t.tracks,n)}function v(e,t,n){const o=e.meshes.beam;o.clear();let a=0,i=0,r=[];for(let s=0;s<e.runs.length;s++){let l=e.runs[s],c=[];f=!1;for(let e=0;e<l.length;e++){let o=w(l[e],t),a=x(o,n);c.push([o.Particle,a])}f&&(c.forEach((e=>{r.includes(e[0])||r.push(e[0]),y=n.color[e[0]]?m(e[1],n.color[e[0]]):m(e[1],n.color.Others),o.add(y),a++})),i++)}document.getElementById("data-stat").innerText=`${i} runs, ${a} tracks\n    Particles: ${r}`}function w(e,t){return t.find((t=>t.trackNumber==e))}function x(e,t){const n=[],o=e.steps;for(let e=0;e<o.length;e++){(f||o[e].NextVolume.includes(t.volume)||"all"==t.volume)&&(f=!0);let a=parseFloat(o[e]["X"+t.posUnit]),i=parseFloat(o[e]["Y"+t.posUnit]),r=parseFloat(o[e]["Z"+t.posUnit]),s=t.posUnit.substring(t.posUnit.indexOf("(")+1,t.posUnit.lastIndexOf(")"));a=(0,u.C6)(a,s).to("m"),i=(0,u.C6)(i,s).to("m"),r=(0,u.C6)(r,s).to("m"),n.push(new p.Pq0(a,i,r))}return n}var k=n(9774),C=n(7187);function z(e,t,n,o){t.__folders[o.name]&&t.removeFolder(t.__folders[o.name]);const a=t.addFolder(o.name);a.open();const i=e.meshes.beam,r=structuredClone(o),s=n.runs,l=[...new Set(n.tracks.map((e=>e.Particle)))];if((0,k.h)(e,a,i,o),o.startname&&a.add(o,"start",1,s.length,1).name(o.startname).onFinishChange((()=>{o.endname&&o.start>o.end&&(0,C.jC)(a,"end",o.start),b(e,n,o),e.update()})),o.endname&&a.add(o,"end",1,s.length,1).name(o.endname).onFinishChange((()=>{o.startname&&o.end<o.start&&(0,C.jC)(a,"start",o.end),b(e,n,o),e.update()})),o.color&&l.forEach((t=>{o.color[t]?a.addColor(o.color,t).name(t).onChange((()=>{v(e,n.tracks,o),e.update()})):a.addColor(o.color,"others").name("Others").onChange((()=>{v(e,n.tracks,o),e.update()}))})),o.volumename){const t={};n.volumes.forEach((e=>{t[e]=e})),a.add(o,"volume",t).name(o.volumename).onFinishChange((function(){v(e,n.tracks,o),e.update()}))}o.resetname&&(o.reset=()=>{},a.add(o,"reset").name(o.resetname).onChange((()=>{!function(e,t,n,o){const a=e.__controllers;(0,k.v)(t,a,n),n.startname&&(0,C.ng)(a,"start");n.endname&&(0,C.ng)(a,"end");n.color&&o.forEach((e=>{n.color[e]?(0,C.ng)(a,e):(0,C.ng)(a,"others")}));n.volumename&&(0,C.ng)(a,"volume")}(a,i,r,l),e.update()})))}var E=n(6019),P=n(2195);async function L(e){!function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"icon-data",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Open data",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"left-pannel";(0,a.w)(o,"Load data",e,t,n,"wrap-data-icon","data-icon-description","data-file")}("icon-data","Open data","left-pannel");const t=document.querySelector("#scene-container");(0,P.o)(t,"div","",{id:"data-name"}),(0,P.o)(t,"div","",{id:"data-stat"}),e.params.showInfor&&document.getElementById("wrap-data-icon").classList.add("hidden"),document.getElementById("data-file").addEventListener("change",(async function(){const t=document.getElementById("data-name"),n=this.files[0];t.textContent="Open file: "+n.name;const o=c(await function(e){return new Promise(((t,n)=>{const o=new FileReader;o.onloadend=()=>t(o.result),o.readAsText(e)}))}(n)),a={name:"Beam",visible:!0,visiblename:"Visible",start:1,startname:"From run",end:50,endname:"To run",random:!1,posUnit:"(mm)",EUnit:"(MeV)",volume:"all",volumename:"Volume",particles:"",color:{gamma:786176,"e-":16711680,"e+":16776960,alpha:63231,proton:16711935,neutron:16755712,others:16777215},resetname:"Reset Beam"};b(e,o,a),z(e,e.gui,o,a);const i=(0,E.P)(e,"SpotLightHelper");i&&(i.visible=!1);e.update()}),!1)}},137:(e,t,n)=>{n.d(t,{w:()=>a});var o=n(2195);function a(e,t,n,a,i,r,s){let l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"";const c=document.getElementById(i),d=(0,o.o)(c,"div","",{id:r,class:"img__wrap"});(0,o.o)(d,"img","text",{src:e,alt:t,id:n,class:"left-pannel-icon"}),(0,o.o)(d,"div",a,{class:"img__description",id:s}),""!==l&&function(e,t,n,a){const i=(0,o.o)(e,"input","input",{type:"file",id:a,multiple:!1,class:"fileInput",accept:".txt,.db,.mac"});(0,o.o)(e,"button",t,{id:a,class:n}).addEventListener("click",(e=>{i&&i.click()}),!1)}(d,"","button dataBtn",l)}},6019:(e,t,n)=>{function o(e,t){const n=e.getObjectByName(t);if(n)return n;e.children.forEach((e=>{o(e,t)}))}n.d(t,{P:()=>o})},7399:(e,t,n)=>{n.d(t,{m:()=>a});var o=n(9774);function a(e,t,n,a){const i=t.addFolder(a.name);(0,o.h)(e,i,n,a),i.close()}},8523:(e,t,n)=>{n.d(t,{S:()=>c});var o=n(4001),a=n(8458),i=n(3963),r=n(9774),s=n(8186),l=n(7187);function c(e,t,n,c){const d=t.addFolder(c.name);d.close();const h=structuredClone(c);(0,r.h)(e,d,n,c),c.sizeXname&&d.add(c,"sizeX",0,e.size).name(c.sizeXname).listen().onChange((t=>{n.scale.x=t/n.geometry.parameters.width,e.update()})),c.sizeYname&&d.add(c,"sizeY",0,e.size).name(c.sizeYname).onChange((t=>{n.scale.y=t/n.geometry.parameters.height,e.update()})),c.sizeZname&&d.add(c,"sizeZ",0,e.size).name(c.sizeZname).onChange((t=>{n.scale.z=t/n.geometry.parameters.depth,e.update()})),(0,o.U)(e,d,n,c),(0,a.r)(e,d,n,c),(0,i.N)(e,d,n,c),c.bgColorname&&d.addColor(c,"bgColor").name(c.bgColorname).onChange((t=>{e.setBackgroundColor(t)})),(0,s.R)(d,n,c),c.resetname&&(c.reset=()=>{},d.add(c,"reset").name(c.resetname).onChange((()=>{!function(e,t,n,c){const d=t.__controllers;c.sizeXname&&((0,l.ng)(d,"sizeX"),n.scale.x=c.sizeX/n.geometry.parameters.width);c.sizeYname&&((0,l.ng)(d,"sizeY"),n.scale.y=c.sizeY/n.geometry.parameters.height);c.sizeZname&&((0,l.ng)(d,"sizeZ"),n.scale.z=c.sizeZ/n.geometry.parameters.depth);(0,o.A)(n,d,c),(0,a.f)(n,d,c),(0,i.e)(n,d,c),(0,r.v)(n,d,c),(0,s.P)(n,d,c),c.bgColorname&&((0,l.ng)(d,"bgColor"),e.setBackgroundColor(c.bgColor))}(e,d,n,h),e.update()})))}},2328:(e,t,n)=>{n.d(t,{C:()=>f});var o=n(4001),a=n(8458),i=n(7187);function r(e,t){e.children.forEach((e=>{r(e,t)})),e.material&&e.material.color.set(t)}function s(e,t){e.children.forEach((e=>{s(e,t)})),e.material&&(e.material.opacity=t)}function l(e,t){e.children.forEach((e=>{l(e,t)})),e.material&&(e.material.wireframe=t)}var c=n(9774),d=n(3724),h=n(6019),p=n(9437);function m(e){let t=new p.Q1f;return t.setHex(e),`rgb(${255*t.r},${255*t.g},${255*t.b})`}function u(e,t,n,o){o.labelname&&t.add(o,"label").name(o.labelname).onFinishChange((e=>{n.getObjectByName("label"+n.name,!0).element.innerText=e})),o.labelColorname&&t.addColor(o,"labelColor").name(o.labelColorname).onChange((t=>{!function(e,t,n,o){n.forEach((n=>{(0,h.P)(t,n).element.style.color=m(o),e.update()}))}(e,n,n.labels,t)})),o.labelVisiblename&&n.labels.length>0&&t.add(o,"labelVisible").name(o.labelVisiblename).onChange((t=>{(0,d.W)(e,n,n.labels,t)}))}function g(e,t,n){var o,a,r;n.labelname&&((0,i.ng)(t,"label"),e.getObjectByName("label"+e.name,!0).element.innerText=n.label),n.labelColorname&&((0,i.ng)(t,"labelColor"),o=e,a=e.labels,r=n.labelColor,a.forEach((e=>{(0,h.P)(o,e).element.style.color=m(r)}))),n.labelVisiblename&&e.labels.length>0&&((0,i.ng)(t,"labelVisible"),(0,d.Z)(e,e.labels,n.labelVisible))}function f(e,t,n,i){const d=t.addFolder(i.name);d.close();const h=structuredClone(i);(0,c.h)(e,d,n,i),(0,o.U)(e,d,n,i),(0,a.r)(e,d,n,i),function(e,t,n,o){o.colorname&&t.addColor(o,"color").name(o.colorname).onChange((t=>{r(n,t),e.update()})),o.opacityname&&t.add(o,"opacity",0,1).name(o.opacityname).onChange((t=>{s(n,t),e.update()})),o.wireframename&&t.add(o,"wireframe").name(o.wireframename).onChange((t=>{l(n,t),e.update()}))}(e,d,n,i),i.bgColorname&&d.addColor(i,"bgColor").name(i.bgColorname).onChange((t=>{e.setBackgroundColor(t)})),u(e,d,n,i),i.resetname&&(i.reset=()=>{},d.add(i,"reset").name(i.resetname).onChange((()=>{y(d,n,h),e.update()})))}function y(e,t,n){const d=e.__controllers;(0,o.A)(t,d,n),(0,a.f)(t,d,n),function(e,t,n){n.colorname&&((0,i.ng)(t,"color"),r(e,n.color)),n.opacityname&&((0,i.ng)(t,"opacity"),s(e,n.opacity)),n.wireframename&&((0,i.ng)(t,"wireframe"),l(e,n.wireframe))}(t,d,n),(0,c.v)(t,d,n),g(t,d,n),n.bgColorname&&((0,i.ng)(d,"bgColor"),world.setBackgroundColor(n.bgColor))}},3724:(e,t,n)=>{n.d(t,{W:()=>a,Z:()=>i});var o=n(6019);function a(e,t,n,a){n.forEach((n=>{(0,o.P)(t,n).visible=a,e.update()}))}function i(e,t,n){t.forEach((t=>{(0,o.P)(e,t).visible=n}))}},9092:(e,t,n)=>{function o(e,t){e.children.forEach((e=>{o(e,t)})),e.visible=t}n.d(t,{k:()=>o})},2264:(e,t,n)=>{n.d(t,{_:()=>a});var o=n(7924);function a(){return new o.cL}},8186:(e,t,n)=>{n.d(t,{P:()=>s,R:()=>r});var o=n(7187),a=n(9437),i=n(3724);function r(e,t,n){n.labelname&&e.add(n,"label").name(n.labelname).onFinishChange((e=>{t.getObjectByName("label"+t.name,!0).element.innerText=e})),n.labelColorname&&e.addColor(n,"labelColor").name(n.labelColorname).onChange((e=>{t.getObjectByName("label"+t.name,!0).element.style.color=l(e)})),n.labelVisiblename&&t.labels.length>0&&e.add(n,"labelVisible").name(n.labelVisiblename).onChange((e=>{(0,i.W)(t,t.labels,e)}))}function s(e,t,n){n.labelname&&((0,o.ng)(t,"label"),e.getObjectByName("label"+e.name,!0).element.innerText=n.label),n.labelColorname&&((0,o.ng)(t,"labelColor"),e.getObjectByName("label"+e.name,!0).element.style.color=l(n.labelColor))}function l(e){let t=new a.Q1f;return t.setHex(e),`rgb(${255*t.r},${255*t.g},${255*t.b})`}},3963:(e,t,n)=>{n.d(t,{N:()=>a,e:()=>i});var o=n(7187);function a(e,t,n,o){o.colorname&&t.addColor(o,"color").name(o.colorname).onChange((t=>{n.material.color.set(t),e.update()})),o.opacityname&&t.add(o,"opacity",0,1).name(o.opacityname).onChange((t=>{n.material.opacity=t,e.update()})),o.wireframename&&t.add(o,"wireframe").name(o.wireframename).onChange((t=>{n.material.wireframe=t,e.update()}))}function i(e,t,n){n.colorname&&((0,o.ng)(t,"color"),e.material.color.set(n.color)),n.opacityname&&((0,o.ng)(t,"opacity"),e.material.opacity=n.opacity),n.wireframename&&((0,o.ng)(t,"wireframe"),e.material.wireframe=n.wireframe)}},8458:(e,t,n)=>{n.d(t,{f:()=>r,r:()=>i});var o=n(9437),a=n(7187);function i(e,t,n,a){a.rotXname&&t.add(a,"rotX",0,360).name(a.rotXname).onChange((t=>{n.rotation.x=o.cj9.degToRad(t),e.update()})),a.rotYname&&t.add(a,"rotY",0,360).name(a.rotYname).onChange((t=>{n.rotation.y=o.cj9.degToRad(t),e.update()})),a.rotZname&&t.add(a,"rotZ",0,360).name(a.rotZname).onChange((t=>{n.rotation.z=o.cj9.degToRad(t),e.update()}))}function r(e,t,n){n.rotXname&&((0,a.ng)(t,"rotX"),e.rotation.x=o.cj9.degToRad(n.rotX)),n.rotYname&&((0,a.ng)(t,"rotY"),e.rotation.y=o.cj9.degToRad(n.rotY)),n.rotZname&&((0,a.ng)(t,"rotZ"),e.rotation.z=o.cj9.degToRad(n.rotZ))}},7187:(e,t,n)=>{function o(e,t){return e.__controllers.filter((e=>e.property==t))[0]}function a(e,t,n){o(e,t).setValue(n)}function i(e,t){const n=e.filter((e=>e.property==t))[0];n.setValue(n.initialValue)}n.d(t,{jC:()=>a,ng:()=>i})},4001:(e,t,n)=>{n.d(t,{A:()=>i,U:()=>a});var o=n(7187);function a(e,t,n,o){o.posXname&&t.add(o,"posX",-e.size/2,e.size/2).name(o.posXname).onChange((t=>{n.position.x=t,e.update()})),o.posYname&&t.add(o,"posY",-e.size/2,e.size/2).name(o.posYname).onChange((t=>{n.position.y=t,e.update()})),o.posZname&&t.add(o,"posZ",-e.size/2,e.size/2).name(o.posZname).onChange((t=>{n.position.z=t,e.update()}))}function i(e,t,n){n.posXname&&((0,o.ng)(t,"posX"),e.position.x=n.posX),n.posYname&&((0,o.ng)(t,"posY"),e.position.y=n.posY),n.posZname&&((0,o.ng)(t,"posZ"),e.position.z=n.posZ)}},9774:(e,t,n)=>{n.d(t,{h:()=>i,v:()=>r});var o=n(9092),a=n(7187);function i(e,t,n,a){a.visiblename&&t.add(a,"visible").name(a.visiblename).onChange((t=>{(0,o.k)(n,t),e.update()}))}function r(e,t,n){n.visiblename&&((0,a.ng)(t,"visible"),(0,o.k)(e,!0))}},6584:(e,t,n)=>{n.d(t,{s:()=>m});const o="data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8' standalone='no'%3f%3e %3c!-- Created with Inkscape (http://www.inkscape.org/) --%3e %3csvg xmlns:svg='http://www.w3.org/2000/svg' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.0' width='225' height='225' id='svg2'%3e %3cdefs id='defs4'%3e %3clinearGradient id='linearGradient5113'%3e %3cstop style='stop-color:white%3bstop-opacity:1' offset='0' id='stop5115' /%3e %3cstop style='stop-color:%23898989%3bstop-opacity:1' offset='0.78688526' id='stop6208' /%3e %3cstop style='stop-color:black%3bstop-opacity:0' offset='1' id='stop5117' /%3e %3c/linearGradient%3e %3clinearGradient id='linearGradient4129'%3e %3cstop style='stop-color:%233b3bde%3bstop-opacity:1' offset='0' id='stop4131' /%3e %3cstop style='stop-color:%233c59de%3bstop-opacity:1' offset='0.75409836' id='stop4137' /%3e %3cstop style='stop-color:%231d6fff%3bstop-opacity:0' offset='1' id='stop4135' /%3e %3c/linearGradient%3e %3clinearGradient id='linearGradient4121'%3e %3cstop style='stop-color:%234f4f4f%3bstop-opacity:1' offset='0' id='stop4123' /%3e %3cstop style='stop-color:%23444444%3bstop-opacity:1' offset='0.86885244' id='stop4125' /%3e %3cstop style='stop-color:%23e5e5e5%3bstop-opacity:0' offset='1' id='stop4127' /%3e %3c/linearGradient%3e %3clinearGradient id='linearGradient3136'%3e %3cstop style='stop-color:%23000079%3bstop-opacity:1' offset='0' id='stop3138' /%3e %3cstop style='stop-color:%23787fc3%3bstop-opacity:1' offset='0.6885246' id='stop3144' /%3e %3cstop style='stop-color:%23d0e1ff%3bstop-opacity:1' offset='1' id='stop3140' /%3e %3c/linearGradient%3e %3clinearGradient x1='1.9054642' y1='112.87307' x2='223.35857' y2='112.87307' id='linearGradient3142' xlink:href='%23linearGradient3136' gradientUnits='userSpaceOnUse' /%3e %3cradialGradient cx='112.63201' cy='112.87307' r='110.72655' fx='112.63201' fy='112.87307' id='radialGradient4119' xlink:href='%23linearGradient4129' gradientUnits='userSpaceOnUse' /%3e %3cradialGradient cx='112.63201' cy='112.87307' r='110.72655' fx='112.63201' fy='112.87307' id='radialGradient5237' xlink:href='%23linearGradient4121' gradientUnits='userSpaceOnUse' /%3e %3c/defs%3e %3cg id='layer1'%3e %3cpath d='M 222.23356 112.87307 A 109.60155 109.60155 0 1 1 3.0304642%2c112.87307 A 109.60155 109.60155 0 1 1 222.23356 112.87307 z' transform='matrix(-0.6760498%2c-0.7368559%2c0.7368559%2c-0.6760498%2c113.47367%2c279.80138)' style='opacity:1%3bfill:url(%23radialGradient5237)%3bfill-opacity:1%3bstroke:none%3bstroke-width:2.25%3bstroke-linecap:round%3bstroke-linejoin:round%3bstroke-miterlimit:4%3bstroke-dasharray:none%3bstroke-opacity:1' id='path5235' /%3e %3cpath d='M 222.23356 112.87307 A 109.60155 109.60155 0 1 1 3.0304642%2c112.87307 A 109.60155 109.60155 0 1 1 222.23356 112.87307 z' transform='matrix(-0.6760498%2c-0.7368559%2c0.7368559%2c-0.6760498%2c105.47367%2c271.80138)' style='opacity:1%3bfill:url(%23linearGradient3142)%3bfill-opacity:1%3bstroke:black%3bstroke-width:2.25%3bstroke-linecap:round%3bstroke-linejoin:round%3bstroke-miterlimit:4%3bstroke-dasharray:none%3bstroke-opacity:1' id='path2164' /%3e %3cpath d='M 222.23356 112.87307 A 109.60155 109.60155 0 1 1 3.0304642%2c112.87307 A 109.60155 109.60155 0 1 1 222.23356 112.87307 z' transform='matrix(-0.6760498%2c-0.7368559%2c0.7368559%2c-0.6760498%2c105.47367%2c271.80138)' style='opacity:1%3bfill:url(%23radialGradient4119)%3bfill-opacity:1%3bstroke:none%3bstroke-width:2.25%3bstroke-linecap:round%3bstroke-linejoin:round%3bstroke-miterlimit:4%3bstroke-dasharray:none%3bstroke-opacity:1' id='path3148' /%3e %3cpath d='M 128.11002%2c31.275734 C 132.86399%2c31.275894 136.86433%2c32.899218 140.11104%2c36.145712 C 143.35762%2c39.392515 144.98095%2c43.39285 144.98102%2c48.146728 C 144.98095%2c52.842916 143.34313%2c56.828756 140.06756%2c60.104262 C 136.79186%2c63.380029 132.80601%2c65.017847 128.11002%2c65.017722 C 123.4719%2c65.017847 119.51505%2c63.380029 116.23945%2c60.104262 C 112.96378%2c56.828756 111.32596%2c52.842916 111.32599%2c48.146728 C 111.32596%2c43.450825 112.94928%2c39.464985 116.19597%2c36.189194 C 119.44258%2c32.913712 123.41392%2c31.275894 128.11002%2c31.275734 L 128.11002%2c31.275734 z M 135.24106%2c84.062812 L 111.67385%2c165.7219 C 110.39834%2c170.24404 109.76061%2c173.28778 109.76064%2c174.85311 C 109.76061%2c177.17216 110.83316%2c178.33168 112.97831%2c178.33166 C 114.19576%2c178.33168 115.50022%2c177.75192 116.89168%2c176.59239 C 120.42817%2c173.63563 124.54445%2c168.50477 129.24055%2c161.19978 L 133.15393%2c163.5478 C 121.61667%2c183.66545 109.35478%2c193.72427 96.368205%2c193.72427 C 85.468721%2c193.72427 80.01899%2c188.79632 80.018994%2c178.94041 C 80.01899%2c176.21556 80.685712%2c172.62105 82.019164%2c168.15689 L 97.933555%2c113.28268 C 99.440905%2c108.00695 100.19459%2c104.00662 100.19462%2c101.28166 C 100.19459%2c96.991537 97.498713%2c94.84643 92.106974%2c94.846334 C 90.94744%2c94.84643 89.55602%2c94.904406 87.932708%2c95.020262 L 89.411094%2c90.411176 L 128.37091%2c84.062812 L 135.24106%2c84.062812 z ' style='font-size:356.20407104px%3bfont-style:italic%3bfont-variant:normal%3bfont-weight:bold%3bfont-stretch:normal%3btext-align:start%3bline-height:125%25%3bwriting-mode:lr-tb%3btext-anchor:start%3bfill:white%3bfill-opacity:1%3bstroke:none%3bstroke-width:1px%3bstroke-linecap:butt%3bstroke-linejoin:miter%3bstroke-opacity:1%3bfont-family:AngsanaUPC' id='text4139' /%3e %3c/g%3e %3c/svg%3e";var a=n(9092);function i(e,t){document.addEventListener("DOMContentLoaded",(function(n){const o=document.getElementsByClassName(e);for(let e=0;e<o.length;e++)o[e].classList.toggle(t)}))}var r=n(137);function s(e,t){(0,r.w)(o,"Information","icon-infor","Information","left-pannel","wrap-infor-icon"),t&&(document.getElementById("inforBox").classList.toggle("hidden"),(0,a.k)(e,!1),e.update(),document.getElementById("wrap-infor-icon").onclick=()=>{!function(e){const t=document.getElementById("inforBox");t.classList.toggle("hidden"),t.classList.contains("hidden")?((0,a.k)(e,!0),i("label","hidden"),l("wrap-data-icon","hidden"),e.update()):((0,a.k)(e,!1),i("label","hidden"),l("wrap-data-icon","hidden"),e.update())}(e)})}function l(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"hidden";document.getElementById(e)&&document.getElementById(e).classList.toggle(t)}var c=n(2195);function d(e){const t=document.getElementById("infor-example");(0,c.o)(t,"span","Example: ");Object.keys(e).forEach((n=>{switch(n){case"refs":Object.keys(e.refs).length>0&&h("infor-ref",e.refs,"span","Reference");break;case"authors":e.authors.length>0&&function(e){const t=document.getElementById("infor-author");(0,c.o)(t,"span","Authors: "),e.forEach((e=>{(0,c.o)(t,"span",e),t.appendChild(document.createTextNode("  "))}))}(e.authors);break;case"courses":Object.keys(e.courses).length>0&&h("infor-course",e.courses,"span","Courses");break;default:""!==e[n]&&function(e,t,n){(0,c.o)(e,"a",t,{href:n,target:"_blank"}),e.appendChild(document.createTextNode("  "))}(t,n,e[n])}}))}function h(e,t,n,o){const a=document.getElementById(e);(0,c.o)(a,n,o+": "),Object.keys(t).forEach((e=>{(0,c.o)(a,"a",e,{href:t[e],target:"_blank"})}))}var p=n(1411);function m(e,t){(0,p.o)("inforDescription",e.params.description),(0,p.X)("inforComponents",`World size ( ${e.params.setXLength} x ${e.params.setYLength} x ${e.params.setZLength})`),d(e.params.infors),s(e,t)}},733:(e,t,n)=>{n.d(t,{I:()=>i,X:()=>r});var o=n(1824),a=n(6243);function i(e){const t=(0,o.Y)(e);return(0,a.C6)(t[0],t[1]).to("m")}function r(e){const t=(0,o.Y)(e);return{x:(0,a.C6)(t[0],t[3]).to("m"),y:(0,a.C6)(t[1],t[3]).to("m"),z:(0,a.C6)(t[2],t[3]).to("m")}}},1824:(e,t,n)=>{function o(e){let t=e.split(" ");return t.forEach((e=>{e.trim()})),t=t.filter((e=>""!==e)),t}n.d(t,{Y:()=>o})},7346:(e,t,n)=>{n.d(t,{W:()=>c});var o=n(9437),a=n(1566);class i extends o.LoY{constructor(e,t,n){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};super(),this.direction=e,this.origin=t,this.length=n,this.coneLength=(Math.min(o.coneLength,.5)||.15)*this.length,this.coneRadius=(Math.min(o.coneRadius,.1)||.05)*this.length,this.lineLength=this.length-this.coneLength,this.cylLineRadius=(Math.min(o.cylLineRadius,.05)||.01)*this.length,this.cylLineRadialSegment=16,this.cylLineHeightSegment=2,this.coneRadialSegment=16,this.coneHeightSegment=2,this.updateGeo()}updateGeo(){let e=new o.Ho_(this.cylLineRadius,this.cylLineRadius,this.lineLength,this.cylLineRadialSegment,this.cylLineHeightSegment);e.rotateZ(Math.PI/2),e.translate(this.lineLength/2,0,0);let t=new o.qFE(this.coneRadius,this.coneLength,this.coneRadialSegment,this.coneHeightSegment);t.rotateZ(-Math.PI/2),t.translate(this.length-this.coneLength/2,0,0);let n=[e,t],i=a.pP(n,!1);this.attributes=i.attributes,this.index=i.index;let r=new o.Pq0(1,0,0).normalize();const s=new o.PTz;s.setFromUnitVectors(r,this.direction),this.applyQuaternion(s),this.translate(this.origin.x,this.origin.y,this.origin.z),this.computeBoundingBox()}}function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"yellow",s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{cylLineRadius:.001,coneLength:.05,coneRadius:.02};const l=new o.Pq0(e,t,n);l.normalize();const c=new o.Pq0(0,0,0),d=new i(l,c,a,s),h=new o.uSd({color:r});return new o.eaF(d,h)}var s=n(1007),l=n(9092);function c(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.005,a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],i={cylLineRadius:n,coneLength:.05,coneRadius:2*n};const c=r(1,0,0,e,"red",i),d=r(0,1,0,e,"yellow",i),h=r(0,0,1,e,"cyan",i),p=(0,s.f)("X",e),m=(0,s.f)(`${e} ${t}`,.8*e),u=(0,s.f)("Y",0,e,0,-.75),g=(0,s.f)(`${e} ${t}`,0,.8*e,0,-.4),f=(0,s.f)("Z",0,0,e),y=(0,s.f)(`${e} ${t}`,0,0,.8*e);c.add(p,m),d.add(u,g),h.add(f,y);const b=new o.eaF;return b.add(c,d,h),(0,l.k)(b,a),b}},1246:(e,t,n)=>{n.d(t,{c:()=>a});var o=n(9437);function a(){return new o.YJl}},194:(e,t,n)=>{n.d(t,{W:()=>a});var o=n(9437);function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:15;const a=new o.ubm(35,1,.1,100);a.position.set(e,t,n);let i=!0;return a.tick=e=>{a.position.z<0&&(i=!1),a.position.z>n&&(i=!0),i?a.position.z-=1*e:a.position.z+=1*e},a}},1387:(e,t,n)=>{n.d(t,{T8:()=>i,d4:()=>r,ig:()=>s});var o=n(9437),a=n(733);function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;const n=(0,a.I)(e.setRmax),i=(0,a.I)(e.setHeight),r=e.radialSegments?parseInt(e.radialSegments):100,s=e.heightSegments?parseInt(e.heightSegments):1,l=!!e.openEnded&&e.openEnded,c=new o.Ho_(n,n,i,r,s,l);return new o.eaF(c,t)}function r(e,t){(!(arguments.length>2&&void 0!==arguments[2])||arguments[2])&&(e.rotation.x=Math.PI/2),function(e,t){(t.setRmax||t.setHeight||t.radialSegments)&&function(e,t){let n=e.geometry.parameters.height,i=e.geometry.parameters.radiusTop,r=e.geometry.parameters.radialSegments;t.setRmax&&(i=(0,a.I)(t.setRmax));t.setHeight&&(n=(0,a.I)(t.setHeight));t.radialSegments&&(r=parseInt(t.radialSegments));e.geometry.dispose(),e.geometry=new o.Ho_(i,i,n,r)}(e,t);if(t.setTranslation){const n=(0,a.X)(t.setTranslation);e.position.set(n.x,n.y,n.z)}}(e,t)}function s(e,t){(!(arguments.length>2&&void 0!==arguments[2])||arguments[2])&&(e.rotation.x=Math.PI/2),(t.setRtop||t.setRbottom||t.setHeight)&&function(e,t){let n=e.geometry.parameters.height,i=e.geometry.parameters.radiusTop,r=e.geometry.parameters.radiusBottom;t.setRtop&&(i=(0,a.I)(t.setRtop));t.setRbottom&&(r=(0,a.I)(t.setRbottom));t.setHeight&&(n=(0,a.I)(t.setHeight));e.geometry.dispose(),e.geometry=new o.Ho_(i,r,n,32)}(e,t)}},1411:(e,t,n)=>{n.d(t,{X:()=>i,o:()=>a});var o=n(2195);function a(e,t){document.getElementById(e).innerText+=t}function i(e,t){const n=document.getElementById(e);(0,o.o)(n,"li",t)}},2195:(e,t,n)=>{function o(e,t,n){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const a=document.createElement(t);return a.textContent=n,o.type&&a.setAttribute("type",o.type),Object.keys(o).forEach((e=>{a.setAttribute(e,o[e])})),e.appendChild(a),a}n.d(t,{o:()=>o})},1007:(e,t,n)=>{n.d(t,{f:()=>a});var o=n(6074);function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"label",l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"rgba(255, 255, 255,1)",c=arguments.length>8&&void 0!==arguments[8]?arguments[8]:"0px",d=arguments.length>9&&void 0!==arguments[9]?arguments[9]:"0px";const h=document.createElement("div");h.textContent=e,h.style.marginTop=c,h.style.marginLeft=d,h.style.color=l,h.backgroundColor="transparent",h.className=s;const p=new o.v(h);return p.name="label"+e,p.position.set(t,n,a),p.center.set(i,r),p}},1116:(e,t,n)=>{n.d(t,{mD:()=>a});var o=n(9437);function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"white",r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:5;const s=new o.ZyN(i,r);s.position.set(t,n,a),e.add(s)}},7485:(e,t,n)=>{n.d(t,{B:()=>a});var o=n(9437);function a(){return new o.Z58}},4376:(e,t,n)=>{n.d(t,{F:()=>a});const o=new(n(9437).zD7);class a{constructor(e,t,n,o){this.camera=e,this.scene=t,this.renderer=n,this.labelRenderer=o,this.updatables=[]}start(){this.renderer.setAnimationLoop((()=>{this.tick(),this.renderer.render(this.scene,this.camera),this.labelRenderer.render(this.scene,this.camera)}))}stop(){this.renderer.setAnimationLoop(null)}tick(){const e=o.getDelta();for(const t of this.updatables)t.tick(e)}}},6266:(e,t,n)=>{n.d(t,{L:()=>a});const o=(e,t,n,o)=>{t.aspect=e.clientWidth/e.clientHeight,t.updateProjectionMatrix(),n.setSize(e.clientWidth,e.clientHeight),o.setSize(e.clientWidth,e.clientHeight),n.setPixelRatio(window.devicePixelRatio)};class a{constructor(e,t,n,a){o(e,t,n,a),window.addEventListener("resize",(()=>{o(e,t,n,a),this.onResize()}))}onResize(){}}},6297:(e,t,n)=>{n.d(t,{B:()=>a});var o=n(7024);function a(e,t){const n=new o.N(e,t);return n.enableDamping=!0,n.minDistance=.1,n.maxDistance=100,n.tick=()=>n.update(),n}},4393:(e,t,n)=>{n.d(t,{m:()=>a});var o=n(6074);function a(){const e=new o.B;return e.domElement.style.position="absolute",e.domElement.style.top="0px",e}},4049:(e,t,n)=>{n.d(t,{K:()=>a});var o=n(9437);function a(){const e=new o.JeP({antialias:!0});return e.physicallyCorrectLights=!0,e.shadowMap=!0,e}},5897:(e,t,n)=>{n.d(t,{wv:()=>a});var o=n(9437);class a{constructor(){this.polygons=[]}clone(){let e=new a;return e.polygons=this.polygons.map((e=>e.clone())),e}toPolygons(){return this.polygons}union(e){let t=new c(this.clone().polygons),n=new c(e.clone().polygons);return t.clipTo(n),n.clipTo(t),n.invert(),n.clipTo(t),n.invert(),t.build(n.allPolygons()),a.fromPolygons(t.allPolygons())}subtract(e){let t=new c(this.clone().polygons),n=new c(e.clone().polygons);return t.invert(),t.clipTo(n),n.clipTo(t),n.invert(),n.clipTo(t),n.invert(),t.build(n.allPolygons()),t.invert(),a.fromPolygons(t.allPolygons())}intersect(e){let t=new c(this.clone().polygons),n=new c(e.clone().polygons);return t.invert(),n.clipTo(t),n.invert(),t.clipTo(n),n.clipTo(t),t.build(n.allPolygons()),t.invert(),a.fromPolygons(t.allPolygons())}inverse(){let e=this.clone();return e.polygons.forEach((e=>e.flip())),e}}a.fromPolygons=function(e){let t=new a;return t.polygons=e,t},a.fromGeometry=function(e,t){let n,o=[],i=e.attributes.position,s=e.attributes.normal,c=e.attributes.uv,d=e.attributes.color;if(e.index)n=e.index.array;else{n=new Array(i.array.length/i.itemSize|0);for(let e=0;e<n.length;e++)n[e]=e}let h=n.length/3|0;o=new Array(h);for(let e=0,a=0,h=n.length;e<h;e+=3,a++){let h=new Array(3);for(let t=0;t<3;t++){let o=n[e+t],a=3*o,l=2*o,p=i.array[a],m=i.array[a+1],u=i.array[a+2],g=s.array[a],f=s.array[a+1],y=s.array[a+2];h[t]=new r({x:p,y:m,z:u},{x:g,y:f,z:y},c&&{x:c.array[l],y:c.array[l+1],z:0},d&&{x:d.array[l],y:d.array[l+1],z:d.array[l+2]})}o[a]=new l(h,t)}return a.fromPolygons(o)},a.ttvv0=new o.Pq0,a.tmpm3=new o.dwI,a.fromMesh=function(e,t){let n=a.fromGeometry(e.geometry,t);a.tmpm3.getNormalMatrix(e.matrix);for(let t=0;t<n.polygons.length;t++){let i=n.polygons[t];for(let t=0;t<i.vertices.length;t++){let n=i.vertices[t];n.pos.copy(a.ttvv0.copy(new o.Pq0(n.pos.x,n.pos.y,n.pos.z)).applyMatrix4(e.matrix)),n.normal.copy(a.ttvv0.copy(new o.Pq0(n.normal.x,n.normal.y,n.normal.z)).applyMatrix3(a.tmpm3))}}return n},a.nbuf3=e=>({top:0,array:new Float32Array(e),write:function(e){this.array[this.top++]=e.x,this.array[this.top++]=e.y,this.array[this.top++]=e.z}}),a.nbuf2=e=>({top:0,array:new Float32Array(e),write:function(e){this.array[this.top++]=e.x,this.array[this.top++]=e.y}}),a.toGeometry=function(e){let t,n,i=e.polygons,r=0;i.forEach((e=>r+=e.vertices.length-2)),t=new o.LoY;let s,l,c=a.nbuf3(3*r*3),d=a.nbuf3(3*r*3);const h={};if(i.forEach((e=>{let t=e.vertices,n=t.length;void 0!==e.shared&&(h[e.shared]||(h[e.shared]=[])),n&&(void 0!==t[0].color&&(l||(l=a.nbuf3(3*r*3))),void 0!==t[0].uv&&(s||(s=a.nbuf2(2*r*3))));for(let o=3;o<=n;o++)void 0!==e.shared&&h[e.shared].push(c.top/3,c.top/3+1,c.top/3+2),c.write(t[0].pos),c.write(t[o-2].pos),c.write(t[o-1].pos),d.write(t[0].normal),d.write(t[o-2].normal),d.write(t[o-1].normal),s&&t[0].uv&&(s.write(t[0].uv)||s.write(t[o-2].uv)||s.write(t[o-1].uv)),l&&(l.write(t[0].color)||l.write(t[o-2].color)||l.write(t[o-1].color))})),t.setAttribute("position",new o.THS(c.array,3)),t.setAttribute("normal",new o.THS(d.array,3)),s&&t.setAttribute("uv",new o.THS(s.array,2)),l&&t.setAttribute("color",new o.THS(l.array,3)),Object.keys(h).length){let e=[],n=0;for(let o=0;o<Object.keys(h).length;o++){const a=Number(Object.keys(h)[o]);t.addGroup(n,h[a].length,o),n+=h[a].length,e=e.concat(h[a])}t.setIndex(e)}return n=t,t},a.toMesh=function(e,t,n){let i=a.toGeometry(e),r=(new o.kn4).copy(t).invert();i.applyMatrix4(r),i.computeBoundingSphere(),i.computeBoundingBox();let s=new o.eaF(i,n);return s.matrix.copy(t),s.matrix.decompose(s.position,s.quaternion,s.scale),s.rotation.setFromQuaternion(s.quaternion),s.updateMatrixWorld(),s.castShadow=s.receiveShadow=!0,s};class i{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.x=e,this.y=t,this.z=n}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}clone(){return new i(this.x,this.y,this.z)}negate(){return this.x*=-1,this.y*=-1,this.z*=-1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}times(e){return this.x*=e,this.y*=e,this.z*=e,this}dividedBy(e){return this.x/=e,this.y/=e,this.z/=e,this}lerp(e,t){return this.add(i.tv0.copy(e).sub(this).times(t))}unit(){return this.dividedBy(this.length())}length(){return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2)+Math.pow(this.z,2))}normalize(){return this.unit()}cross(e){let t=this;const n=t.x,o=t.y,a=t.z,i=e.x,r=e.y,s=e.z;return this.x=o*s-a*r,this.y=a*i-n*s,this.z=n*r-o*i,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}}i.tv0=new i,i.tv1=new i;class r{constructor(e,t,n,o){this.pos=(new i).copy(e),this.normal=(new i).copy(t),n&&(this.uv=(new i).copy(n))&&(this.uv.z=0),o&&(this.color=(new i).copy(o))}clone(){return new r(this.pos,this.normal,this.uv,this.color)}flip(){this.normal.negate()}interpolate(e,t){return new r(this.pos.clone().lerp(e.pos,t),this.normal.clone().lerp(e.normal,t),this.uv&&e.uv&&this.uv.clone().lerp(e.uv,t),this.color&&e.color&&this.color.clone().lerp(e.color,t))}}class s{constructor(e,t){this.normal=e,this.w=t}clone(){return new s(this.normal.clone(),this.w)}flip(){this.normal.negate(),this.w=-this.w}splitPolygon(e,t,n,o,a){let r=0,c=[];for(let t=0;t<e.vertices.length;t++){let n=this.normal.dot(e.vertices[t].pos)-this.w,o=n<-s.EPSILON?2:n>s.EPSILON?1:0;r|=o,c.push(o)}switch(r){case 0:(this.normal.dot(e.plane.normal)>0?t:n).push(e);break;case 1:o.push(e);break;case 2:a.push(e);break;case 3:let r=[],s=[];for(let t=0;t<e.vertices.length;t++){let n=(t+1)%e.vertices.length,o=c[t],a=c[n],l=e.vertices[t],d=e.vertices[n];if(2!=o&&r.push(l),1!=o&&s.push(2!=o?l.clone():l),3==(o|a)){let e=(this.w-this.normal.dot(l.pos))/this.normal.dot(i.tv0.copy(d.pos).sub(l.pos)),t=l.interpolate(d,e);r.push(t),s.push(t.clone())}}r.length>=3&&o.push(new l(r,e.shared)),s.length>=3&&a.push(new l(s,e.shared))}}}s.EPSILON=1e-5,s.fromPoints=function(e,t,n){let o=i.tv0.copy(t).sub(e).cross(i.tv1.copy(n).sub(e)).normalize();return new s(o.clone(),o.dot(e))};class l{constructor(e,t){this.vertices=e,this.shared=t,this.plane=s.fromPoints(e[0].pos,e[1].pos,e[2].pos)}clone(){return new l(this.vertices.map((e=>e.clone())),this.shared)}flip(){this.vertices.reverse().forEach((e=>e.flip())),this.plane.flip()}}class c{constructor(e){this.polygons=[],e&&this.build(e)}clone(){let e=new c;return e.plane=this.plane&&this.plane.clone(),e.front=this.front&&this.front.clone(),e.back=this.back&&this.back.clone(),e.polygons=this.polygons.map((e=>e.clone())),e}invert(){for(let e=0;e<this.polygons.length;e++)this.polygons[e].flip();this.plane&&this.plane.flip(),this.front&&this.front.invert(),this.back&&this.back.invert();let e=this.front;this.front=this.back,this.back=e}clipPolygons(e){if(!this.plane)return e.slice();let t=[],n=[];for(let o=0;o<e.length;o++)this.plane.splitPolygon(e[o],t,n,t,n);return this.front&&(t=this.front.clipPolygons(t)),n=this.back?this.back.clipPolygons(n):[],t.concat(n)}clipTo(e){this.polygons=e.clipPolygons(this.polygons),this.front&&this.front.clipTo(e),this.back&&this.back.clipTo(e)}allPolygons(){let e=this.polygons.slice();return this.front&&(e=e.concat(this.front.allPolygons())),this.back&&(e=e.concat(this.back.allPolygons())),e}build(e){if(!e.length)return;this.plane||(this.plane=e[0].plane.clone());let t=[],n=[];for(let o=0;o<e.length;o++)this.plane.splitPolygon(e[o],this.polygons,this.polygons,t,n);t.length&&(this.front||(this.front=new c),this.front.build(t)),n.length&&(this.back||(this.back=new c),this.back.build(n))}}c.fromJSON=function(e){return a.fromPolygons(e.polygons.map((e=>new l(e.vertices.map((e=>new r(e.pos,e.normal,e.uv))),e.shared))))}}}]);