"use strict";
exports.id = 6375;
exports.ids = [6375];
exports.modules = {

/***/ 6375:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContentSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_common_DateComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1679);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5941);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_5__]);
swr__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const ArticleSection = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(()=>__webpack_require__.e(/* import() */ 7370).then(__webpack_require__.bind(__webpack_require__, 7370)), {
    loadableGenerated: {
        modules: [
            "..\\components\\articles\\ContentSection.tsx -> " + "@/components/ArticleSection"
        ]
    }
});
const ProjectsSection = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(()=>__webpack_require__.e(/* import() */ 9899).then(__webpack_require__.bind(__webpack_require__, 9899)), {
    loadableGenerated: {
        modules: [
            "..\\components\\articles\\ContentSection.tsx -> " + "@/components/ProjectsSection"
        ]
    }
});
const VerticalAlbumComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(()=>__webpack_require__.e(/* import() */ 4605).then(__webpack_require__.bind(__webpack_require__, 4605)), {
    loadableGenerated: {
        modules: [
            "..\\components\\articles\\ContentSection.tsx -> " + "@/components/common/VerticalAlbumComponent"
        ]
    }
});
const VerticalArticleComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(()=>__webpack_require__.e(/* import() */ 6583).then(__webpack_require__.bind(__webpack_require__, 6583)), {
    loadableGenerated: {
        modules: [
            "..\\components\\articles\\ContentSection.tsx -> " + "@/components/common/VerticalArticleComponent"
        ]
    }
});
const DividerXComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(null, {
    loadableGenerated: {
        modules: [
            "..\\components\\articles\\ContentSection.tsx -> " + "@/components/common/DividerXComponent"
        ]
    },
    ssr: false
});
const fetcher = (url)=>fetch(url).then((res)=>res.json());
function ContentSection() {
    const { query: { slug  }  } = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { data , isLoading , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_5__["default"])(`${"https://admin.natadesign.id/" + "api/articles/get/" + slug}`, fetcher);
    if (isLoading) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
    if (error) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
    if (!data) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full flex flex-row justify-center lg:pb-20 pb-10 bg-[#FFFBF2]",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "lg:w-[1200px] md:w-[864px] sm:w-[608px] xs:w-[280px] lg:px-20 md:px-0 sm:px-0",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-row sm:flex-col xs:flex-col gap-[1px] bg-primary mt-20",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "lg:basis-2/3 md:basis-2/3 flex-1 lg:pr-12 md:pr-12 pr-0 bg-[#FFFBF2] flex flex-col",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex flex-row justify-between items-center mb-20",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            className: "text-primary font-dm-sans font-bold text-4xl lg:text-[48px] md:text-5xl leading-tight",
                                            children: data.title
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-full aspect-square relative mb-12",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            priority: true,
                                            src: data.thumbnail_url,
                                            fill: true,
                                            alt: data.title
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DividerXComponent, {}),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-row justify-between my-7 items-center",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                className: "text-partial text-xs font-dm-sans font-bold mr-1",
                                                children: [
                                                    "Ditulis Oleh ",
                                                    data.author,
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_DateComponent__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                        props: {
                                                            date: data.published_at,
                                                            class: "text-partial font-dm-sans font-bold text-xs"
                                                        }
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex flex-row ml-auto items-center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "text-partial font-dm-sans font-bold text-base mr-6",
                                                        children: "Bagikan: "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        "aria-label": "Share this post",
                                                        href: "#",
                                                        className: "text-partial font-dm-sans font-bold grow text-end",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            width: "25",
                                                            height: "28",
                                                            viewBox: "0 0 25 28",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                                                id: "Icon_feather-share",
                                                                "data-name": "Icon feather-share",
                                                                transform: "translate(0.5 0.5)",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                        id: "Path_119",
                                                                        "data-name": "Path 119",
                                                                        d: "M6,18V30a3,3,0,0,0,3,3H27a3,3,0,0,0,3-3V18",
                                                                        transform: "translate(-6 -6)",
                                                                        fill: "none",
                                                                        stroke: "#404040",
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: "1"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                        id: "Path_120",
                                                                        "data-name": "Path 120",
                                                                        d: "M24,9,18,3,12,9",
                                                                        transform: "translate(-6 -3)",
                                                                        fill: "none",
                                                                        stroke: "#404040",
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: "1"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                        id: "Path_121",
                                                                        "data-name": "Path 121",
                                                                        d: "M18,3V22.5",
                                                                        transform: "translate(-6 -3)",
                                                                        fill: "none",
                                                                        stroke: "#404040",
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: "1"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DividerXComponent, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "mt-12 font-dm-sans text-secondary",
                                        style: {
                                            pageBreakBefore: "always",
                                            clear: "both"
                                        },
                                        dangerouslySetInnerHTML: {
                                            __html: data.content
                                        }
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mt-12",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                className: "font-dm-sans text-secondary",
                                                children: [
                                                    "Tags: ",
                                                    data.tags
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                className: "font-dm-sans text-secondary",
                                                children: [
                                                    "Kategori: ",
                                                    data.category
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "lg:flex md:flex sm:hidden xs:hidden basis-1/3 lg:pl-12 md:pl-12 pl-0 flex-col bg-[#FFFBF2]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(VerticalArticleComponent, {
                                        api: `${"https://admin.natadesign.id/" + "api/articles/category/ulasan-media/3"}`,
                                        title: "Ulasan Media"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        href: "/media",
                                        "aria-label": "See More Media Review",
                                        className: "font-dm-sans text-partial",
                                        children: "Selengkapnya"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(VerticalAlbumComponent, {
                                        api: `${"https://admin.natadesign.id/" + "api/albums/3"}`
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        href: "/portofolio",
                                        "aria-label": "See More Our Portofolio",
                                        className: "font-dm-sans text-partial",
                                        children: "Selengkapnya"
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProjectsSection, {
                props: {
                    titleClass: "text-primary text-start leading-none",
                    showButton: true,
                    paddingTop: "lg:pt-10 md:pt-10 sm:pt-10 xs:pt-10",
                    paddingBot: "lg:pb-20 md:pb-20 sm:pb-20 xs:pb-20",
                    extraClassName: "hidden sm:flex xs:flex"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ArticleSection, {
                props: {
                    api: `${"https://admin.natadesign.id/" + "api/articles/category/ulasan-media/3"}`,
                    pathName: "/media",
                    title: "Ulasan Media",
                    className: "hidden sm:flex xs:flex"
                }
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1679:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Date)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);


function Date({ props  }) {
    if (props.date) {
        if (props.date?.toLocaleString()) {
            const date = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.parseISO)(props.date.toLocaleString());
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
                dateTime: props.date.toLocaleString(),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: props.class,
                    children: (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(date, "EEEE, d LLLL yyyy")
                })
            });
        }
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: props.class,
            children: "-"
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: props.class,
        children: "-"
    });
}


/***/ })

};
;