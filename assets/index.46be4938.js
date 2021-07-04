import{d as t,P as a,U as e,f as s,o as n,c as i,a as o,F as l,A as r,w as d,B as c,t as h,Q as v,e as g,K as u,g as p,N as m,C as x,D as w,G as f}from"./index.4e4cbf4d.js";var b=t({name:"NavHeader",props:{isFixed:{type:Boolean,default:!1}},setup(){const{name:t,avatar:s,doLogout:n}=e(),i=a();return{cdn:"//files.pengxiaotian.com",userName:t,avatar:s,logout:()=>{n().then((()=>{i.push({name:"Login"})}))}}}});const y={class:"logo"},C={class:"top-tip"},k=o("strong",{class:"tip-strong"},"公告",-1),M={class:"datav-marquee"},S={class:"content"},I=c(" 1. DataV 仅支持谷歌 Chrome 浏览器版本 60 以上。2. DataV 基于 Vue 3.x 开发。3. 项目地址："),T=o("a",{href:"https://github.com/pengxiaotian/datav-vue",target:"_blank",class:"project-href"},"https://github.com/pengxiaotian/datav-vue",-1),D=o("span",{class:"content-space"},null,-1),N={class:"user"},L={class:"header-item"},H={class:"user-link-wrap"},P=o("img",{src:"/images/avatar-placeholder.png"},null,-1),W={class:"user-link"},_=o("i",{class:"v-icon-arrow-down"},null,-1),A=c(" 退出 "),F={class:"datav-nav"},z={class:"header-img"},E=o("div",{class:"nav-img"},null,-1);b.render=function(t,a,e,v,g,u){const p=s("el-avatar"),m=s("g-drop-list-item"),x=s("g-drop-list"),w=s("g-drop-list-popover");return n(),i("div",null,[o("div",{class:"datav-hearder",style:{background:t.isFixed?"#171b22":""}},[o("div",y,[o("div",C,[k,o("div",M,[o("span",S,[(n(),i(l,null,r(2,(t=>(n(),i(l,{key:t},[I,T,D],64)))),64))])])])]),o("div",N,[o("div",L,[o(w,null,{droplist:d((()=>[o(x,null,{default:d((()=>[o(m,{icon:"v-icon-logout",onClick:t.logout},{default:d((()=>[A])),_:1},8,["onClick"])])),_:1})])),default:d((()=>[o("span",H,[o(p,{size:20,src:t.avatar+"?imageView2/1/w/80/h/80"},{default:d((()=>[P])),_:1},8,["src"]),o("span",W,[c(h(t.userName)+" ",1),_])])])),_:1})])])],4),o("div",F,[o("div",z,[o("img",{class:"nav-img-text",src:`${t.cdn}/datav/nav-img-text.png`},null,8,["src"]),E])])])};class j{constructor(t,a,e=0){this.j=.85,this.k=10,this.l=4,this.pattern=null,this.tabWidthList=[],this.tabHeight=0,this.opt={currentIndex:0,nextIndex:1,speed:1,timer:0,width:200,height:100,animating:!1,curDisX:0,distance:0},this.canvas=document.getElementById(t),this.tabs=document.querySelectorAll(a);const{opt:s}=this;this.calcTabs(),this.initCanvas(this.canvas,s.width,s.height),this.createPattern(this.canvas),this.startDraw(0),this.toggle(e)}initCanvas(t,a,e){const s=t.getContext("2d"),{devicePixelRatio:n}=window;t.width=a*n,t.height=e*n,t.style.width=a+"px",t.style.height=e+"px",s.scale(n,n)}calcTabs(){const{opt:t,tabs:a}=this,e=[];let s=0;a.forEach((t=>{e.push(s),s+=t.offsetWidth})),e[0]=-20,e.push(s),this.tabWidthList=e,this.tabHeight=a[0].offsetHeight+0,t.height=this.tabHeight+20,t.width=window.innerWidth}createPattern(t){const a=document.createElement("canvas");a.width=140,a.height=63,a.style.width="140px",a.style.height="63px";const e=a.getContext("2d");e.scale(1,1),e.lineWidth=.4;for(let s=3,n=.8,i=1;30>i;i++)e.strokeStyle="RGBA(22, 120, 160, "+n+")",e.beginPath(),e.moveTo(0,i*s),e.lineTo(140,i*s),e.stroke(),e.closePath(),10<i&&(n-=.1);this.pattern=t.getContext("2d").createPattern(a,"repeat-x")}calcAVGSpeed(t){const{l:a,j:e,k:s}=this;let n=(a*e*t+s*(1-e)*t)/(s*a*20);return n=Math.max(Math.abs(n),2.5)*Math.sign(n),n}getCurSpeed(t,a){const{l:e,j:s,k:n,opt:i}=this;return Math.abs(t)>Math.abs(s*a)?e*i.speed:n*i.speed}calCurve(t,a,e,s,n,i){t.bezierCurveTo(a+i,e,s-i,n,s,n)}drawHightlight(t){const{opt:a}=this,e=this.canvas.getContext("2d");e.clearRect(0,0,2*a.width,2*a.height),e.shadowColor="rgba(36, 131, 255, 1)",e.shadowBlur=5,e.strokeStyle="#004CB3",e.lineWidth=.8,e.fillStyle="none",this.draw(e,!1);const s=e.createLinearGradient(0,0,a.width,a.height),n=t-.3;s.addColorStop(Math.min(1,Math.max(0,0+n)),"rgba(0,0,0,0)"),s.addColorStop(Math.min(1,Math.max(0,0+n+.1)),"#8ed6ff"),s.addColorStop(Math.min(1,0+n+.3),"#8ed6ff"),s.addColorStop(Math.min(1,0+n+.3+.1),"rgba(0,0,0,0)"),s.addColorStop(1,"rgba(0,0,0,0)"),e.lineWidth=1.5,e.strokeStyle=s,e.fillStyle=this.pattern,this.draw(e,!0)}startDraw(t){this.drawHightlight(t),this.opt.timer=requestAnimationFrame((()=>{this.startDraw((t+.005)%1.6)}))}draw(t,a){const{opt:e,tabWidthList:s,tabHeight:n}=this,i=e.currentIndex,o=n,l=.5;let r=0;if(t.beginPath(),t.moveTo(-50,e.height+10),t.lineTo(-50,o+l),e.animating){const t=this.getCurSpeed(e.curDisX,e.distance);r=Math.min(Math.abs(e.distance),Math.abs(e.curDisX+t))*Math.sign(t)}if(t.lineTo(0+s[i]+r-20,o+l),this.calCurve(t,0+s[i]+r-20,o+l,0+s[i]+r+20,3,20),e.animating){const a=s[e.nextIndex+1]-s[e.nextIndex];t.lineTo(0+s[i]+a+r-20,3),this.calCurve(t,0+s[i]+a+r-20,3,0+s[i]+a+r+20,o+l,20)}else t.lineTo(0+s[i+1]+r-20,3),this.calCurve(t,0+s[i+1]+r-20,3,0+s[i+1]+r+20,o+l,20);t.lineTo(e.width+10,o+l),t.lineTo(e.width+10,e.height+10),t.closePath(),t.stroke(),a&&t.fill(),a&&e.animating&&(e.curDisX=r,Math.abs(r)>=Math.abs(e.distance)&&(e.animating=!1,e.currentIndex=e.nextIndex))}toggle(t){const{opt:a,tabWidthList:e}=this;t===a.currentIndex||!e||!e.length||a.animating&&t===a.nextIndex||(a.animating=!0,a.distance=e[t]-e[a.currentIndex],a.speed=this.calcAVGSpeed(a.distance),a.curDisX=0,a.nextIndex=t)}resize(){const{opt:t}=this;t.timer&&cancelAnimationFrame(t.timer),this.calcTabs(),this.initCanvas(this.canvas,t.width,t.height),this.startDraw(0)}}var B=t({name:"NavMain",props:{navs:{type:Array,required:!0}},emits:["change"],setup(t,a){const e=v(),s=g(0);let n=null;const i=u((()=>{n&&n.resize()}),500);return p((()=>{const a=t.navs.find((t=>t.key===e.name));s.value=a?a.id:0,n=new j("nav-canvas",".nav-main .nav-span",s.value),window.addEventListener("resize",i)})),m((()=>{window.removeEventListener("resize",i)})),{toggleNav:t=>{n&&(s.value=t.id,n.toggle(t.id),a.emit("change",t))},activeNav:s}}});const V=f();x("data-v-659da5cc");const G={class:"nav-main"},R=o("canvas",{id:"nav-canvas",style:{position:"absolute","z-index":"-1",left:"0"}},null,-1);w();const X=V(((t,a,e,s,d,v)=>(n(),i("div",G,[R,(n(!0),i(l,null,r(t.navs,(a=>(n(),i("span",{key:a.id,class:"nav-span"},[o("a",{class:["nav-link",{"nav-active":t.activeNav===a.id}],onClick:e=>t.toggleNav(a)},[o("i",{class:`v-icon-${a.icon} nav-icon`},null,2),c(h(a.name),1)],10,["onClick"])])))),128))]))));B.render=X,B.__scopeId="data-v-659da5cc";var q=t({name:"Home",components:{NavHeader:b,NavMain:B},setup(){const t=g(null),e=g(!1),s=g([{id:0,key:"MyProject",name:"我的可视化",icon:"layer"},{id:1,key:"MyData",name:"我的数据",icon:"my-data"},{id:2,key:"MyCom",name:"我的组件",icon:"my-com"},{id:3,key:"MyCase",name:"教程",icon:"tutorial"}]),n=a(),i=()=>{e.value=t.value.$el.offsetTop>200};return p((()=>{window.addEventListener("scroll",i)})),m((()=>{window.removeEventListener("scroll",i)})),{navMainRef:t,isFixed:e,navs:s,onNavChange:t=>{n.push({name:t.key})}}}});const $=f();x("data-v-571748a1");const K={class:"datav"},Q=o("div",{class:"nav-shadow"},null,-1),U={class:"datav-main"},J={class:"datav-content"};w();const O=$(((t,a,e,l,r,d)=>{const c=s("nav-header"),h=s("nav-main"),v=s("router-view");return n(),i("div",K,[o(c,{"is-fixed":t.isFixed},null,8,["is-fixed"]),o(h,{ref:"navMainRef",navs:t.navs,style:{background:t.isFixed?"#171b22":""},onChange:t.onNavChange},null,8,["navs","style","onChange"]),Q,o("div",U,[o("div",J,[o(v)])])])}));q.render=O,q.__scopeId="data-v-571748a1";export default q;
