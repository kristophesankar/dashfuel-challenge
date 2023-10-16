// setup redux
import { configureStore } from '@reduxjs/toolkit'
import timelineSlice from './slices/timelineSlice'
import activeItemSlice from './slices/activeItemSlice'

export const store = configureStore({
  reducer: {
    timeline: timelineSlice,
    activeItem:  activeItemSlice
  },
})
