"use strict";
exports.id = 7254;
exports.ids = [7254,7273,2444];
exports.modules = {

/***/ 7273:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _objectWithoutPropertiesLoose;
    }
}));
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}


/***/ }),

/***/ 2293:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PriceEstimation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(303);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__]);
_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const InputComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(null, {
    loadableGenerated: {
        modules: [
            "..\\components\\PriceEstimation.tsx -> " + "@/components/common/InputComponent"
        ]
    },
    ssr: false
});
const DividerXComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(null, {
    loadableGenerated: {
        modules: [
            "..\\components\\PriceEstimation.tsx -> " + "@/components/common/DividerXComponent"
        ]
    },
    ssr: false
});
const SubtitleComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(null, {
    loadableGenerated: {
        modules: [
            "..\\components\\PriceEstimation.tsx -> " + "@/components/common/SubtitleComponent"
        ]
    },
    ssr: false
});
function PriceEstimation() {
    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const [phone, setPhone] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const [type, setType] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const [size, setSize] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const [location, setLocation] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const [job, setJob] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const [time, setTime] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const [info, setInfo] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const form = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const handleSubmit = async (e)=>{
        setLoading(true);
        setResult(null);
        e.preventDefault();
        const formData = new URLSearchParams();
        formData.append("name", name);
        formData.append("phone", phone);
        formData.append("email", email);
        formData.append("type", type);
        formData.append("size", size);
        formData.append("location", location);
        formData.append("job", job);
        formData.append("time", time);
        formData.append("info", info);
        fetch(`${"https://admin.natadesign.id/" + "api/inquiryform"}`, {
            body: formData.toString(),
            method: "post",
            headers: {
                "content-type": "application/x-www-form-urlencoded"
            }
        }).then(async (result)=>{
            form.current?.reset();
            setLoading(false);
            setResult(await result.json());
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-full flex flex-row justify-center bg-[#FFFBF2]",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "lg:w-[1200px] md:w-[864px] sm:w-[608px] xs:w-[280px] lg:px-20 md:px-0 sm:px-0",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid grid-cols-1 grid-flow-row",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-row justify-between items-center pt-14",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SubtitleComponent, {
                            className: "uppercase text-primary",
                            subTitle: "Estimasi Harga"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        ref: form,
                        onSubmit: handleSubmit,
                        className: "lg:grid lg:grid-cols-2 flex flex-col gap-x-20 gap-y-6 pt-10",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DividerXComponent, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DividerXComponent, {
                                className: "lg:block hidden"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InputComponent, {
                                props: {
                                    type: "text",
                                    id: "name",
                                    label: "Nama",
                                    placeHolder: "Masukkan Nama Lengkap Anda",
                                    onChangeListener: setName
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InputComponent, {
                                props: {
                                    type: "text",
                                    id: "phone",
                                    label: "Nomor HP / WhatsApp",
                                    placeHolder: "0812 3456 7890",
                                    onChangeListener: setPhone
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InputComponent, {
                                props: {
                                    type: "text",
                                    id: "email",
                                    label: "Email",
                                    placeHolder: "emailanda@gmail.com",
                                    onChangeListener: setEmail
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InputComponent, {
                                props: {
                                    type: "text",
                                    id: "type",
                                    label: "Jenis",
                                    placeHolder: "Caf\xe9 / Restoran / Coffee Shop / dll",
                                    onChangeListener: setType
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InputComponent, {
                                props: {
                                    type: "text",
                                    id: "size",
                                    label: "Ukuran",
                                    placeHolder: "Dalam satuan m2",
                                    onChangeListener: setSize
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InputComponent, {
                                props: {
                                    type: "text",
                                    id: "location",
                                    label: "Lokasi",
                                    placeHolder: "Nama Kota",
                                    onChangeListener: setLocation
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InputComponent, {
                                props: {
                                    type: "text",
                                    id: "job",
                                    label: "Pengerjaan",
                                    placeHolder: "Konstruksi atau Renovasi",
                                    onChangeListener: setJob
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InputComponent, {
                                props: {
                                    type: "text",
                                    id: "time",
                                    label: "Estimasi Waktu",
                                    placeHolder: "3 Bulan",
                                    onChangeListener: setTime
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InputComponent, {
                                props: {
                                    className: "col-span-2",
                                    type: "text",
                                    id: "additional_info",
                                    label: "Informasi Tambahan",
                                    isTextArea: true,
                                    placeHolder: "Untuk mempercepat proses estimasi harga, mohon berikan rincian deskripsi proyek Anda secara detail dan lengkap. Terima kasih.",
                                    onChangeListener: setInfo
                                }
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-row xs:flex-col justify-between col-span-2 my-6",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        disabled: loading,
                                        type: "reset",
                                        className: `${loading ? "animate-pulse bg-secondary" : ""} border-2 border-[#707070] text-center py-6 px-10 text-partial font-dm-sans font-bold lg:text-xl text-base`,
                                        children: loading ? "Sedang Mengirim.." : result?.success ? "Terimakasih, Tunggu balasan dari kami ya.." : "Kirim Pesan"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-col justify-between items-end xs:items-center xs:gap-6 xs:mt-6",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                className: "text-xl text-partial font-dm-sans font-bold",
                                                children: "Temukan Kami"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex justify-end gap-6",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "text-partial h-6",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            "aria-label": "Facebook",
                                                            href: "https://www.facebook.com/nataproduct",
                                                            target: "_blank",
                                                            rel: "external",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                                                                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faFacebookF,
                                                                className: "w-full h-full"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "text-partial h-6",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            "aria-label": "Instagram",
                                                            href: "https://www.instagram.com/nat.adesign",
                                                            target: "_blank",
                                                            rel: "external",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                                                                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faInstagram,
                                                                className: "w-full h-full"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "text-partial h-6",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            "aria-label": "Tiktok",
                                                            href: "https://www.tiktok.com/@nat.adesign",
                                                            target: "_blank",
                                                            rel: "external",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                                                                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faTiktok,
                                                                className: "w-full h-full"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "text-partial h-6",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            "aria-label": "Whatsapp",
                                                            href: "https://wa.me/6281212301500",
                                                            target: "_blank",
                                                            rel: "external",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                                                                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faWhatsapp,
                                                                className: "w-full h-full"
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DividerXComponent, {
                                className: "col-span-2"
                            })
                        ]
                    })
                ]
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;