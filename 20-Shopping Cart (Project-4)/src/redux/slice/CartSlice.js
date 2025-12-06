import {createSlice} from '@reduxjs/toolkit'




export const CartSlice = createSlice({
    name : 'Cart',
    initialState : [],
    reducers : {
        addToCart : (state) => {

        },
        deleteFromCart : (state) => {

        }
    }
})
export const {addToCart, deleteFromCart} = CartSlice.actions
export default CartSlice.reducer