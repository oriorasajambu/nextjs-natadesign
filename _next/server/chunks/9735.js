"use strict";
exports.id = 9735;
exports.ids = [9735];
exports.modules = {

/***/ 9735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G0": () => (/* binding */ ExpandXAxis),
/* harmony export */   "Ue": () => (/* binding */ Reveal)
/* harmony export */ });
/* unused harmony exports FadeInLeft, FadeInRight, FadeInBottom, FadeInTop, ExpandYAxis, randomInt, MessToOrder, Sentence, Letter */
const Reveal = {
    visible: {
        opacity: 0.99,
        transition: {
            duration: 1.5
        }
    },
    hidden: {
        opacity: 0
    }
};
const FadeInLeft = {
    visible: {
        opacity: 1,
        scale: 1,
        x: 0,
        transition: {
            duration: 1,
            ease: "easeOut"
        }
    },
    hidden: {
        opacity: 0,
        scale: 0,
        x: -500
    }
};
const FadeInRight = {
    visible: {
        opacity: 1,
        scale: 1,
        x: 0,
        transition: {
            duration: 1,
            ease: "easeOut"
        }
    },
    hidden: {
        opacity: 0,
        scale: 0,
        x: 500
    }
};
const FadeInBottom = {
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: "easeOut"
        }
    },
    hidden: {
        opacity: 0,
        scale: 0,
        y: -500
    }
};
const FadeInTop = {
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: "easeOut"
        }
    },
    hidden: {
        opacity: 0,
        scale: 0,
        y: 500
    }
};
const ExpandXAxis = {
    visible: {
        width: "100%",
        transition: {
            duration: 2,
            ease: "easeOut"
        }
    },
    hidden: {
        width: 0
    }
};
const ExpandYAxis = {
    visible: {
        height: "100%",
        transition: {
            duration: 4,
            ease: "easeOut"
        }
    },
    hidden: {
        height: 0
    }
};
function randomInt({ min , max  }) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const MessToOrder = ({ coordinate  })=>{
    return {
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            x: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        hidden: {
            opacity: 0,
            scale: 0,
            y: coordinate.y,
            x: coordinate.x
        }
    };
};
const Sentence = {
    hidden: {
        opacity: 1
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08
        }
    }
};
const Letter = {
    hidden: {
        opacity: 0,
        y: 50
    },
    visible: {
        opacity: 1,
        y: 0
    }
};


/***/ })

};
;