(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7267],{459:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/media/[slug]",function(){return l(6937)}])},4564:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.suspense=function(){let e=Error(a.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=a.NEXT_DYNAMIC_NO_SSR_CODE,e},t.NoSSR=function(e){let{children:t}=e;return t},(0,l(2648).Z)(l(7294));var a=l(2983)},7645:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let l=n.default,r={loading:e=>{let{error:t,isLoading:l,pastDelay:a}=e;return null}};e instanceof Promise?r.loader=()=>e:"function"==typeof e?r.loader=e:"object"==typeof e&&(r=a({},r,e)),r=a({},r,t);let o=r.loader,i=()=>null!=o?o().then(s):Promise.resolve(s(()=>null));return r.loadableGenerated&&delete(r=a({},r,r.loadableGenerated)).loadableGenerated,"boolean"!=typeof r.ssr||r.ssr||(delete r.webpack,delete r.modules),l(a({},r,{loader:i}))};var a=l(6495).Z,r=l(2648).Z;r(l(7294));var n=r(l(4588));function s(e){return{default:(null==e?void 0:e.default)||e}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3644:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var a=(0,l(2648).Z)(l(7294));let r=a.default.createContext(null);t.LoadableContext=r},4588:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(932).Z,r=l(6495).Z,n=(0,l(2648).Z)(l(7294)),s=l(4564),o=l(3644);let i=[],u=[],d=!1;function c(e){let t=e(),l={loading:!0,loaded:null,error:null};return l.promise=t.then(e=>(l.loading=!1,l.loaded=e,e)).catch(e=>{throw l.loading=!1,l.error=e,e}),l}class f{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=r({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function p(e){return function(e,t){let l=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,ssr:!0},t),r=null;function i(){if(!r){let t=new f(e,l);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(l.lazy=n.default.lazy(a(function*(){if(l.ssr&&r){let e=r.getCurrentValue(),t=yield e.loaded;if(t)return t}return yield l.loader()})),!d){let e=l.webpack?l.webpack():l.modules;e&&u.push(t=>{for(let l of e)if(-1!==t.indexOf(l))return i()})}function c(e){!function(){i();let e=n.default.useContext(o.LoadableContext);e&&Array.isArray(l.modules)&&l.modules.forEach(t=>{e(t)})}();let t=l.loading,a=n.default.createElement(t,{isLoading:!0,pastDelay:!0,error:null}),r=l.ssr?n.default.Fragment:s.NoSSR,u=l.lazy;return n.default.createElement(n.default.Suspense,{fallback:a},n.default.createElement(r,null,n.default.createElement(u,Object.assign({},e))))}return c.preload=()=>i(),c.displayName="LoadableComponent",c}(c,e)}function _(e,t){let l=[];for(;e.length;){let a=e.pop();l.push(a(t))}return Promise.all(l).then(()=>{if(e.length)return _(e,t)})}p.preloadAll=()=>new Promise((e,t)=>{_(i).then(e,t)}),p.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(t=>{let l=()=>(d=!0,t());_(u,e).then(l,l)})},window.__NEXT_PRELOADREADY=p.preloadReady,t.default=p},6937:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return m}});var a=l(5893),r=l(7294),n=l(1163),s=l(9734),o=l(5152),i=l.n(o);let u=i()(()=>Promise.all([l.e(5675),l.e(2479)]).then(l.bind(l,2479)),{loadableGenerated:{webpack:()=>[2479]},ssr:!1}),d=i()(()=>l.e(3967).then(l.bind(l,3967)),{loadableGenerated:{webpack:()=>[3967]}}),c=i()(()=>Promise.all([l.e(1664),l.e(5675),l.e(2059)]).then(l.bind(l,2059)),{loadableGenerated:{webpack:()=>[2059]},ssr:!1}),f=i()(()=>Promise.all([l.e(7948),l.e(1664),l.e(5675),l.e(9603),l.e(7604)]).then(l.bind(l,7604)),{loadableGenerated:{webpack:()=>[7604]}}),p=i()(()=>Promise.all([l.e(5675),l.e(3588)]).then(l.bind(l,3588)),{loadableGenerated:{webpack:()=>[3588]},ssr:!1}),_=i()(()=>Promise.all([l.e(1664),l.e(5675),l.e(6866)]).then(l.bind(l,6866)),{loadableGenerated:{webpack:()=>[6866]},ssr:!1}),h=i()(()=>Promise.all([l.e(1664),l.e(5675),l.e(1358),l.e(6865)]).then(l.bind(l,6865)),{loadableGenerated:{webpack:()=>[6865]}}),b=e=>fetch(e).then(e=>e.json());function m(){let[e,t]=(0,r.useState)(!1),{query:{slug:l}}=(0,n.useRouter)(),{data:o,isLoading:i,error:m}=(0,s.ZP)("".concat("https://admin.natadesign.id/api/seo/"+l),b);return i?(0,a.jsx)(u,{}):m||!o?(0,a.jsx)(a.Fragment,{}):(0,a.jsxs)("div",{className:"flex flex-col justify-start",children:[(0,a.jsx)(d,{props:o}),e?(0,a.jsx)(_,{props:{dismissModal:function(){t(!1)}}}):null,(0,a.jsx)("div",{className:"w-full flex flex-row justify-center bg-primary",children:(0,a.jsx)("div",{className:"lg:w-[1200px] md:w-[864px] sm:w-[608px] xs:w-[280px] flex flex-col justify-between",children:(0,a.jsx)(c,{props:{backgroundColor:"bg-primary",revealModal:function(){t(!e)}}})})}),(0,a.jsx)(h,{}),(0,a.jsx)(f,{}),(0,a.jsx)(p,{})]})}},5152:function(e,t,l){e.exports=l(7645)},1163:function(e,t,l){e.exports=l(880)}},function(e){e.O(0,[9734,9774,2888,179],function(){return e(e.s=459)}),_N_E=e.O()}]);
//# sourceMappingURL=[slug]-d7d04c5b95808405.js.map