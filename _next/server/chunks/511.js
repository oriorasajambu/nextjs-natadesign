"use strict";
exports.id = 511;
exports.ids = [511];
exports.modules = {

/***/ 9600:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/A_icon.ec4a7a72.png","height":70,"width":67,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAG1BMVEU/Pz8/Pz8/Pz8/Pz9AQEBAQEA/Pz8/Pz8/Pz9JDsW2AAAACXRSTlMBYnIoQopWNReP3SZ4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAALklEQVR4nC2LSQ4AIBDCgFn//2KjyKmhAIAVcMgPKVeT7AfVqbUIJbBqz3XPUzwNzQB7FzlHOgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 3538:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/icon_info.7c40f785.svg","height":67,"width":67});

/***/ }),

/***/ 6412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/oiji_icon.c6b2289f.png","height":52,"width":67,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAJ1BMVEU/Pz9AQEA/Pz9AQEBAQEA/Pz8/Pz8/Pz8/Pz9AQEBAQEA/Pz8/Pz/+ELLDAAAADXRSTlMBlF4/TTMavXaJhSF75yfMPgAAAAlwSFlzAAALEwAACxMBAJqcGAAAADBJREFUeJwVxUESACEIA8EJAcFd//9ey7405ARPtYcVhWSFvqRzeu8w0nH8C3DW6wISEgCxHb4L5wAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":6});

/***/ }),

/***/ 511:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContactSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_assets_images_icon_info_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3538);
/* harmony import */ var _public_assets_images_A_icon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9600);
/* harmony import */ var _public_assets_images_oiji_icon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6412);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(303);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5941);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__, swr__WEBPACK_IMPORTED_MODULE_8__]);
([_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__, swr__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const ContactForm = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(()=>__webpack_require__.e(/* import() */ 7296).then(__webpack_require__.bind(__webpack_require__, 3968)), {
    loadableGenerated: {
        modules: [
            "..\\components\\ContactSection.tsx -> " + "@/components/ContactForm"
        ]
    }
});
const fetcher = (url)=>fetch(url).then((res)=>res.json());
function ContactSection() {
    const { data , isLoading , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_8__["default"])(`${"https://admin.natadesign.id/" + "api/contacts"}`, fetcher);
    if (isLoading) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
    if (error) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
    if (!data) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "bg-[#FFFBF2] py-20 xs:py-10 flex flex-row xs:flex-col items-center justify-center",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "lg:w-[1200px] md:w-[864px] sm:w-[608px] xs:w-[280px] lg:px-20 md:px-0 sm:px-0",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-row xs:flex-col justify-between gap-12",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col gap-12",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex lg:flex-row md:flex-col sm:flex-col xs:flex-col justify-between gap-12",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-row xs:flex-col xs:gap-6 flex-1 border-b-[1px] border-primary pb-12 ",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-partial font-dm-sans font-bold lg:text-xl lg:basis-1/3 md:basis-1/4 sm:basis-1/5 xs:text-center",
                                            children: "Alamat"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            dangerouslySetInnerHTML: {
                                                __html: data.address
                                            },
                                            className: "font-dm-sans text-partial lg:text-xl lg:basis-2/3 md:basis-3/4 sm:basis-4/5 xs:text-center"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-row xs:flex-col xs:gap-6 flex-1 border-b-[1px] border-primary pb-12",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-partial font-dm-sans font-bold lg:text-xl lg:basis-1/3 md:basis-1/4 basis-1/5 xs:text-center",
                                            children: "Lokasi"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            dangerouslySetInnerHTML: {
                                                __html: data.location
                                            },
                                            className: "font-dm-sans text-partial lg:text-xl lg:basis-2/3 md:basis-3/4 basis-4/5 xs:text-center"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex lg:flex-row md:flex-col-reverse sm:flex-col-reverse xs:flex-col-reverse justify-between gap-12",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col flex-1 gap-12 lg:gap-12",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-row xs:flex-col xs:gap-6 grow border-b-[1px] border-primary pb-12",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-partial font-dm-sans font-bold lg:text-xl lg:basis-1/3 md:basis-1/4 basis-1/5 xs:text-center",
                                                    children: "Kontak"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    dangerouslySetInnerHTML: {
                                                        __html: data.contact
                                                    },
                                                    className: "font-dm-sans text-partial lg:text-xl lg:basis-2/3 md:basis-3/4 basis-4/5 xs:text-center"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-row xs:flex-col xs:gap-6 content-start grow border-b-[1px] border-primary pb-12",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "lg:h-12 md:h-12 h-12 relative self-start xs:self-center lg:basis-1/3 md:basis-1/4 basis-1/5",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                        width: 48,
                                                        height: 48,
                                                        src: _public_assets_images_icon_info_svg__WEBPACK_IMPORTED_MODULE_2__/* ["default"].src */ .Z.src,
                                                        alt: "Logo Information"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    dangerouslySetInnerHTML: {
                                                        __html: data.info
                                                    },
                                                    className: "font-dm-sans text-partial leading-8 lg:text-xl lg:basis-2/3 md:basis-3/4 basis-4/5"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex-1 h-full min-h-[360px] xs:hidden",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            position: "relative",
                                            textAlign: "right",
                                            height: "100%",
                                            width: "100%"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            style: {
                                                overflow: "hidden",
                                                background: "none !important",
                                                height: "100%",
                                                width: "100%"
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                                                width: "100%",
                                                height: "100%",
                                                id: "gmap_canvas",
                                                title: "Nat.A Design Google Map Location",
                                                src: data.map,
                                                style: {
                                                    border: 0,
                                                    overflow: "hidden",
                                                    margin: "0 0"
                                                }
                                            })
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-12",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col flex-1 gap-12 lg:gap-12",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-row xs:flex-col h-[101.80px] xs:gap-6 border-b-[1px] border-primary pb-12",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    className: "text-partial font-dm-sans font-bold lg:text-xl grow-0 lg:basis-1/3 md:basis-1/4 basis-1/5 xs:text-center",
                                                    children: [
                                                        "Temukan ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                                            className: "block xs:hidden"
                                                        }),
                                                        " Kami"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-row content-center xs:justify-center gap-6 w-full lg:basis-2/3 md:basis-3/4 basis-4/5 mt-1",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "text-partial h-6",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                                "aria-label": "Facebook",
                                                                href: "https://www.facebook.com/nataproduct",
                                                                target: "_blank",
                                                                rel: "external",
                                                                children: [
                                                                    " ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {
                                                                        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faFacebookF,
                                                                        className: "w-full h-full"
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "text-partial h-6",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                                "aria-label": "Instagram",
                                                                href: "https://www.instagram.com/nat.adesign",
                                                                target: "_blank",
                                                                rel: "external",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {
                                                                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faInstagram,
                                                                    className: "w-full h-full"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "text-partial h-6",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                                "aria-label": "Tiktok",
                                                                href: "https://www.tiktok.com/@nat.adesign",
                                                                target: "_blank",
                                                                rel: "external",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {
                                                                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faTiktok,
                                                                    className: "w-full h-full"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "text-partial h-6",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                                "aria-label": "Whatsapp",
                                                                href: "https://wa.me/6281212301500",
                                                                target: "_blank",
                                                                rel: "external",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {
                                                                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faWhatsapp,
                                                                    className: "w-full h-full"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-col gap-6 lg:gap-12 flex-1",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-partial font-dm-sans font-bold text-xl xs:text-center",
                                                    children: "Subsidiary"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-row xs:flex-1 xs:gap-6 gap-12 items-center justify-between h-[90px]",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "w-[67px] h-[52px] relative",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                src: _public_assets_images_oiji_icon_png__WEBPACK_IMPORTED_MODULE_4__/* ["default"].src */ .Z.src,
                                                                fill: true,
                                                                alt: "Logo Oiji"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "w-0.5 bg-partial py-8 xs:hidden"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "font-dm-sans text-partial text-xl leading-normal flex-1 xs:text-center",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                children: [
                                                                    "Brand Designers & ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                                                        className: "lg:block hidden"
                                                                    }),
                                                                    " Social Media Consultant"
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-row xs:flex-1 xs:gap-6 gap-12 items-center justify-between h-[90px]",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "w-[67px] h-[70px] relative",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                src: _public_assets_images_A_icon_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"].src */ .Z.src,
                                                                fill: true,
                                                                alt: "Logo Andara"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "w-0.5 bg-partial py-8 xs:hidden"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "font-dm-sans text-partial text-xl leading-normal flex-1 xs:text-center",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                children: [
                                                                    "Architecture & Interiors, ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                                                        className: "lg:block hidden"
                                                                    }),
                                                                    " Custom Furniture, ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                                                        className: "lg:block hidden"
                                                                    }),
                                                                    " Home Decoration"
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ContactForm, {})
                            ]
                        })
                    ]
                })
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;