"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2293],{2293:function(e,a,t){t.r(a),t.d(a,{default:function(){return d}});var s=t(5893),n=t(5152),l=t.n(n),i=t(7294);let r=l()(()=>t.e(9319).then(t.bind(t,9319)),{loadableGenerated:{webpack:()=>[9319]},ssr:!1}),p=l()(()=>Promise.all([t.e(5414),t.e(4341)]).then(t.bind(t,9696)),{loadableGenerated:{webpack:()=>[9696]},ssr:!1}),o=l()(()=>t.e(623).then(t.bind(t,623)),{loadableGenerated:{webpack:()=>[623]},ssr:!1});function d(){let[e,a]=(0,i.useState)(""),[t,n]=(0,i.useState)(""),[l,d]=(0,i.useState)(""),[c,x]=(0,i.useState)(""),[m,u]=(0,i.useState)(""),[b,f]=(0,i.useState)(""),[h,g]=(0,i.useState)(""),[y,j]=(0,i.useState)(""),[w,k]=(0,i.useState)(""),[N,S]=(0,i.useState)(),[C,v]=(0,i.useState)(!1),L=(0,i.useRef)(null),H=async a=>{v(!0),S(null),a.preventDefault();let s=new URLSearchParams;s.append("name",e),s.append("phone",t),s.append("email",l),s.append("type",c),s.append("size",m),s.append("location",b),s.append("job",h),s.append("time",y),s.append("info",w),fetch("".concat("https://admin.natadesign.id/api/inquiryform"),{body:s.toString(),method:"post",headers:{"content-type":"application/x-www-form-urlencoded"}}).then(async e=>{var a;null===(a=L.current)||void 0===a||a.reset(),v(!1),S(await e.json())})};return(0,s.jsx)("div",{className:"w-full flex flex-row justify-center bg-[#FFFBF2]",children:(0,s.jsx)("div",{className:"lg:w-[1200px] md:w-[864px] sm:w-[608px] xs:w-[280px] lg:px-20 md:px-0 sm:px-0",children:(0,s.jsxs)("div",{className:"grid grid-cols-1 grid-flow-row",children:[(0,s.jsx)("div",{className:"flex flex-row justify-between items-center pt-14",children:(0,s.jsx)(o,{className:"uppercase text-primary",subTitle:"Estimasi Harga"})}),(0,s.jsxs)("form",{ref:L,onSubmit:H,className:"flex flex-col gap-6 pt-10",children:[(0,s.jsx)(p,{}),(0,s.jsx)(r,{props:{type:"text",id:"name",label:"Nama",placeHolder:"Masukkan Nama Lengkap Anda",onChangeListener:a}}),(0,s.jsx)(r,{props:{type:"text",id:"phone",label:"Nomor HP / WhatsApp",placeHolder:"0812 3456 7890",onChangeListener:n}}),(0,s.jsx)(r,{props:{type:"text",id:"email",label:"Email",placeHolder:"emailanda@gmail.com",onChangeListener:d}}),(0,s.jsx)(r,{props:{type:"text",id:"type",label:"Jenis",placeHolder:"Caf\xe9 / Restoran / Coffee Shop / dll",onChangeListener:x}}),(0,s.jsx)(r,{props:{type:"text",id:"size",label:"Ukuran",placeHolder:"Dalam satuan m2",onChangeListener:u}}),(0,s.jsx)(r,{props:{type:"text",id:"location",label:"Lokasi",placeHolder:"Nama Kota",onChangeListener:f}}),(0,s.jsx)(r,{props:{type:"text",id:"job",label:"Pengerjaan",placeHolder:"Konstruksi atau Renovasi",onChangeListener:g}}),(0,s.jsx)(r,{props:{type:"text",id:"time",label:"Estimasi Waktu",placeHolder:"3 Bulan",onChangeListener:j}}),(0,s.jsx)(r,{props:{type:"text",id:"additional_info",label:"Informasi Tambahan",isTextArea:!0,placeHolder:"Untuk mempercepat proses estimasi harga, mohon berikan rincian deskripsi proyek Anda secara detail dan lengkap. Terima kasih.",onChangeListener:k}}),C?(0,s.jsx)("div",{className:"flex flex-row justify-between",children:(0,s.jsx)("button",{disabled:C,type:"reset",className:"w-full animate-pulse bg-secondary my-6 py-6 px-10 font-dm-sans font-bold lg:text-xl text-base",children:"Sedang Mengirim.."})}):(0,s.jsx)("div",{className:"flex flex-row justify-between",children:(0,s.jsx)("button",{disabled:C,type:"submit",className:"border-2 border-[#707070] text-center my-6 py-6 px-10 text-partial font-dm-sans font-bold lg:text-xl text-base",children:(null==N?void 0:N.success)?"Terimakasih, Tunggu balasan dari kami ya..":"Kirim"})}),(0,s.jsx)(p,{})]})]})})})}}}]);
//# sourceMappingURL=2293.ed3b01e04e49bee5.js.map