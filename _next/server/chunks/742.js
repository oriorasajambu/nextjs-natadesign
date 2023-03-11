"use strict";
exports.id = 742;
exports.ids = [742];
exports.modules = {

/***/ 742:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TestimonySection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5941);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6197);
/* harmony import */ var _components_animation_animate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9735);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__, framer_motion__WEBPACK_IMPORTED_MODULE_4__]);
([swr__WEBPACK_IMPORTED_MODULE_1__, framer_motion__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const DividerXComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(null, {
    loadableGenerated: {
        modules: [
            "..\\components\\home\\TestimonySection.tsx -> " + "@/components/common/DividerXComponent"
        ]
    },
    ssr: false
});
const fetcher = (url)=>fetch(url).then((res)=>res.json());
let count = 0;
function TestimonySection() {
    const { data , isLoading , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__["default"])(`${"https://admin.natadesign.id/" + "api/testimony"} `, fetcher, {
        refreshInterval: 1000 * 10
    });
    const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
    const slideRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    if (isLoading) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
    if (error) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
    if (!data || data.length < 1) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
    const onNextClicked = ()=>{
        count = (count + 1) % data.length;
        setIndex(count);
        slideRef.current?.classList.add("fade-anim");
    };
    const onPreviousClicked = ()=>{
        count = (count + data.length - 1) % data.length;
        setIndex(count);
        slideRef.current?.classList.add("fade-anim");
    };
    const removeAnimation = ()=>{
        slideRef.current?.classList.remove("fade-anim");
    };
    const autoPlay = ()=>{
        setInterval(()=>{
            onNextClicked();
        }, 5000);
    };
    autoPlay();
    slideRef.current?.addEventListener("animationend", removeAnimation);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "bg-[#FFFBF2] pb-20 flex flex-row justify-center",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "lg:w-[1200px] md:w-[864px] sm:w-[608px] xs:w-[280px] lg:px-20 md:px-0 sm:px-0 flex flex-col items-center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DividerXComponent, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                    variants: _components_animation_animate__WEBPACK_IMPORTED_MODULE_5__/* .Reveal */ .Ue,
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: {
                        once: true
                    },
                    className: "lg:py-20 lg:px-20 md:px-20 sm:px-0 relative",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col justify-between items-center py-10 lg:py-0 ",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-partial font-dm-sans text-center text-2xl mb-12",
                                    children: "Apa kata mereka?"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    ref: slideRef,
                                    className: "grow",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("blockquote", {
                                            className: "xs:h-28 lg:mx-24 md:mx-12 mx-0 italic leading-9 font-play-serif text-partial lg:text-4xl md:text-2xl sm:text-xl xs:text-base text-center",
                                            children: [
                                                '"',
                                                data[index].content,
                                                '"'
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "font-dm-sans font-bold text-partial text-center lg:text-2xl md:text-xl sm:text-lg xs:text-base lg:mt-6",
                                            children: [
                                                "- ",
                                                data[index].author,
                                                " -"
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            "aria-label": "Previous Testimony",
                            className: "hidden lg:block md:block absolute top-1/2 -translate-y-1/2 left-0 hover:scale-110",
                            onClick: onPreviousClicked,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "55",
                                height: "55",
                                viewBox: "0 0 55 55",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                    id: "Group_225",
                                    "data-name": "Group 225",
                                    transform: "translate(-140 -7288)",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                            id: "Ellipse_4",
                                            "data-name": "Ellipse 4",
                                            transform: "translate(140 7288)",
                                            fill: "none",
                                            stroke: "#10403c",
                                            strokeWidth: "1",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                    cx: "27.5",
                                                    cy: "27.5",
                                                    r: "27.5",
                                                    stroke: "none"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                    cx: "27.5",
                                                    cy: "27.5",
                                                    r: "27",
                                                    fill: "none"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            id: "Path_17",
                                            "data-name": "Path 17",
                                            d: "M0,12,12,0,24,12",
                                            transform: "translate(159.5 7327.5) rotate(-90)",
                                            fill: "none",
                                            stroke: "#10403c",
                                            strokeWidth: "1"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            "aria-label": "Next Testimony",
                            className: "hidden lg:block md:block absolute top-1/2 -translate-y-1/2 right-0 hover:scale-110",
                            onClick: onNextClicked,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "55",
                                height: "55",
                                viewBox: "0 0 55 55",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                    id: "Group_226",
                                    "data-name": "Group 226",
                                    transform: "translate(-1205 -7316)",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                            id: "Ellipse_4",
                                            "data-name": "Ellipse 4",
                                            transform: "translate(1260 7371) rotate(180)",
                                            fill: "none",
                                            stroke: "#10403c",
                                            strokeWidth: "1",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                    cx: "27.5",
                                                    cy: "27.5",
                                                    r: "27.5",
                                                    stroke: "none"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                    cx: "27.5",
                                                    cy: "27.5",
                                                    r: "27",
                                                    fill: "none"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            id: "Path_17",
                                            "data-name": "Path 17",
                                            d: "M0,12,12,0,24,12",
                                            transform: "translate(1240.5 7331.5) rotate(90)",
                                            fill: "none",
                                            stroke: "#10403c",
                                            strokeWidth: "1"
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DividerXComponent, {})
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;