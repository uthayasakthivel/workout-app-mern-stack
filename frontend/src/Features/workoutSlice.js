import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  workouts: [],
}

export const counterSlice = createSlice({
  name: "workout",
  initialState,
  reducers: {
    getWorkout: (state, action) => {
      state.workouts = action.payload // Update workouts array with new data
    },
    deleteWorkout: (state, action) => {
      state.workouts = state.workouts.filter(
        (workout) => workout._id !== action.payload
      )
    },
  },
})

// Action creators are generated for each case reducer function
export const { getWorkout, deleteWorkout } = counterSlice.actions

export default counterSlice.reducer
