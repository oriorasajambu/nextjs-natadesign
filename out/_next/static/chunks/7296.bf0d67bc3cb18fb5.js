"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7296],{3968:function(e,a,t){t.r(a),t.d(a,{default:function(){return d}});var n=t(5893),s=t(5152),l=t.n(s),i=t(7294);let r=l()(()=>t.e(9319).then(t.bind(t,9319)),{loadableGenerated:{webpack:()=>[9319]},ssr:!1});function d(){let[e,a]=(0,i.useState)(""),[t,s]=(0,i.useState)(""),[l,d]=(0,i.useState)(""),[o,p]=(0,i.useState)(),[u,c]=(0,i.useState)(!1),m=(0,i.useRef)(null),b=async a=>{c(!0),p(null),a.preventDefault();let n=new URLSearchParams;n.append("name",e),n.append("email",t),n.append("question",l),fetch("".concat("https://admin.natadesign.id/api/contactform"),{body:n.toString(),method:"post",headers:{"content-type":"application/x-www-form-urlencoded"}}).then(async e=>{var a;null===(a=m.current)||void 0===a||a.reset(),c(!1),p(await e.json())})};return(0,n.jsxs)("form",{ref:m,onSubmit:b,className:"flex-1 grid grid-cols-1 gap-6",children:[(0,n.jsx)(r,{props:{type:"text",id:"name",label:"Nama lengkap",placeHolder:"Nama lengkap",onChangeListener:a}}),(0,n.jsx)(r,{props:{type:"email",id:"email",label:"Email",placeHolder:"Alamat Email",onChangeListener:s}}),(0,n.jsx)(r,{props:{type:"text",id:"question",label:"Pertanyaan",isTextArea:!0,placeHolder:"Apa ada pertanyaan yang ingin Anda tanyakan? Tim Terbaik kami siap untuk membantu.",onChangeListener:d}}),u?(0,n.jsx)("div",{className:"flex flex-row justify-between",children:(0,n.jsx)("button",{disabled:u,type:"reset",className:"w-full animate-pulse bg-secondary my-6 py-6 px-10 font-dm-sans font-bold lg:text-xl text-base",children:"Sedang Mengirim.."})}):(0,n.jsx)("div",{className:"flex flex-row justify-between",children:(0,n.jsx)("button",{disabled:u,type:"submit",className:"border-2 border-[#707070] text-center my-6 py-6 px-10 text-partial font-dm-sans font-bold lg:text-xl text-base",children:(null==o?void 0:o.success)?"Terimakasih, Tunggu balasan dari kami ya..":"Kirim"})})]})}}}]);
//# sourceMappingURL=7296.bf0d67bc3cb18fb5.js.map