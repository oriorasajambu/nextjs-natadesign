"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[10],{9010:function(e,s,l){l.r(s),l.d(s,{default:function(){return u}});var a=l(5893),t=l(1664),n=l.n(t),d=l(623),r=l(5675),i=l.n(r),c=l(1679),m=l(9734);let o=e=>fetch(e).then(e=>e.json());function x(e){let{loadingItems:s}=e,l=[...Array(s)];return(0,a.jsx)("div",{className:"grid grid-cols-3 gap-6 lg:mt-20 mt-10",children:l.map((e,s)=>s%2==0?(0,a.jsxs)("article",{className:"flex flex-col",children:[(0,a.jsx)("div",{className:"animate-pulse h-2 lg:h-4 md:h-3 bg-secondary mb-3 lg:mb-6 w-1/3 rounded-lg"}),(0,a.jsx)("div",{className:"animate-pulse basis-[19%] relative w-full grow aspect-square md:h-48 bg-secondary mb-3 lg:mb-6 rounded-lg"}),(0,a.jsx)("div",{className:"animate-pulse h-3 lg:h-5 md:h-4 bg-secondary mb-3 lg:mb-6 w-1/2 rounded-lg"}),(0,a.jsx)("div",{className:"animate-pulse h-2 lg:h-4 md:h-3 bg-secondary mb-2 rounded-lg"}),(0,a.jsx)("div",{className:"animate-pulse h-2 lg:h-4 md:h-3 bg-secondary rounded-lg"})]},s):(0,a.jsxs)("article",{className:"flex flex-col",children:[(0,a.jsx)("div",{className:"animate-pulse h-2 lg:h-4 md:h-3 bg-secondary mb-3 lg:mb-6 w-1/3 rounded-lg"}),(0,a.jsx)("div",{className:"animate-pulse h-3 lg:h-5 md:h-4 bg-secondary mb-3 lg:mb-6 w-1/2 rounded-lg"}),(0,a.jsx)("div",{className:"animate-pulse h-2 lg:h-4 md:h-3 bg-secondary mb-2 rounded-lg"}),(0,a.jsx)("div",{className:"animate-pulse h-2 lg:h-4 md:h-3 bg-secondary mb-3 lg:mb-6 rounded-lg"}),(0,a.jsx)("div",{className:"animate-pulse basis-[19%] relative w-full grow aspect-square md:h-48 bg-secondary rounded-lg"})]},s))})}function g(e){let{props:s}=e,{data:l,isLoading:t,error:d}=(0,m.ZP)("".concat("https://admin.natadesign.id/api/articles/highlight"),o);return t?(0,a.jsx)(x,{loadingItems:s.loadingItems?s.loadingItems:3}):d||!l?(0,a.jsx)(a.Fragment,{}):(0,a.jsx)("div",{className:"grid grid-cols-3 gap-6 lg:mt-20 mt-10",children:l&&l.map((e,s)=>s%2==0?(0,a.jsx)("article",{children:(0,a.jsxs)(n(),{href:"/articles/".concat(encodeURIComponent(e.slug)),className:"flex flex-col",children:[(0,a.jsx)(c.Z,{props:{date:e.published_at,class:"text-partial font-dm-sans font-bold text-base mb-3 lg:mb-6"}}),(0,a.jsx)("div",{className:"mb-3 lg:mb-6 basis-[19%] relative w-full grow aspect-square",children:e.thumbnail_url?(0,a.jsx)(i(),{src:e.thumbnail_url,fill:!0,alt:e.title}):(0,a.jsx)("div",{className:"animate-pulse h-2 lg:h-4 md:h-3 bg-secondary rounded-lg"})}),(0,a.jsx)("h1",{className:"text-partial font-dm-sans font-bold text-xl mb-3 lg:mb-6 truncate",children:e.title}),(0,a.jsx)("p",{dangerouslySetInnerHTML:{__html:e.content},className:"text-secondary font-dm-sans text-base leading-6 line-clamp-3"})]})},s):(0,a.jsx)("article",{children:(0,a.jsxs)(n(),{href:"/articles/".concat(encodeURIComponent(e.slug)),className:"flex flex-col",children:[(0,a.jsx)(c.Z,{props:{date:e.published_at,class:"text-partial font-dm-sans font-bold text-base mb-3 lg:mb-6"}}),(0,a.jsx)("h1",{className:"text-partial font-dm-sans font-bold text-xl mb-3 lg:mb-6 truncate",children:e.title}),(0,a.jsx)("p",{dangerouslySetInnerHTML:{__html:e.content},className:"text-secondary font-dm-sans text-base leading-6 line-clamp-3 mb-3 lg:mb-6"}),(0,a.jsx)("div",{className:"basis-[19%] relative w-full grow aspect-square",children:e.thumbnail_url?(0,a.jsx)(i(),{src:e.thumbnail_url,fill:!0,alt:e.title}):(0,a.jsx)("div",{className:"animate-pulse h-2 lg:h-4 md:h-3 bg-secondary rounded-lg"})})]})},s))})}function u(){return(0,a.jsx)("div",{className:"bg-[#F2EEE6] py-20 flex flex-row justify-center",children:(0,a.jsx)("div",{className:"lg:w-[1200px] md:w-[864px] sm:w-[608px] xs:w-[280px] lg:px-20 md:px-0 sm:px-0",children:(0,a.jsxs)("div",{className:"flex flex-col justify-between",children:[(0,a.jsx)(d.Z,{subTitle:"Postingan Terbaru",className:"text-primary"}),(0,a.jsx)(g,{props:{loadingItems:3}}),(0,a.jsx)(n(),{href:"/articles",className:"border-2 border-[#707070] text-center mt-6 py-6 text-partial font-dm-sans font-bold lg:text-xl text-base",children:"Selengkapnya"})]})})})}},1679:function(e,s,l){l.d(s,{Z:function(){return d}});var a=l(5893),t=l(8420),n=l(6159);function d(e){let{props:s}=e;if(s.date){var l;if(null===(l=s.date)||void 0===l?void 0:l.toLocaleString()){let e=(0,t.Z)(s.date.toLocaleString());return(0,a.jsx)("time",{dateTime:s.date.toLocaleString(),children:(0,a.jsx)("p",{className:s.class,children:(0,n.Z)(e,"EEEE, d LLLL yyyy")})})}}return(0,a.jsx)("p",{className:s.class,children:"-"})}},623:function(e,s,l){l.d(s,{Z:function(){return t}});var a=l(5893);function t(e){let{className:s,subTitle:l}=e;return(0,a.jsx)("h2",{className:"".concat(s," font-play-serif font-bold text-4xl lg:text-[80px] md:text-[64px] sm:text-[64px] leading-tight"),children:l})}}}]);
//# sourceMappingURL=10.52b9e0a233efe55e.js.map