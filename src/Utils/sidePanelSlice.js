import { createSlice } from "@reduxjs/toolkit";

const sidePanelSlice=createSlice({
    name:"sidePanelSlice",
    initialState:{
        isToggle:true
    },
    reducers:{
        toggleState:(state)=>{
            state.isToggle= !state.isToggle;
            console.log("in slice",state.isToggle);
        },
        closeState:(state)=>{
            state.isToggle=false;
        }
    }

});
export const{toggleState,closeState}= sidePanelSlice.actions;
export default sidePanelSlice.reducer;