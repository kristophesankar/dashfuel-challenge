import { createSlice } from "@reduxjs/toolkit";

// This slice purpose is to really update the edit modal

export const activeItemSlice = createSlice({
  name: "activeItem",
  initialState: {
    isActive: false, // Initial state for isActive, initially set to false.
    itemObj: {
      id: "",
      title: "",
    },
  },
  reducers: {
    /**
     * Updates the item in the strre. This is used to show the item being edited.
     * @param {object} state - The current state of activeItem.
     * @param {object} action - The action containing the new active item.
     */
    updateActiveItem: (state, action) => {
      state.itemObj = action.payload;
    },

    /**
     * Sets the active item.
     * @param {object} state - The current state of activeItem.
     * @param {object} action - The action containing the new isActive value.
     */
    setIsActive: (state, action) => {
      state.isActive = action.payload;
    },
  },
});

export const { updateActiveItem, setIsActive } = activeItemSlice.actions;

export default activeItemSlice.reducer;
