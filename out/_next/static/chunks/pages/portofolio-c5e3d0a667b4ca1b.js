(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6612],{6709:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/portofolio",function(){return l(7542)}])},4564:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.suspense=function(){let e=Error(a.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=a.NEXT_DYNAMIC_NO_SSR_CODE,e},t.NoSSR=function(e){let{children:t}=e;return t},(0,l(2648).Z)(l(7294));var a=l(2983)},7645:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let l=s.default,r={loading:e=>{let{error:t,isLoading:l,pastDelay:a}=e;return null}};e instanceof Promise?r.loader=()=>e:"function"==typeof e?r.loader=e:"object"==typeof e&&(r=a({},r,e)),r=a({},r,t);let i=r.loader,o=()=>null!=i?i().then(n):Promise.resolve(n(()=>null));return r.loadableGenerated&&delete(r=a({},r,r.loadableGenerated)).loadableGenerated,"boolean"!=typeof r.ssr||r.ssr||(delete r.webpack,delete r.modules),l(a({},r,{loader:o}))};var a=l(6495).Z,r=l(2648).Z;r(l(7294));var s=r(l(4588));function n(e){return{default:(null==e?void 0:e.default)||e}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3644:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var a=(0,l(2648).Z)(l(7294));let r=a.default.createContext(null);t.LoadableContext=r},4588:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(932).Z,r=l(6495).Z,s=(0,l(2648).Z)(l(7294)),n=l(4564),i=l(3644);let o=[],d=[],u=!1;function c(e){let t=e(),l={loading:!0,loaded:null,error:null};return l.promise=t.then(e=>(l.loading=!1,l.loaded=e,e)).catch(e=>{throw l.loading=!1,l.error=e,e}),l}class p{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=r({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function f(e){return function(e,t){let l=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,ssr:!0},t),r=null;function o(){if(!r){let t=new p(e,l);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(l.lazy=s.default.lazy(a(function*(){if(l.ssr&&r){let e=r.getCurrentValue(),t=yield e.loaded;if(t)return t}return yield l.loader()})),!u){let e=l.webpack?l.webpack():l.modules;e&&d.push(t=>{for(let l of e)if(-1!==t.indexOf(l))return o()})}function c(e){!function(){o();let e=s.default.useContext(i.LoadableContext);e&&Array.isArray(l.modules)&&l.modules.forEach(t=>{e(t)})}();let t=l.loading,a=s.default.createElement(t,{isLoading:!0,pastDelay:!0,error:null}),r=l.ssr?s.default.Fragment:n.NoSSR,d=l.lazy;return s.default.createElement(s.default.Suspense,{fallback:a},s.default.createElement(r,null,s.default.createElement(d,Object.assign({},e))))}return c.preload=()=>o(),c.displayName="LoadableComponent",c}(c,e)}function b(e,t){let l=[];for(;e.length;){let a=e.pop();l.push(a(t))}return Promise.all(l).then(()=>{if(e.length)return b(e,t)})}f.preloadAll=()=>new Promise((e,t)=>{b(o).then(e,t)}),f.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(t=>{let l=()=>(u=!0,t());b(d,e).then(l,l)})},window.__NEXT_PRELOADREADY=f.preloadReady,t.default=f},7542:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return x}});var a=l(5893),r=l(5152),s=l.n(r),n=l(7294),i=l(9734);let o=s()(()=>Promise.all([l.e(5675),l.e(2479)]).then(l.bind(l,2479)),{loadableGenerated:{webpack:()=>[2479]},ssr:!1}),d=s()(()=>l.e(3967).then(l.bind(l,3967)),{loadableGenerated:{webpack:()=>[3967]}}),u=s()(()=>Promise.all([l.e(1664),l.e(5675),l.e(2059)]).then(l.bind(l,2059)),{loadableGenerated:{webpack:()=>[2059]},ssr:!1}),c=s()(()=>Promise.all([l.e(1664),l.e(7370)]).then(l.bind(l,7370)),{loadableGenerated:{webpack:()=>[7370]}}),p=s()(()=>Promise.all([l.e(7948),l.e(1664),l.e(5675),l.e(9603),l.e(7604)]).then(l.bind(l,7604)),{loadableGenerated:{webpack:()=>[7604]}}),f=s()(()=>Promise.all([l.e(5675),l.e(3588)]).then(l.bind(l,3588)),{loadableGenerated:{webpack:()=>[3588]},ssr:!1}),b=s()(()=>l.e(7661).then(l.bind(l,7661)),{loadableGenerated:{webpack:()=>[7661]}}),h=s()(()=>Promise.all([l.e(1664),l.e(5675),l.e(6866)]).then(l.bind(l,6866)),{loadableGenerated:{webpack:()=>[6866]},ssr:!1}),m=s()(()=>l.e(623).then(l.bind(l,623)),{loadableGenerated:{webpack:()=>[623]},ssr:!1}),_=e=>fetch(e).then(e=>e.json());function x(){let[e,t]=(0,n.useState)(!1),{data:l,isLoading:r,error:s}=(0,i.ZP)("".concat("https://admin.natadesign.id/api/seo/portofolio"),_);return r?(0,a.jsx)(o,{}):s||!l?(0,a.jsx)(a.Fragment,{}):(0,a.jsxs)("div",{className:"flex flex-col justify-start",children:[(0,a.jsx)(d,{props:l}),e?(0,a.jsx)(h,{props:{dismissModal:function(){t(!1)}}}):null,(0,a.jsx)("div",{className:"w-full flex flex-row justify-center bg-primary",children:(0,a.jsx)("div",{className:"lg:w-[1200px] md:w-[864px] sm:w-[608px] xs:w-[280px] flex flex-col justify-between",children:(0,a.jsx)(u,{props:{backgroundColor:"bg-primary",revealModal:function(){t(!e)}}})})}),(0,a.jsx)("div",{className:"w-full flex flex-row justify-center lg:pb-20 pb-10 bg-[#FFFBF2]",children:(0,a.jsx)("div",{className:"lg:w-[1200px] md:w-[864px] sm:w-[608px] xs:w-[280px] lg:px-20 md:px-0 sm:px-0",children:(0,a.jsxs)("div",{className:"grid grid-flow-row",children:[(0,a.jsx)("div",{className:"flex flex-row justify-between items-center py-14 border-b-2 border-primary",children:(0,a.jsx)(m,{className:"uppercase text-primary",subTitle:"Portofolio"})}),(0,a.jsx)(b,{props:{api:"".concat("https://admin.natadesign.id/api/albums"),loadingItems:9,paginate:!0}})]})})}),(0,a.jsx)(c,{props:{title:"Postingan Terbaru",api:"".concat("https://admin.natadesign.id/api/articles/category/all/3"),pathName:"/articles"}}),(0,a.jsx)(p,{}),(0,a.jsx)(f,{})]})}},5152:function(e,t,l){e.exports=l(7645)}},function(e){e.O(0,[9734,9774,2888,179],function(){return e(e.s=6709)}),_N_E=e.O()}]);
//# sourceMappingURL=portofolio-c5e3d0a667b4ca1b.js.map