(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[645,967,280,10,588,866],{4864:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/information",function(){return s(5818)}])},862:function(e,t){"use strict";t.Z={src:"/_next/static/media/favicon.5c125115.svg",height:67,width:67}},3588:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return i}});var a=s(5893),l=s(5675),r=s.n(l),n=s(862);function i(){return(0,a.jsx)("div",{className:"bg-primary py-10 flex flex-row justify-center",children:(0,a.jsx)("div",{className:"lg:w-[1200px] md:w-[864px] sm:w-[608px] xs:w-[280px] lg:px-20 md:px-0 sm:px-0",children:(0,a.jsxs)("div",{className:"flex flex-col lg:flex-row md:flex-row sm:flex-row justify-center lg:justify-between md:justify-between sm:justify-between items-center text-center lg:text-start md:text-start sm:text-start",children:[(0,a.jsxs)("div",{className:"flex flex-col lg:flex-row md:flex-row sm:flex-row items-center mb-0",children:[(0,a.jsx)(r(),{width:67,height:67,src:n.Z.src,className:"mb-0",alt:""}),(0,a.jsx)("div",{className:"flex flex-col lg:ml-6 md:ml-6 sm:ml-6",children:(0,a.jsxs)("p",{className:"text-white font-dm-sans text-base leading-6",children:["Nat.a Design | Arsitek dan Interior Desain ",(0,a.jsx)("br",{})," spesialis di bidang F&B sejak 2014."]})})]}),(0,a.jsxs)("p",{className:"text-white font-dm-sans text-base leading-6 text-end",children:["Design by Oijii Studio ",(0,a.jsx)("br",{})," Nat.a Design \xa9 2023"]})]})})})}},9010:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return h}});var a=s(5893),l=s(1664),r=s.n(l),n=s(623),i=s(5675),d=s.n(i),o=s(1679),c=s(9734);let m=e=>fetch(e).then(e=>e.json());function x(e){let{loadingItems:t}=e,s=[...Array(t)];return(0,a.jsx)("div",{className:"grid grid-cols-3 gap-6 lg:mt-20 mt-10",children:s.map((e,t)=>t%2==0?(0,a.jsxs)("article",{className:"flex flex-col",children:[(0,a.jsx)("div",{className:"animate-pulse h-2 lg:h-4 md:h-3 bg-secondary mb-3 lg:mb-6 w-1/3 rounded-lg"}),(0,a.jsx)("div",{className:"animate-pulse basis-[19%] relative w-full grow aspect-square md:h-48 bg-secondary mb-3 lg:mb-6 rounded-lg"}),(0,a.jsx)("div",{className:"animate-pulse h-3 lg:h-5 md:h-4 bg-secondary mb-3 lg:mb-6 w-1/2 rounded-lg"}),(0,a.jsx)("div",{className:"animate-pulse h-2 lg:h-4 md:h-3 bg-secondary mb-2 rounded-lg"}),(0,a.jsx)("div",{className:"animate-pulse h-2 lg:h-4 md:h-3 bg-secondary rounded-lg"})]},t):(0,a.jsxs)("article",{className:"flex flex-col",children:[(0,a.jsx)("div",{className:"animate-pulse h-2 lg:h-4 md:h-3 bg-secondary mb-3 lg:mb-6 w-1/3 rounded-lg"}),(0,a.jsx)("div",{className:"animate-pulse h-3 lg:h-5 md:h-4 bg-secondary mb-3 lg:mb-6 w-1/2 rounded-lg"}),(0,a.jsx)("div",{className:"animate-pulse h-2 lg:h-4 md:h-3 bg-secondary mb-2 rounded-lg"}),(0,a.jsx)("div",{className:"animate-pulse h-2 lg:h-4 md:h-3 bg-secondary mb-3 lg:mb-6 rounded-lg"}),(0,a.jsx)("div",{className:"animate-pulse basis-[19%] relative w-full grow aspect-square md:h-48 bg-secondary rounded-lg"})]},t))})}function p(e){let{props:t}=e,{data:s,isLoading:l,error:n}=(0,c.ZP)("".concat("https://admin.natadesign.id/api/articles/highlight"),m);return l?(0,a.jsx)(x,{loadingItems:t.loadingItems?t.loadingItems:3}):n||!s?(0,a.jsx)(a.Fragment,{}):(0,a.jsx)("div",{className:"grid grid-cols-3 gap-6 lg:mt-20 mt-10",children:s&&s.map((e,t)=>t%2==0?(0,a.jsx)("article",{children:(0,a.jsxs)(r(),{href:"/articles/".concat(encodeURIComponent(e.slug)),className:"flex flex-col",children:[(0,a.jsx)(o.Z,{props:{date:e.published_at,class:"text-partial font-dm-sans font-bold text-base mb-3 lg:mb-6"}}),(0,a.jsx)("div",{className:"mb-3 lg:mb-6 basis-[19%] relative w-full grow aspect-square",children:e.thumbnail_url?(0,a.jsx)(d(),{src:e.thumbnail_url,fill:!0,alt:e.title}):(0,a.jsx)("div",{className:"animate-pulse h-2 lg:h-4 md:h-3 bg-secondary rounded-lg"})}),(0,a.jsx)("h1",{className:"text-partial font-dm-sans font-bold text-xl mb-3 lg:mb-6 truncate",children:e.title}),(0,a.jsx)("p",{dangerouslySetInnerHTML:{__html:e.content},className:"text-partial font-dm-sans text-base leading-6 line-clamp-3"})]})},t):(0,a.jsx)("article",{children:(0,a.jsxs)(r(),{href:"/articles/".concat(encodeURIComponent(e.slug)),className:"flex flex-col",children:[(0,a.jsx)(o.Z,{props:{date:e.published_at,class:"text-partial font-dm-sans font-bold text-base mb-3 lg:mb-6"}}),(0,a.jsx)("h1",{className:"text-partial font-dm-sans font-bold text-xl mb-3 lg:mb-6 truncate",children:e.title}),(0,a.jsx)("p",{dangerouslySetInnerHTML:{__html:e.content},className:"text-partial font-dm-sans text-base leading-6 line-clamp-3 mb-3 lg:mb-6"}),(0,a.jsx)("div",{className:"basis-[19%] relative w-full grow aspect-square",children:e.thumbnail_url?(0,a.jsx)(d(),{src:e.thumbnail_url,fill:!0,alt:e.title}):(0,a.jsx)("div",{className:"animate-pulse h-2 lg:h-4 md:h-3 bg-secondary rounded-lg"})})]})},t))})}function h(e){let{props:t}=e;return(0,a.jsx)("div",{className:"bg-[#F2EEE6] py-20 flex flex-row justify-center",children:(0,a.jsx)("div",{className:"lg:w-[1200px] md:w-[864px] sm:w-[608px] xs:w-[280px] lg:px-20 md:px-0 sm:px-0",children:(0,a.jsxs)("div",{className:"flex flex-col justify-between",children:[(0,a.jsx)(n.Z,{subTitle:t.title,className:"text-primary"}),(0,a.jsx)(p,{props:{loadingItems:3}}),(0,a.jsx)(r(),{href:"/articles",className:"border-2 border-[#707070] text-center mt-6 py-6 text-partial font-dm-sans font-bold lg:text-xl text-base",children:"Selengkapnya"})]})})})}},6866:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return c}});var a=s(5893),l=s(5675),r=s.n(l),n=s(862),i=s(1664),d=s.n(i);s(7294);var o=s(5414);function c(e){let{props:t}=e;return(0,a.jsx)(o.E.div,{onClick:t.dismissModal,className:"fixed backdrop-blur-xl w-screen h-screen z-10 flex flex-col justify-center p-8",children:(0,a.jsx)("div",{className:"rounded-xl bg-primary w-full h-full shadow-lg flex flex-col xs:block",children:(0,a.jsxs)("div",{className:"flex flex-col justify-center h-full",children:[(0,a.jsx)(d(),{href:"/",className:"mx-auto h-[67px] w-[67px] relative mb-10",children:(0,a.jsx)(r(),{src:n.Z.src,fill:!0,alt:"Natadesign Logo"})}),(0,a.jsx)(d(),{className:"block py-2 pl-3 pr-3 text-center text-white lg:text-lg md:text-sm font-dm-sans border-b-2 border-transparent md:bg-transparent md:p-0 hover:border-white",href:"/",children:"Beranda"}),(0,a.jsx)(d(),{className:"block py-2 pl-3 pr-3 text-center text-white lg:text-lg md:text-sm font-dm-sans border-b-2 border-transparent md:bg-transparent md:p-0 hover:border-white",href:"/portofolio",children:"Portofolio"}),(0,a.jsx)(d(),{className:"block py-2 pl-3 pr-3 text-center text-white lg:text-lg md:text-sm font-dm-sans border-b-2 border-transparent md:bg-transparent md:p-0 hover:border-white",href:"/about",children:"Tentang"}),(0,a.jsx)(d(),{className:"block py-2 pl-3 pr-3 text-center text-white lg:text-lg md:text-sm font-dm-sans border-b-2 border-transparent md:bg-transparent md:p-0 hover:border-white",href:"/information",children:"Estimasi Harga"}),(0,a.jsx)(d(),{className:"block py-2 pl-3 pr-3 text-center text-white lg:text-lg md:text-sm font-dm-sans border-b-2 border-transparent md:bg-transparent md:p-0 hover:border-white",href:"/articles",children:"Artikel"}),(0,a.jsx)(d(),{className:"block py-2 pl-3 pr-3 text-center text-white lg:text-lg md:text-sm font-dm-sans border-b-2 border-transparent md:bg-transparent md:p-0 hover:border-white",href:"#",children:"Kontak"})]})})})}},2059:function(e,t,s){"use strict";s.d(t,{Z:function(){return o}});var a=s(5893),l=s(5675),r=s.n(l),n=s(862),i=s(1664),d=s.n(i);function o(e){let{props:t}=e;return(0,a.jsx)("nav",{className:"lg:py-[57.5px] py-5 lg:px-20 md:px-0 sm:px-0 relative ".concat(t.backgroundColor," ").concat(t.padding),children:(0,a.jsxs)("div",{className:"flex flex-wrap lg:flex-nowrap md:flex-nowrap sm:flex-nowrap items-center justify-between w-full",children:[(0,a.jsx)("div",{className:"hidden w-full lg:block md:block sm:block md:w-auto",children:(0,a.jsxs)("ul",{className:"flex pl-0 py-4 mt-4 sm:mt-0 lg:flex-row md:flex-row sm:flex-row lg:space-x-8 md:space-x-8 lg:mt-0 md:mt-0 lg:text-sm md:text-sm sm:text-sm lg:font-medium md:font-medium sm:font-medium lg:border-0 md:border-0 sm:border-0",children:[(0,a.jsx)("li",{children:(0,a.jsx)(d(),{className:"block py-2 pl-0 pr-3 text-white lg:text-lg md:text-sm font-dm-sans border-b-2 border-transparent md:bg-transparent md:p-0 hover:border-white",href:"/",tabIndex:1,children:"Beranda"})}),(0,a.jsx)("li",{children:(0,a.jsx)(d(),{className:"block py-2 pl-3 pr-3 text-white lg:text-lg md:text-sm font-dm-sans border-b-2 border-transparent md:bg-transparent md:p-0 hover:border-white",href:"/portofolio",tabIndex:2,children:"Portofolio"})}),(0,a.jsx)("li",{children:(0,a.jsx)(d(),{className:"block py-2 pl-3 pr-3 text-white lg:text-lg md:text-sm font-dm-sans border-b-2 border-transparent md:bg-transparent md:p-0 hover:border-white",href:"/about",tabIndex:3,children:"Tentang"})}),(0,a.jsx)("li",{children:(0,a.jsxs)("div",{className:"dropdown inline-block relative",children:[(0,a.jsx)("button",{tabIndex:4,className:"block py-2 pl-3 pr-3 text-white lg:text-lg md:text-sm font-dm-sans border-b-2 border-transparent md:bg-transparent md:p-0 hover:border-white",children:(0,a.jsx)("span",{className:"mr-1",children:"Informasi"})}),(0,a.jsxs)("ul",{className:"dropdown-menu absolute hidden text-gray-700 pt-1 w-44",children:[(0,a.jsx)("li",{children:(0,a.jsx)(d(),{className:"rounded-t bg-[#FFFBF2] hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap lg:text-lg md:text-sm font-dm-sans",href:"/articles",children:"Artikel"})}),(0,a.jsx)("li",{children:(0,a.jsx)(d(),{className:"rounded-t bg-[#FFFBF2] hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap lg:text-lg md:text-sm font-dm-sans",href:"/media",children:"Ulasan Media"})}),(0,a.jsx)("li",{children:(0,a.jsx)(d(),{className:"rounded-b bg-[#FFFBF2] hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap lg:text-lg md:text-sm font-dm-sans",href:"/information",children:"Estimasi Harga"})})]})]})}),(0,a.jsx)("li",{children:(0,a.jsx)(d(),{className:"block py-2 pl-3 pr-3 text-white lg:text-lg md:text-sm font-dm-sans border-b-2 border-transparent md:bg-transparent md:p-0 hover:border-white",href:"/contact",tabIndex:5,children:"Kontak"})})]})}),(0,a.jsx)(d(),{href:"/",className:"flex items-center lg:h-[67px] lg:w-[67px] md:h-[67px] md:w-[67px] sm:h-[67px] sm:w-[67px] h-10 w-10 xs:ml-1 relative",children:(0,a.jsx)(r(),{src:n.Z.src,fill:!0,alt:"Natadesign Logo",priority:!0})}),(0,a.jsxs)("button",{"data-collapse-toggle":"navbar-default",type:"button",onClick:function(){t.revealModal()},className:"inline-flex items-center ml-3 text-sm text-white rounded-lg lg:hidden md:hidden sm:hidden","aria-controls":"navbar-default","aria-expanded":"false",children:[(0,a.jsx)("span",{className:"sr-only",children:"Open main menu"}),(0,a.jsx)("svg",{className:"w-10 h-10 m-0 p-0","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"})})]})]})})}},9735:function(e,t,s){"use strict";s.d(t,{G0:function(){return l},Ue:function(){return a},uF:function(){return r}});let a={visible:{opacity:.99,transition:{duration:1.5}},hidden:{opacity:0}},l={visible:{width:"100%",transition:{duration:2,ease:"easeOut"}},hidden:{width:0}},r={visible:{height:"100%",transition:{duration:4,ease:"easeOut"}},hidden:{height:0}}},7661:function(e,t,s){"use strict";s.d(t,{Z:function(){return x}});var a=s(5893),l=s(5675),r=s.n(l),n=s(1664),i=s.n(n),d=s(9734),o=s(9690);let c=e=>fetch(e).then(e=>e.json());function m(e){let{loadingItems:t}=e,s=[...Array(t)];return(0,a.jsx)("div",{className:"grid grid-cols-3 w-full gap-6 lg:mt-20 mt-10",children:s.map((e,t)=>(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsxs)("div",{className:"flex flex-row justify-between items-center mb-6",children:[(0,a.jsx)("h1",{className:"animate-pulse bg-secondary h-6 w-1/5 rounded-lg"}),(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"text-primary",width:"25.144",height:"14.382",viewBox:"0 0 25.144 14.382",children:(0,a.jsxs)("g",{id:"Component_1_63","data-name":"Component 1 – 63",transform:"translate(0 0.354)",children:[(0,a.jsx)("path",{id:"Path_19","data-name":"Path 19",d:"M0,6.837,6.837,0l6.837,6.837",transform:"translate(24.437) rotate(90)",fill:"none",stroke:"#404040",strokeWidth:"1"}),(0,a.jsx)("path",{id:"Path_20","data-name":"Path 20",d:"M1208.8,3931.5h-24.437",transform:"translate(-1184.364 -3924.663)",fill:"none",stroke:"#404040",strokeWidth:1})]})})]}),(0,a.jsx)("div",{className:"h-4 mb-6 w-full animate-pulse bg-secondary rounded-lg"}),(0,a.jsx)("div",{className:"basis-[19%] relative w-full grow aspect-square self-center animate-pulse bg-secondary rounded-lg"})]},t))})}function x(e){let{props:t}=e,{data:s,isLoading:l,error:n}=(0,d.ZP)(t.api,c);return l?(0,a.jsx)(m,{loadingItems:(null==t?void 0:t.loadingItems)?null==t?void 0:t.loadingItems:3}):n||!s?(0,a.jsx)(a.Fragment,{}):(0,a.jsxs)("div",{className:"grid grid-cols-3 w-full gap-6 lg:mt-20 mt-10",children:[s.map((e,t)=>(0,a.jsx)(i(),{href:{pathname:"/portofolio/[slug]",query:{slug:e.slug}},children:(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsxs)("div",{className:"flex flex-row justify-between items-center mb-6",children:[(0,a.jsx)("h1",{className:"lg:text-2xl md:text-xl text-partial font-dm-sans font-bold",children:e.title}),(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"text-partial",width:"25.144",height:"14.382",viewBox:"0 0 25.144 14.382",children:(0,a.jsxs)("g",{id:"Component_1_63","data-name":"Component 1 – 63",transform:"translate(0 0.354)",children:[(0,a.jsx)("path",{id:"Path_19","data-name":"Path 19",d:"M0,6.837,6.837,0l6.837,6.837",transform:"translate(24.437) rotate(90)",fill:"none",stroke:"#404040",strokeWidth:"1"}),(0,a.jsx)("path",{id:"Path_20","data-name":"Path 20",d:"M1208.8,3931.5h-24.437",transform:"translate(-1184.364 -3924.663)",fill:"none",stroke:"#404040",strokeWidth:1})]})})]}),(0,a.jsx)("div",{className:"hidden flex-row justify-between text-partial text-base font-dm-sans mb-6 lg:flex md:flex sm:flex",children:(0,a.jsx)("p",{children:e.alt})}),(0,a.jsx)("div",{className:"basis-[19%] relative w-full grow aspect-square self-center",children:(0,a.jsx)(r(),{fill:!0,src:"".concat("https://admin.natadesign.id/"+e.image),alt:e.alt?e.alt:""})})]})},t)),t.paginate&&s?(0,a.jsx)(o.Z,{items:9,pageSize:9,currentPage:1,pathName:"/articles"}):(0,a.jsx)(a.Fragment,{})]})}},3967:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return i}});var a=s(5893);s(7294);var l=s(9008),r=s.n(l),n=s(862);function i(e){let{props:t}=e;return(0,a.jsxs)(r(),{children:[(0,a.jsx)("title",{children:(null==t?void 0:t.page_title)?null==t?void 0:t.page_title:"Nat.A Design"}),(0,a.jsx)("link",{rel:"icon",type:"image/svg+xml",href:n.Z.src}),(0,a.jsx)("link",{rel:"apple-touch-icon",href:n.Z.src}),(0,a.jsx)("meta",{name:"description",content:null==t?void 0:t.meta_description}),(0,a.jsx)("meta",{name:"keywords",content:null==t?void 0:t.meta_keywords}),(0,a.jsx)("meta",{name:"author",content:null==t?void 0:t.meta_authors}),(0,a.jsx)("meta",{property:"og:title",content:null==t?void 0:t.og_title}),(0,a.jsx)("meta",{property:"og:description",content:null==t?void 0:t.og_description}),(0,a.jsx)("meta",{property:"og:image",content:"".concat("https://admin.natadesign.id/"+(null==t?void 0:t.og_image_url))}),(0,a.jsx)("meta",{property:"og:url",content:null==t?void 0:t.og_url}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{name:"theme-color",content:"#10403C"})]})}},1679:function(e,t,s){"use strict";s.d(t,{Z:function(){return n}});var a=s(5893),l=s(8420),r=s(6159);function n(e){let{props:t}=e;if(t.date){var s;if(null===(s=t.date)||void 0===s?void 0:s.toLocaleString()){let e=(0,l.Z)(t.date.toLocaleString());return(0,a.jsx)("time",{dateTime:t.date.toLocaleString(),children:(0,a.jsx)("p",{className:t.class,children:(0,r.Z)(e,"EEEE, d LLLL yyyy")})})}}return(0,a.jsx)("p",{className:t.class,children:"-"})}},9696:function(e,t,s){"use strict";s.d(t,{Z:function(){return n}});var a=s(5893),l=s(5414),r=s(9735);function n(e){let{className:t}=e;return(0,a.jsx)(l.E.div,{variants:r.G0,initial:"hidden",whileInView:"visible",viewport:{once:!0},className:"w-full",children:(0,a.jsx)("hr",{className:"h-0.5 p-0 m-0 bg-primary w-full ".concat(t)})})}},9690:function(e,t,s){"use strict";s.d(t,{Z:function(){return n}});var a=s(5893),l=s(1664),r=s.n(l);function n(e){let{items:t,pageSize:s,currentPage:l,pathName:n}=e,i=Array.from({length:Math.ceil(t/s)},(e,t)=>t+1);return(0,a.jsx)("div",{className:"col-span-3 flex flex-row justify-center gap-2",children:i.map(e=>(0,a.jsx)(r(),{scroll:!1,className:"font-dm-sans font-bold border-2 border-partial px-2 rounded-sm ".concat(e==l?"bg-primary text-white":"bg-[#FFFBF2] text-primary"),href:{pathname:n,query:{page:e}},children:e},e))})}},623:function(e,t,s){"use strict";s.d(t,{Z:function(){return l}});var a=s(5893);function l(e){let{className:t,subTitle:s}=e;return(0,a.jsx)("h2",{className:"".concat(t," font-play-serif font-bold text-4xl lg:text-[80px] md:text-[64px] sm:text-[64px] leading-tight"),children:s})}},7280:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return d}});var a=s(5893),l=s(1664),r=s.n(l),n=s(7661),i=s(623);function d(e){let{props:t}=e;return(0,a.jsx)("div",{className:"bg-[#FFFBF2] w-full flex flex-row justify-center ".concat(t.paddingTop," ").concat(t.paddingBot),children:(0,a.jsx)("div",{className:"lg:w-[1200px] md:w-[864px] sm:w-[608px] xs:w-[280px] lg:px-20 md:px-0 sm:px-0",children:(0,a.jsxs)("div",{className:"grid grid-col-1",children:[(0,a.jsx)(i.Z,{subTitle:"Project Terbaru",className:"".concat(t.titleClass)}),(0,a.jsx)(n.Z,{props:{api:"".concat("https://admin.natadesign.id/api/albums/highlight")}}),(0,a.jsx)(r(),{href:"/portofolio",className:"".concat(t.showButton?"":"hidden"," border-2 border-[#707070] text-center mt-6 py-6 text-partial font-dm-sans font-bold lg:text-xl text-base"),children:"Selengkapnya"})]})})})}},5818:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return b}});var a=s(5893),l=s(3967),r=s(9319),n=s(9696),i=s(623);function d(){return(0,a.jsx)("div",{className:"w-full flex flex-row justify-center bg-[#FFFBF2]",children:(0,a.jsx)("div",{className:"lg:w-[1200px] md:w-[864px] sm:w-[608px] xs:w-[280px] lg:px-20 md:px-0 sm:px-0",children:(0,a.jsxs)("div",{className:"grid grid-cols-1 grid-flow-row",children:[(0,a.jsx)("div",{className:"flex flex-row justify-between items-center pt-14",children:(0,a.jsx)(i.Z,{className:"uppercase text-primary",subTitle:"Estimasi Harga"})}),(0,a.jsxs)("form",{className:"flex flex-col gap-6 pt-10",children:[(0,a.jsx)(n.Z,{}),(0,a.jsx)(r.Z,{props:{id:"name",label:"Nama",placeHolder:"Masukkan Nama Lengkap Anda"}}),(0,a.jsx)(r.Z,{props:{id:"phone",label:"Nomor HP / WhatsApp",placeHolder:"0812 3456 7890"}}),(0,a.jsx)(r.Z,{props:{id:"email",label:"Email",placeHolder:"emailanda@gmail.com"}}),(0,a.jsx)(r.Z,{props:{id:"type",label:"Jenis",placeHolder:"Caf\xe9 / Restoran / Coffee Shop / dll"}}),(0,a.jsx)(r.Z,{props:{id:"size",label:"Ukuran",placeHolder:"Dalam satuan m2"}}),(0,a.jsx)(r.Z,{props:{id:"location",label:"Lokasi",placeHolder:"Nama Kota"}}),(0,a.jsx)(r.Z,{props:{id:"job",label:"Pengerjaan",placeHolder:"Konstruksi atau Renovasi"}}),(0,a.jsx)(r.Z,{props:{id:"time",label:"Estimasi Waktu",placeHolder:"3 Bulan"}}),(0,a.jsx)(r.Z,{props:{id:"additional_info",label:"Informasi Tambahan",isTextArea:!0,placeHolder:"Untuk mempercepat proses estimasi harga, mohon berikan rincian deskripsi proyek Anda secara detail dan lengkap. Terima kasih."}}),(0,a.jsx)("div",{className:"flex flex-row justify-between",children:(0,a.jsx)("button",{className:"border-2 border-[#707070] text-center my-6 py-6 px-10 text-partial font-dm-sans font-bold lg:text-xl text-base",children:"Kirim Pesan"})}),(0,a.jsx)(n.Z,{})]})]})})})}var o=s(2059),c=s(7604),m=s(3588),x=s(7280),p=s(9010),h=s(6866),f=s(7294),u=s(9734);let g=e=>fetch(e).then(e=>e.json());function b(){let[e,t]=(0,f.useState)(!1),{data:s,isLoading:r,error:n}=(0,u.ZP)("".concat("https://admin.natadesign.id/api/seo/information"),g);return r||n||!s?(0,a.jsx)(a.Fragment,{}):(0,a.jsxs)("div",{className:"flex flex-col justify-start",children:[(0,a.jsx)(l.default,{props:s}),e?(0,a.jsx)(h.default,{props:{dismissModal:function(){t(!1)}}}):null,(0,a.jsx)("div",{className:"w-full flex flex-row justify-center bg-primary",children:(0,a.jsx)("div",{className:"lg:w-[1200px] md:w-[864px] sm:w-[608px] xs:w-[280px] flex flex-col justify-between",children:(0,a.jsx)(o.Z,{props:{backgroundColor:"bg-primary",revealModal:function(){t(!e)}}})})}),(0,a.jsx)(d,{}),(0,a.jsx)(x.default,{props:{titleClass:"text-primary text-start leading-none",showButton:!0,paddingTop:"lg:pt-10 md:pt-10 sm:pt-10 xs:pt-10",paddingBot:"lg:pb-20 md:pb-20 sm:pb-20 xs:pb-20"}}),(0,a.jsx)(p.default,{props:{title:"Postingan Terbaru"}}),(0,a.jsx)(c.default,{}),(0,a.jsx)(m.default,{})]})}},9008:function(e,t,s){e.exports=s(3121)}},function(e){e.O(0,[948,414,664,603,358,172,604,774,888,179],function(){return e(e.s=4864)}),_N_E=e.O()}]);
//# sourceMappingURL=information-92b920e66f7210ad.js.map