// src/store/authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  items: number[];
}

const initialState: AuthState = {
  items: [],
};

const compareSlice = createSlice({
  name: "compareItems",
  initialState,
  reducers: {
    setItem: (state, action: PayloadAction<number>) => {
      state.items = [...state.items, action.payload];
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item !== action.payload);
    },
    clearItems: (state) => {
      state.items = [];
    },
  },
});

export const { setItem, deleteItem, clearItems } = compareSlice.actions;
export default compareSlice.reducer;
