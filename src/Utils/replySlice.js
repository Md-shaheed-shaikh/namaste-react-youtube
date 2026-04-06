import { createSlice } from "@reduxjs/toolkit";

const replySlice=createSlice({
    name:"replySlice",
    initialState:{
       
    },
    reducers:{
        replyToggleState:(state,action )=>{
            const id=action.payload;
            state[id]= !state[id];
          
        },
        // replyCloseState:(state)=>{
        //     state.replyToggle=false;
        // }
    }

});
export const{replyToggleState}= replySlice.actions;
export default replySlice.reducer;