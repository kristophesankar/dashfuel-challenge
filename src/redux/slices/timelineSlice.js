import { createSlice } from "@reduxjs/toolkit";
import generateFakeData from "../../lib/generate-fake-data";

const data = generateFakeData(); // { groups: {}, items: {} }
export const timelineSlice = createSlice({
  name: "timeline",
  initialState: data,
  reducers: {
    addItem: (state, action) => {
      let length = state.items.length;
      const newItem = {...action.payload, id: length}
      state.items = [...state.items, newItem]
    },
    editItem: (state, action) => {
      const newItem = {...action.payload}
      state.items = state.items.map((element)  => {
        if (element.id === newItem.id) {
          element.title = newItem.title
        }
        return element
      })
    },
    deleteItem: (state, action) => {
      const newItem = {...action.payload}
      state.items = state.items.filter((element)  => {
        return element.id !== newItem.id
      })
    },
  },
});

export const { addItem,editItem,deleteItem } = timelineSlice.actions;

export default timelineSlice.reducer;
