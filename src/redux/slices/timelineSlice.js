import { createSlice } from "@reduxjs/toolkit";
import generateFakeData from "../../lib/generate-fake-data";

const data = generateFakeData(); // Initialize the data with generated fake data.
export const timelineSlice = createSlice({
  name: "timeline",
  initialState: data, // Initialize state using the generated data.
  reducers: {
    /**
     * Adds a new item to the timeline.
     * @param {object} state - The current state of the timeline.
     * @param {object} action - The action containing the item to add.
     */
    addItem: (state, action) => {
      let length = state.items.length;
      const newItem = { ...action.payload, id: length };
      state.items = [...state.items, newItem];
    },

    /**
     * Edits an existing item in the timeline.
     * @param {object} state - The current state of the timeline.
     * @param {object} action - The action containing the updated item.
     */
    editItem: (state, action) => {
      const newItem = { ...action.payload };
      state.items = state.items.map((element) => {
        if (element.id === newItem.id) {
          element.title = newItem.title;
        }
        return element;
      });
    },

    /**
     * Deletes an item from the timeline.
     * @param {object} state - The current state of the timeline.
     * @param {object} action - The action containing the item to delete.
     */
    deleteItem: (state, action) => {
      const newItem = { ...action.payload };
      state.items = state.items.filter((element) => {
        return element.id !== newItem.id;
      });
    },
  },
});

export const { addItem, editItem, deleteItem } = timelineSlice.actions;

export default timelineSlice.reducer;
