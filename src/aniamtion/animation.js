
export const Slideup=(delay)=> {
    return {
        initial: {
            y: -100,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                delay,
            }

        }
    }
}
export const Slidedown=(delay)=> {
    return {
        initial: {
            y: 100,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                delay,
            }

        }
    }
}