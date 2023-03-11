"use strict";
exports.id = 7661;
exports.ids = [7661];
exports.modules = {

/***/ 7661:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AlbumComponent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5941);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_3__]);
swr__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const ItemsAlbumComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(null, {
    loadableGenerated: {
        modules: [
            "..\\components\\common\\AlbumComponent.tsx -> " + "@/components/common/ItemsAlbumComponent"
        ]
    },
    ssr: false
});
const PaginationComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(null, {
    loadableGenerated: {
        modules: [
            "..\\components\\common\\AlbumComponent.tsx -> " + "@/components/common/PaginationComponent"
        ]
    },
    ssr: false
});
const fetcher = (url)=>fetch(url).then((res)=>res.json());
function Loading({ loadingItems  }) {
    const items = [
        ...Array(loadingItems)
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "grid grid-cols-3 xs:grid-cols-1 w-full gap-6 lg:mt-20 mt-10",
        children: items.map((_, i)=>{
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-row justify-between items-center mb-6",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "animate-pulse bg-secondary h-6 w-1/5 rounded-lg"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "text-primary",
                                width: "25.144",
                                height: "14.382",
                                viewBox: "0 0 25.144 14.382",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                    id: "Component_1_63",
                                    "data-name": "Component 1 – 63",
                                    transform: "translate(0 0.354)",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            id: "Path_19",
                                            "data-name": "Path 19",
                                            d: "M0,6.837,6.837,0l6.837,6.837",
                                            transform: "translate(24.437) rotate(90)",
                                            fill: "none",
                                            stroke: "#404040",
                                            strokeWidth: "1"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            id: "Path_20",
                                            "data-name": "Path 20",
                                            d: "M1208.8,3931.5h-24.437",
                                            transform: "translate(-1184.364 -3924.663)",
                                            fill: "none",
                                            stroke: "#404040",
                                            strokeWidth: 1
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "h-4 mb-6 w-full animate-pulse bg-secondary rounded-lg"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "basis-[19%] relative w-full grow aspect-square self-center animate-pulse bg-secondary rounded-lg"
                    })
                ]
            }, i);
        })
    });
}
function AlbumComponent({ props  }) {
    const { query: { page  }  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { data , isLoading , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_3__["default"])(props.api + (page ? `?page=${page}` : ""), fetcher);
    if (isLoading) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Loading, {
        loadingItems: props?.loadingItems ? props?.loadingItems : 3
    });
    if (error) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
    if (!data || data.data.length < 1) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col gap-6",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ItemsAlbumComponent, {
                data: data.data
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PaginationComponent, {
                props: {
                    enablePagination: props.paginate ? true : false,
                    pageCount: data.last_page ? data.last_page : 0,
                    items: data.total ? data.total : 0,
                    pageSize: data.per_page ? data.per_page : 0,
                    currentPage: data.current_page ? data.current_page : 0,
                    previousUrl: data.prev_page_url ? data.prev_page_url : null,
                    nextUrl: data.next_page_url ? data.next_page_url : null,
                    pathName: "/portofolio"
                }
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;