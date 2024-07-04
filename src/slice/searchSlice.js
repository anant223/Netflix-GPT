import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  req: null,
};
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers : {
    searching : (state, action) =>{
        state.req =  action.payload
    } 
  }
});

export const {searching} = searchSlice.actions;
export default searchSlice.reducer
