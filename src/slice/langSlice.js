import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    value: "en"
}
const langSlice = createSlice({
        name: "lang",
        initialState,
        reducers :{
            choosenLang : (state, action) =>{
                state.value = action.payload
            }
        }
})

export const {choosenLang} = langSlice.actions;
export default langSlice.reducer