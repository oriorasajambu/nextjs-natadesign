"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[439,280],{9010:function(e,a,s){s.r(a),s.d(a,{default:function(){return h}});var l=s(5893),t=s(1664),n=s.n(t),r=s(623),d=s(5675),i=s.n(d),m=s(1679),c=s(9734);let o=e=>fetch(e).then(e=>e.json());function x(e){let{loadingItems:a}=e,s=[...Array(a)];return(0,l.jsx)("div",{className:"grid grid-cols-3 gap-6 lg:mt-20 mt-10",children:s.map((e,a)=>a%2==0?(0,l.jsxs)("article",{className:"flex flex-col",children:[(0,l.jsx)("div",{className:"animate-pulse h-2 lg:h-4 md:h-3 bg-secondary mb-3 lg:mb-6 w-1/3 rounded-lg"}),(0,l.jsx)("div",{className:"animate-pulse basis-[19%] relative w-full grow aspect-square md:h-48 bg-secondary mb-3 lg:mb-6 rounded-lg"}),(0,l.jsx)("div",{className:"animate-pulse h-3 lg:h-5 md:h-4 bg-secondary mb-3 lg:mb-6 w-1/2 rounded-lg"}),(0,l.jsx)("div",{className:"animate-pulse h-2 lg:h-4 md:h-3 bg-secondary mb-2 rounded-lg"}),(0,l.jsx)("div",{className:"animate-pulse h-2 lg:h-4 md:h-3 bg-secondary rounded-lg"})]},a):(0,l.jsxs)("article",{className:"flex flex-col",children:[(0,l.jsx)("div",{className:"animate-pulse h-2 lg:h-4 md:h-3 bg-secondary mb-3 lg:mb-6 w-1/3 rounded-lg"}),(0,l.jsx)("div",{className:"animate-pulse h-3 lg:h-5 md:h-4 bg-secondary mb-3 lg:mb-6 w-1/2 rounded-lg"}),(0,l.jsx)("div",{className:"animate-pulse h-2 lg:h-4 md:h-3 bg-secondary mb-2 rounded-lg"}),(0,l.jsx)("div",{className:"animate-pulse h-2 lg:h-4 md:h-3 bg-secondary mb-3 lg:mb-6 rounded-lg"}),(0,l.jsx)("div",{className:"animate-pulse basis-[19%] relative w-full grow aspect-square md:h-48 bg-secondary rounded-lg"})]},a))})}function g(e){let{props:a}=e,{data:s,isLoading:t,error:r}=(0,c.ZP)("".concat("https://admin.natadesign.id/api/articles/highlight"),o);return t?(0,l.jsx)(x,{loadingItems:a.loadingItems?a.loadingItems:3}):r||!s?(0,l.jsx)(l.Fragment,{}):(0,l.jsx)("div",{className:"grid grid-cols-3 gap-6 lg:mt-20 mt-10",children:s&&s.map((e,a)=>a%2==0?(0,l.jsx)("article",{children:(0,l.jsxs)(n(),{href:"/articles/".concat(encodeURIComponent(e.slug)),className:"flex flex-col",children:[(0,l.jsx)(m.Z,{props:{date:e.published_at,class:"text-partial font-dm-sans font-bold text-base mb-3 lg:mb-6"}}),(0,l.jsx)("div",{className:"mb-3 lg:mb-6 basis-[19%] relative w-full grow aspect-square",children:e.thumbnail_url?(0,l.jsx)(i(),{src:e.thumbnail_url,fill:!0,alt:e.title}):(0,l.jsx)("div",{className:"animate-pulse h-2 lg:h-4 md:h-3 bg-secondary rounded-lg"})}),(0,l.jsx)("h1",{className:"text-partial font-dm-sans font-bold text-xl mb-3 lg:mb-6 truncate",children:e.title}),(0,l.jsx)("p",{dangerouslySetInnerHTML:{__html:e.content},className:"text-partial font-dm-sans text-base leading-6 line-clamp-3"})]})},a):(0,l.jsx)("article",{children:(0,l.jsxs)(n(),{href:"/articles/".concat(encodeURIComponent(e.slug)),className:"flex flex-col",children:[(0,l.jsx)(m.Z,{props:{date:e.published_at,class:"text-partial font-dm-sans font-bold text-base mb-3 lg:mb-6"}}),(0,l.jsx)("h1",{className:"text-partial font-dm-sans font-bold text-xl mb-3 lg:mb-6 truncate",children:e.title}),(0,l.jsx)("p",{dangerouslySetInnerHTML:{__html:e.content},className:"text-partial font-dm-sans text-base leading-6 line-clamp-3 mb-3 lg:mb-6"}),(0,l.jsx)("div",{className:"basis-[19%] relative w-full grow aspect-square",children:e.thumbnail_url?(0,l.jsx)(i(),{src:e.thumbnail_url,fill:!0,alt:e.title}):(0,l.jsx)("div",{className:"animate-pulse h-2 lg:h-4 md:h-3 bg-secondary rounded-lg"})})]})},a))})}function h(e){let{props:a}=e;return(0,l.jsx)("div",{className:"bg-[#F2EEE6] py-20 flex flex-row justify-center",children:(0,l.jsx)("div",{className:"lg:w-[1200px] md:w-[864px] sm:w-[608px] xs:w-[280px] lg:px-20 md:px-0 sm:px-0",children:(0,l.jsxs)("div",{className:"flex flex-col justify-between",children:[(0,l.jsx)(r.Z,{subTitle:a.title,className:"text-primary"}),(0,l.jsx)(g,{props:{loadingItems:3}}),(0,l.jsx)(n(),{href:"/articles",className:"border-2 border-[#707070] text-center mt-6 py-6 text-partial font-dm-sans font-bold lg:text-xl text-base",children:"Selengkapnya"})]})})})}},7661:function(e,a,s){s.d(a,{Z:function(){return x}});var l=s(5893),t=s(5675),n=s.n(t),r=s(1664),d=s.n(r),i=s(9734),m=s(9690);let c=e=>fetch(e).then(e=>e.json());function o(e){let{loadingItems:a}=e,s=[...Array(a)];return(0,l.jsx)("div",{className:"grid grid-cols-3 w-full gap-6 lg:mt-20 mt-10",children:s.map((e,a)=>(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsxs)("div",{className:"flex flex-row justify-between items-center mb-6",children:[(0,l.jsx)("h1",{className:"animate-pulse bg-secondary h-6 w-1/5 rounded-lg"}),(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"text-primary",width:"25.144",height:"14.382",viewBox:"0 0 25.144 14.382",children:(0,l.jsxs)("g",{id:"Component_1_63","data-name":"Component 1 – 63",transform:"translate(0 0.354)",children:[(0,l.jsx)("path",{id:"Path_19","data-name":"Path 19",d:"M0,6.837,6.837,0l6.837,6.837",transform:"translate(24.437) rotate(90)",fill:"none",stroke:"#404040",strokeWidth:"1"}),(0,l.jsx)("path",{id:"Path_20","data-name":"Path 20",d:"M1208.8,3931.5h-24.437",transform:"translate(-1184.364 -3924.663)",fill:"none",stroke:"#404040",strokeWidth:1})]})})]}),(0,l.jsx)("div",{className:"h-4 mb-6 w-full animate-pulse bg-secondary rounded-lg"}),(0,l.jsx)("div",{className:"basis-[19%] relative w-full grow aspect-square self-center animate-pulse bg-secondary rounded-lg"})]},a))})}function x(e){let{props:a}=e,{data:s,isLoading:t,error:r}=(0,i.ZP)(a.api,c);return t?(0,l.jsx)(o,{loadingItems:(null==a?void 0:a.loadingItems)?null==a?void 0:a.loadingItems:3}):r||!s?(0,l.jsx)(l.Fragment,{}):(0,l.jsxs)("div",{className:"grid grid-cols-3 w-full gap-6 lg:mt-20 mt-10",children:[s.map((e,a)=>(0,l.jsx)(d(),{href:{pathname:"/portofolio/[slug]",query:{slug:e.slug}},children:(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsxs)("div",{className:"flex flex-row justify-between items-center mb-6",children:[(0,l.jsx)("h1",{className:"lg:text-2xl md:text-xl text-partial font-dm-sans font-bold",children:e.title}),(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"text-partial",width:"25.144",height:"14.382",viewBox:"0 0 25.144 14.382",children:(0,l.jsxs)("g",{id:"Component_1_63","data-name":"Component 1 – 63",transform:"translate(0 0.354)",children:[(0,l.jsx)("path",{id:"Path_19","data-name":"Path 19",d:"M0,6.837,6.837,0l6.837,6.837",transform:"translate(24.437) rotate(90)",fill:"none",stroke:"#404040",strokeWidth:"1"}),(0,l.jsx)("path",{id:"Path_20","data-name":"Path 20",d:"M1208.8,3931.5h-24.437",transform:"translate(-1184.364 -3924.663)",fill:"none",stroke:"#404040",strokeWidth:1})]})})]}),(0,l.jsx)("div",{className:"hidden flex-row justify-between text-partial text-base font-dm-sans mb-6 lg:flex md:flex sm:flex",children:(0,l.jsx)("p",{children:e.alt})}),(0,l.jsx)("div",{className:"basis-[19%] relative w-full grow aspect-square self-center",children:(0,l.jsx)(n(),{fill:!0,src:"".concat("https://admin.natadesign.id/"+e.image),alt:e.alt?e.alt:""})})]})},a)),a.paginate&&s?(0,l.jsx)(m.Z,{items:9,pageSize:9,currentPage:1,pathName:"/articles"}):(0,l.jsx)(l.Fragment,{})]})}},7082:function(e,a,s){s.d(a,{Z:function(){return h}});var l=s(5893),t=s(5675),n=s.n(t),r=s(1679),d=s(9690),i=s(1163),m=s(1664),c=s.n(m),o=s(9734);let x=e=>fetch(e).then(e=>e.json());function g(e){let{loadingItems:a}=e,s=[...Array(a)];return(0,l.jsx)("div",{className:"grid grid-cols-3 gap-6 lg:mt-20 mt-10",children:s.map((e,a)=>a%2==0?(0,l.jsxs)("article",{className:"flex flex-col",children:[(0,l.jsx)("div",{className:"animate-pulse h-2 lg:h-4 md:h-3 bg-secondary mb-3 lg:mb-6 w-1/3 rounded-lg"}),(0,l.jsx)("div",{className:"animate-pulse basis-[19%] relative w-full grow aspect-square md:h-48 bg-secondary mb-3 lg:mb-6 rounded-lg"}),(0,l.jsx)("div",{className:"animate-pulse h-3 lg:h-5 md:h-4 bg-secondary mb-3 lg:mb-6 w-1/2 rounded-lg"}),(0,l.jsx)("div",{className:"animate-pulse h-2 lg:h-4 md:h-3 bg-secondary mb-2 rounded-lg"}),(0,l.jsx)("div",{className:"animate-pulse h-2 lg:h-4 md:h-3 bg-secondary rounded-lg"})]},a):(0,l.jsxs)("article",{className:"flex flex-col",children:[(0,l.jsx)("div",{className:"animate-pulse h-2 lg:h-4 md:h-3 bg-secondary mb-3 lg:mb-6 w-1/3 rounded-lg"}),(0,l.jsx)("div",{className:"animate-pulse h-3 lg:h-5 md:h-4 bg-secondary mb-3 lg:mb-6 w-1/2 rounded-lg"}),(0,l.jsx)("div",{className:"animate-pulse h-2 lg:h-4 md:h-3 bg-secondary mb-2 rounded-lg"}),(0,l.jsx)("div",{className:"animate-pulse h-2 lg:h-4 md:h-3 bg-secondary mb-3 lg:mb-6 rounded-lg"}),(0,l.jsx)("div",{className:"animate-pulse basis-[19%] relative w-full grow aspect-square md:h-48 bg-secondary rounded-lg"})]},a))})}function h(e){let{props:a}=e,{query:{page:s}}=(0,i.useRouter)(),{data:t,isLoading:m,error:h}=(0,o.ZP)(a.api+(s?"?page=".concat(s):""),x);return m?(0,l.jsx)(g,{loadingItems:(null==a?void 0:a.loadingItems)?null==a?void 0:a.loadingItems:15}):h||!t||!t.data||t.data.length<1?(0,l.jsx)(l.Fragment,{}):(0,l.jsxs)("div",{className:"grid grid-cols-3 gap-6 lg:mt-20 mt-10",children:[t&&t.data.map((e,a)=>a%2==0?(0,l.jsx)("article",{children:(0,l.jsxs)(c(),{href:"/articles/".concat(encodeURIComponent(e.slug)),className:"flex flex-col",children:[(0,l.jsx)(r.Z,{props:{date:e.published_at,class:"text-partial font-dm-sans font-bold text-base mb-3 lg:mb-6"}}),(0,l.jsx)("div",{className:"mb-3 lg:mb-6 basis-[19%] relative w-full grow aspect-square",children:e.thumbnail_url?(0,l.jsx)(n(),{src:e.thumbnail_url,fill:!0,alt:e.title}):(0,l.jsx)("div",{className:"animate-pulse h-2 lg:h-4 md:h-3 bg-secondary rounded-lg"})}),(0,l.jsx)("h1",{className:"text-partial font-dm-sans font-bold text-xl mb-3 lg:mb-6 truncate",children:e.title}),(0,l.jsx)("p",{dangerouslySetInnerHTML:{__html:e.content},className:"text-secondary font-dm-sans text-base leading-6 line-clamp-3"})]})},a):(0,l.jsx)("article",{children:(0,l.jsxs)(c(),{href:"/articles/".concat(encodeURIComponent(e.slug)),className:"flex flex-col",children:[(0,l.jsx)(r.Z,{props:{date:e.published_at,class:"text-partial font-dm-sans font-bold text-base mb-3 lg:mb-6"}}),(0,l.jsx)("h1",{className:"text-partial font-dm-sans font-bold text-xl mb-3 lg:mb-6 truncate",children:e.title}),(0,l.jsx)("p",{dangerouslySetInnerHTML:{__html:e.content},className:"text-secondary font-dm-sans text-base leading-6 line-clamp-3 mb-3 lg:mb-6"}),(0,l.jsx)("div",{className:"basis-[19%] relative w-full grow aspect-square",children:e.thumbnail_url?(0,l.jsx)(n(),{src:e.thumbnail_url,fill:!0,alt:e.title}):(0,l.jsx)("div",{className:"animate-pulse h-2 lg:h-4 md:h-3 bg-secondary rounded-lg"})})]})},a)),a.paginate&&t?(0,l.jsx)(d.Z,{items:t.total,pageSize:t.per_page,currentPage:t.current_page,pathName:"/articles"}):(0,l.jsx)(l.Fragment,{})]})}},9690:function(e,a,s){s.d(a,{Z:function(){return r}});var l=s(5893),t=s(1664),n=s.n(t);function r(e){let{items:a,pageSize:s,currentPage:t,pathName:r}=e,d=Array.from({length:Math.ceil(a/s)},(e,a)=>a+1);return(0,l.jsx)("div",{className:"col-span-3 flex flex-row justify-center gap-2",children:d.map(e=>(0,l.jsx)(n(),{scroll:!1,className:"font-dm-sans font-bold border-2 border-partial px-2 rounded-sm ".concat(e==t?"bg-primary text-white":"bg-[#FFFBF2] text-primary"),href:{pathname:r,query:{page:e}},children:e},e))})}},623:function(e,a,s){s.d(a,{Z:function(){return t}});var l=s(5893);function t(e){let{className:a,subTitle:s}=e;return(0,l.jsx)("h2",{className:"".concat(a," font-play-serif font-bold text-4xl lg:text-[80px] md:text-[64px] sm:text-[64px] leading-tight"),children:s})}},7280:function(e,a,s){s.r(a),s.d(a,{default:function(){return i}});var l=s(5893),t=s(1664),n=s.n(t),r=s(7661),d=s(623);function i(e){let{props:a}=e;return(0,l.jsx)("div",{className:"bg-[#FFFBF2] w-full flex flex-row justify-center ".concat(a.paddingTop," ").concat(a.paddingBot),children:(0,l.jsx)("div",{className:"lg:w-[1200px] md:w-[864px] sm:w-[608px] xs:w-[280px] lg:px-20 md:px-0 sm:px-0",children:(0,l.jsxs)("div",{className:"grid grid-col-1",children:[(0,l.jsx)(d.Z,{subTitle:"Project Terbaru",className:"".concat(a.titleClass)}),(0,l.jsx)(r.Z,{props:{api:"".concat("https://admin.natadesign.id/api/albums/highlight")}}),(0,l.jsx)(n(),{href:"/portofolio",className:"".concat(a.showButton?"":"hidden"," border-2 border-[#707070] text-center mt-6 py-6 text-partial font-dm-sans font-bold lg:text-xl text-base"),children:"Selengkapnya"})]})})})}}}]);
//# sourceMappingURL=439-2603b1051642be2d.js.map