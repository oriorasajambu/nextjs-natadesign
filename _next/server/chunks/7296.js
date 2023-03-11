"use strict";
exports.id = 7296;
exports.ids = [7296];
exports.modules = {

/***/ 3968:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContactForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const InputComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(null, {
    loadableGenerated: {
        modules: [
            "..\\components\\ContactForm.tsx -> " + "@/components/common/InputComponent"
        ]
    },
    ssr: false
});
function ContactForm() {
    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [question, setQuestion] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const form = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const handleSubmit = async (e)=>{
        setLoading(true);
        setResult(null);
        e.preventDefault();
        const formData = new URLSearchParams();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("question", question);
        fetch(`${"https://admin.natadesign.id/" + "api/contactform"}`, {
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        ref: form,
        onSubmit: handleSubmit,
        className: "flex-1 grid grid-cols-1 gap-6",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InputComponent, {
                props: {
                    type: "text",
                    id: "name",
                    label: "Nama lengkap",
                    placeHolder: "Nama lengkap",
                    onChangeListener: setName
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InputComponent, {
                props: {
                    type: "email",
                    id: "email",
                    label: "Email",
                    placeHolder: "Alamat Email",
                    onChangeListener: setEmail
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InputComponent, {
                props: {
                    type: "text",
                    id: "question",
                    label: "Pertanyaan",
                    isTextArea: true,
                    placeHolder: "Apa ada pertanyaan yang ingin Anda tanyakan? Tim Terbaik kami siap untuk membantu.",
                    onChangeListener: setQuestion
                }
            }),
            loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-row justify-between",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    disabled: loading,
                    type: "reset",
                    className: "w-full animate-pulse bg-secondary my-6 py-6 px-10 font-dm-sans font-bold lg:text-xl text-base",
                    children: "Sedang Mengirim.."
                })
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-row justify-between",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    disabled: loading,
                    type: "submit",
                    className: "border-2 border-[#707070] text-center my-6 py-6 px-10 text-partial font-dm-sans font-bold lg:text-xl text-base",
                    children: result?.success ? "Terimakasih, Tunggu balasan dari kami ya.." : "Kirim"
                })
            })
        ]
    });
}


/***/ })

};
;