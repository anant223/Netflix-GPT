import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slice/authSlice";
import preferencesSlice from "../slice/preferencesSlice";
import searchSlice from "../slice/searchSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    preferences: preferencesSlice,
    search: searchSlice,
  },
});

export default store