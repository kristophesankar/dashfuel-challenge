import { createSlice } from "@reduxjs/toolkit";

export const activeItemSlice = createSlice({
  name: "activeItem",
  initialState: {
    isActive: false,
    itemObj: {
      id: '',
      title: ''
    }
  },
  reducers: {
    updateActiveItem: (state, action) => {
      state.itemObj = action.payload
   },
    setIsActive: (state, action) => {
      state.isActive = action.payload
   },
  },
});

export const { updateActiveItem, setIsActive } = activeItemSlice.actions;

export default activeItemSlice.reducer;
