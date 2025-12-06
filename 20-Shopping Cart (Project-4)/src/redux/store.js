import reducer from "./slice/CartSlice";


export const store = configureStore ({
    reducer : {
        Cart : CartSlice
    }
})