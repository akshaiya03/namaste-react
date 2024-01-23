import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItems:(state)=>{
            state.items.pop;
        },
        emptyitems:(state)=>{
            state.items.length=0;
        },
    },
});

export const{addItem,removeItems,emptyitems}= cartSlice.actions;
export default cartSlice.reducer;