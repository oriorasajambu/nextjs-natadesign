"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[564],{9735:function(e,i,l){l.d(i,{G0:function(){return n},Ue:function(){return t},uF:function(){return s}});let t={visible:{opacity:.99,transition:{duration:1.5}},hidden:{opacity:0}},n={visible:{width:"100%",transition:{duration:2,ease:"easeOut"}},hidden:{width:0}},s={visible:{height:"100%",transition:{duration:4,ease:"easeOut"}},hidden:{height:0}}},623:function(e,i,l){l.d(i,{Z:function(){return n}});var t=l(5893);function n(e){let{className:i,subTitle:l}=e;return(0,t.jsx)("h2",{className:"".concat(i," font-play-serif font-bold text-4xl lg:text-[80px] md:text-[64px] sm:text-[64px] leading-tight"),children:l})}},564:function(e,i,l){l.r(i),l.d(i,{default:function(){return f}});var t=l(5893),n=l(5675),s=l.n(n),a=l(5414),r=l(9735),d=l(9734);let c=e=>fetch(e).then(e=>e.json());function o(e){let{loadingItems:i}=e,l=[...Array(i)];return(0,t.jsx)("div",{className:"flex flex-row flex-1 flex-nowrap overflow-x-auto lg:grid lg:grid-cols-5 md:grid md:grid-cols-3 gap-6 w-full items-center",children:l.map((e,i)=>(0,t.jsx)("div",{className:"grow w-full",children:(0,t.jsx)("div",{className:"aspect-square w-full animate-pulse bg-secondary"})},i))})}function u(e){let{props:i}=e,{data:l,isLoading:n,error:u}=(0,d.ZP)(i.api,c);return u?(0,t.jsx)(t.Fragment,{}):n?(0,t.jsx)(o,{loadingItems:(null==i?void 0:i.loadingItems)?null==i?void 0:i.loadingItems:15}):!l||l.length<1?(0,t.jsx)(t.Fragment,{}):(0,t.jsx)(a.E.div,{initial:"hidden",whileInView:"visible",variants:r.Ue,viewport:{once:!0},className:"flex flex-row flex-1 flex-nowrap overflow-x-auto lg:grid lg:grid-cols-5 md:grid md:grid-cols-4 sm:grid sm:grid-cols-3 gap-6 w-full items-center",children:l.map((e,i)=>(0,t.jsx)("div",{className:"grow w-full xs:h-[300px] border-2 border-primary aspect-square relative",children:(0,t.jsx)(s(),{className:"w-full p-10",src:"".concat("https://admin.natadesign.id/"+e.image),fill:!0,alt:"".concat(e.alt)})},i))})}var x=l(623);function f(){return(0,t.jsx)("div",{className:"bg-[#FFFBF2] py-20 flex flex-row justify-center",children:(0,t.jsx)("div",{className:"lg:w-[1200px] md:w-[864px] sm:w-[608px] xs:w-[280px] lg:px-20 md:px-0 sm:px-0",children:(0,t.jsx)("div",{className:"flex flex-col items-center justify-evenly gap-10 lg:gap-20",children:(0,t.jsxs)("div",{className:"flex flex-col justify-evenly items-center w-full h-full lg:gap-12 gap-10",children:[(0,t.jsx)(x.Z,{className:"text-primary",subTitle:"Klien Kami"}),(0,t.jsx)(u,{props:{api:"".concat("https://admin.natadesign.id/api/clients")}})]})})})})}}}]);
//# sourceMappingURL=564.c0ae2a4b0aeca0f0.js.map