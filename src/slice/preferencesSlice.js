import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "en",
  id: null,
};

const preferencesSlice = createSlice({
  name: "preferences",
  initialState,
  reducers: {
    choosenLang: (state, action) => {
      state.value = action.payload;
    },
    choosenGener: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { choosenLang, choosenGener } = preferencesSlice.actions;
export default preferencesSlice.reducer;
