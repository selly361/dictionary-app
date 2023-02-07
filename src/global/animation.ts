export const page_animation = {
    
}


export const fade_in_out = {
    hidden: {
        opacity: 0,
        x: "-100px"
    },

    visible: {
        opacity: 1,
        x: "0",

        transition: {
            duration: 0.4,
        },

    },

    exit: {
        opacity: 0,
        x: "-100px",
        transition: {
            duration: 0.4
        },
    },
};