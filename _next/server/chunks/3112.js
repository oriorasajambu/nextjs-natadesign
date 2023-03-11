"use strict";
exports.id = 3112;
exports.ids = [3112];
exports.modules = {

/***/ 3112:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AccordionComponent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function AccordionComponent(props) {
    const [isActive, setIsActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {
        initial: false,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col select-none py-6",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    onClick: ()=>setIsActive(!isActive),
                    className: `${isActive ? "mb-6" : "mb-0"} flex flex-row justify-between w-full gap-2 lg:gap-12 ${props.className}`,
                    children: [
                        props.position ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "basis-1/5 text-2xl xs:text-xl font-dm-sans text-partial",
                            children: props.position < 10 ? "0" + props.position : props.position
                        }) : "",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "basis-4/5 text-2xl xs:text-xl font-dm-sans text-partial",
                            children: props.title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                            className: "self-center",
                            initial: "collapsed",
                            animate: "open",
                            exit: "collapsed",
                            variants: {
                                collapsed: {
                                    rotate: isActive ? 0 : 90
                                },
                                open: {
                                    rotate: isActive ? 90 : 0
                                }
                            },
                            transition: {
                                duration: 0.8
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "14.12",
                                height: "25.414",
                                viewBox: "0 0 14.12 25.414",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    id: "Path_60",
                                    "data-name": "Path 60",
                                    d: "M0,12,12,0,24,12",
                                    transform: "translate(12.706 0.707) rotate(90)",
                                    fill: "none",
                                    stroke: "#10403c",
                                    strokeWidth: "2"
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                    initial: "collapsed",
                    animate: "open",
                    exit: "collapsed",
                    variants: {
                        collapsed: {
                            opacity: isActive ? 0 : 1,
                            height: isActive ? 0 : "auto"
                        },
                        open: {
                            opacity: isActive ? 1 : 0,
                            height: isActive ? "auto" : 0
                        }
                    },
                    transition: {
                        duration: 0
                    },
                    className: `flex flex-row w-full gap-2 lg:gap-12 lg:text-2xl md:text-xl sm:text-xl font-dm-sans text-partial ${props.contentClassName}`,
                    children: [
                        props.position ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "basis-1/5 text-2xl xs:text-xl font-dm-sans invisible",
                            children: "01"
                        }) : "",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "basis-4/5 text-base text-start",
                            children: props.children
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "invisible",
                            width: "14.12",
                            height: "25.414",
                            viewBox: "0 0 14.12 25.414",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                id: "Path_60",
                                "data-name": "Path 60",
                                d: "M0,12,12,0,24,12",
                                transform: "translate(12.706 0.707) rotate(90)",
                                fill: "none",
                                stroke: "#10403c",
                                strokeWidth: "2"
                            })
                        })
                    ]
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;