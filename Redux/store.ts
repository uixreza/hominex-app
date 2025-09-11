// src/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slices/token";
import compareReducer from "./Slices/compareItems";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    compare: compareReducer,
  },
});

// Types for useDispatch & useSelector
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
