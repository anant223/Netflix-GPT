import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slice/authSlice";
import langSlice from "../slice/langSlice";
import searchSlice from "../slice/searchSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        lang: langSlice,
        search: searchSlice
    }
})

export default store