import{d as e,f as t,o,c as r,w as n,r as a}from"./index.4e4cbf4d.js";var p=e({name:"GTooltipPopover",props:{trigger:{type:String,default:"hover"},placement:{type:String,default:"bottom"},showAfter:{type:Number,default:500},content:String}});p.render=function(e,p,s,l,f,c){const i=t("el-popover");return o(),r(i,{placement:e.placement,trigger:e.trigger,"show-arrow":!1,content:e.content,"show-after":e.showAfter,enterable:!1,offset:5,width:"auto","popper-class":"tooltip-popover"},{reference:n((()=>[a(e.$slots,"default")])),_:1},8,["placement","trigger","content","show-after"])},p.install=e=>{e.component(p.name,p)};export default p;
