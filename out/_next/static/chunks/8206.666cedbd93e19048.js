(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8206],{8206:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return j}});var a=s(5893),l=s(9734),n=s(7294),r=s(1163),i=s(5675),o=s.n(i),d=s(5152),h=s.n(d);let x=h()(()=>s.e(623).then(s.bind(s,623)),{loadableGenerated:{webpack:()=>[623]},ssr:!1}),p=h()(()=>Promise.all([s.e(5414),s.e(4341)]).then(s.bind(s,9696)),{loadableGenerated:{webpack:()=>[9696]},ssr:!1}),m=h()(()=>Promise.all([s.e(5414),s.e(4447)]).then(s.bind(s,4447)),{loadableGenerated:{webpack:()=>[4447]},ssr:!1}),c=e=>fetch(e).then(e=>e.json()),f=0;function j(){let[e,t]=(0,n.useState)(0),{query:{slug:s}}=(0,r.useRouter)(),{data:i,isLoading:d,error:h}=(0,l.ZP)("".concat("https://admin.natadesign.id/api/albums/get/"+s),c);if(d||h||!i||i.photos.length<1)return(0,a.jsx)(a.Fragment,{});let j=()=>{t(f=(f+1)%i.photos.length)},g=()=>{t(f=(f+i.photos.length-1)%i.photos.length)};return(0,a.jsx)("div",{className:"w-full flex flex-row justify-center lg:pb-20 pb-10 bg-[#FFFBF2]",children:(0,a.jsxs)("div",{className:"lg:w-[1200px] md:w-[768px] sm:w-[608px] xs:w-[280px] lg:px-20 md:px-0 sm:px-0",children:[(0,a.jsxs)("div",{className:"grid grid-flow-row mb-20",children:[(0,a.jsx)("div",{className:"flex flex-row justify-between items-center py-14",children:(0,a.jsx)(x,{className:"uppercase text-primary",subTitle:i.title})}),(0,a.jsx)(p,{}),(0,a.jsx)("div",{className:"w-full aspect-square mt-12 relative",children:(0,a.jsx)(o(),{src:"".concat("https://admin.natadesign.id/"+i.photos[e].original),priority:!0,fill:!0,alt:i.photos[e].alt})}),(0,a.jsxs)("div",{className:"flex flex-row mt-12 justify-between",children:[(0,a.jsxs)("div",{className:"flex flex-row",children:[(0,a.jsx)("button",{onClick:g,children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"74.437",height:"37.674",viewBox:"0 0 74.437 37.674",children:(0,a.jsxs)("g",{id:"Group_295","data-name":"Group 295",transform:"translate(74.437 37.674) rotate(180)",children:[(0,a.jsxs)("g",{id:"Rectangle_69","data-name":"Rectangle 69",transform:"translate(74.437 37.674) rotate(180)",fill:"none",stroke:"#404040",strokeWidth:"1",children:[(0,a.jsx)("path",{d:"M18.837,0h55.6a0,0,0,0,1,0,0V37.674a0,0,0,0,1,0,0h-55.6A18.837,18.837,0,0,1,0,18.837v0A18.837,18.837,0,0,1,18.837,0Z",stroke:"none"}),(0,a.jsx)("path",{d:"M18.837.5h55.1a0,0,0,0,1,0,0V37.174a0,0,0,0,1,0,0h-55.1A18.337,18.337,0,0,1,.5,18.837v0A18.337,18.337,0,0,1,18.837.5Z",fill:"none"})]}),(0,a.jsxs)("g",{id:"Component_7_12","data-name":"Component 7 – 12",transform:"translate(26 12)",children:[(0,a.jsx)("path",{id:"Path_19","data-name":"Path 19",d:"M0,6.837,6.837,0l6.837,6.837",transform:"translate(24.437) rotate(90)",fill:"none",stroke:"#404040",strokeWidth:"1"}),(0,a.jsx)("path",{id:"Path_20","data-name":"Path 20",d:"M1208.8,3931.5h-24.437",transform:"translate(-1184.364 -3924.663)",fill:"none",stroke:"#404040",strokeWidth:"1"})]})]})})}),(0,a.jsx)("button",{onClick:j,children:(0,a.jsxs)("svg",{id:"Group_294","data-name":"Group 294",xmlns:"http://www.w3.org/2000/svg",width:"74.437",height:"37.674",viewBox:"0 0 74.437 37.674",children:[(0,a.jsxs)("g",{id:"Rectangle_69","data-name":"Rectangle 69",transform:"translate(74.437 37.674) rotate(180)",fill:"none",stroke:"#404040",strokeWidth:"1",children:[(0,a.jsx)("path",{d:"M18.837,0h55.6a0,0,0,0,1,0,0V37.674a0,0,0,0,1,0,0h-55.6A18.837,18.837,0,0,1,0,18.837v0A18.837,18.837,0,0,1,18.837,0Z",stroke:"none"}),(0,a.jsx)("path",{d:"M18.837.5h55.1a0,0,0,0,1,0,0V37.174a0,0,0,0,1,0,0h-55.1A18.337,18.337,0,0,1,.5,18.837v0A18.337,18.337,0,0,1,18.837.5Z",fill:"none"})]}),(0,a.jsxs)("g",{id:"Component_7_11","data-name":"Component 7 – 11",transform:"translate(26 12)",children:[(0,a.jsx)("path",{id:"Path_19","data-name":"Path 19",d:"M0,6.837,6.837,0l6.837,6.837",transform:"translate(24.437) rotate(90)",fill:"none",stroke:"#404040",strokeWidth:"1"}),(0,a.jsx)("path",{id:"Path_20","data-name":"Path 20",d:"M1208.8,3931.5h-24.437",transform:"translate(-1184.364 -3924.663)",fill:"none",stroke:"#404040",strokeWidth:"1"})]})]})})]}),(0,a.jsx)("div",{className:"border border-partial rounded-full py-[10px] px-[20px]",children:(0,a.jsxs)("p",{className:"font-dm-sans text-partial text-xs",children:[e<10?"0"+(e+1):e+1," / ",i.photos.length<10?"0"+i.photos.length:i.photos.length]})})]})]}),(0,a.jsx)(p,{}),(0,a.jsxs)("div",{className:"flex flex-row xs:flex-col w-full items-stretch gap-[1px] relative",children:[(0,a.jsx)("div",{className:"lg:basis-1/2 md:basis-1/2 sm:basis-1/2 lg:pr-12 md:pr-12 sm:pr-12 xs:pr-0 py-12",children:(0,a.jsx)("p",{className:"font-dm-sans text-2xl text-partial",dangerouslySetInnerHTML:{__html:i.album_detail}})}),(0,a.jsx)(p,{className:"hidden xs:block"}),(0,a.jsx)(m,{className:"block xs:hidden"}),(0,a.jsx)("div",{className:"lg:basis-1/2 md:basis-1/2 sm:basis-1/2 lg:pl-12 md:pl-12 sm:pl-12 xs:pl-0 py-12",children:(0,a.jsx)("p",{className:"font-dm-sans text-2xl text-partial",dangerouslySetInnerHTML:{__html:i.album_description}})})]}),(0,a.jsx)(p,{})]})})}},1163:function(e,t,s){e.exports=s(880)}}]);
//# sourceMappingURL=8206.666cedbd93e19048.js.map