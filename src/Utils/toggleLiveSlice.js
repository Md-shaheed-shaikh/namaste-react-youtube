import { createSlice } from "@reduxjs/toolkit";

const toggleLiveSlice=createSlice({
    name:"toggleLive",
    initialState:{
            isToggleLive: false,
    },
    reducers:{
        toggleLivebtn:(state)=>{
                state.isToggleLive=!state.isToggleLive
        }
    }
})
export const{toggleLivebtn}=toggleLiveSlice.actions;
export default toggleLiveSlice.reducer;
