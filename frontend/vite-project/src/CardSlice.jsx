import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:"mycart",

    initialState:{
        cart:[]
    },
    reducers:{
        addtoCart:(state,actions)=>{
            state.cart.push(actions.payload)
        }
    }
})

export const {addtoCart} = cartSlice.actions
export default cartSlice.reducer;