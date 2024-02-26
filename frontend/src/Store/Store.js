import { configureStore } from "@reduxjs/toolkit"
import workoutReducer from "../Features/workoutSlice"

export const store = configureStore({
  reducer: { workout: workoutReducer },
})
