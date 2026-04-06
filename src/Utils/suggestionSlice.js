import { createSlice } from "@reduxjs/toolkit";

const suggestionSlice= createSlice({

    name:'suggestions',
    initialState:{
        
    },
    reducers:{
        cacheAction:(state,action)=>{
            return {...state,...action.payload}
        }
    }
});

export const {cacheAction} = suggestionSlice.actions;
export default suggestionSlice.reducer;