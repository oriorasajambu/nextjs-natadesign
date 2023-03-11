export const Reveal = {
    visible: { opacity: 0.99, transition: { duration: 1.5 } },
    hidden: { opacity: 0 },
}

export const FadeInLeft = {
    visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
    hidden: { opacity: 0, scale: 0, x: -500 }
};

export const FadeInRight = {
    visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
    hidden: { opacity: 0, scale: 0, x: 500 }
};

export const FadeInBottom = {
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
    hidden: { opacity: 0, scale: 0, y: -500 }
}

export const FadeInTop = {
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
    hidden: { opacity: 0, scale: 0, y: 500 }
}

export const ExpandXAxis = {
    visible: { width: "100%", transition: { duration: 2, ease: "easeOut" } },
    hidden: { width: 0 }
}

export const ExpandYAxis = {
    visible: { height: "100%", transition: { duration: 4, ease: "easeOut" } },
    hidden: { height: 0 }
}

export function randomInt({ min, max }: { min: number, max: number }) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

type Coordinate = {
    x: number,
    y: number,
}

export const MessToOrder = ({ coordinate }: { coordinate: Coordinate }) => {
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
    }
}

export const Sentence = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08,
        }
    }
}

export const Letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
    }
}