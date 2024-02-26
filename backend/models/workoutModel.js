import mongoose from "mongoose"
const { Schema } = mongoose // Importing model from mongoose

const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
)

const Workout = mongoose.model("Workout", workoutSchema) // Creating a Mongoose model from the schema

export default Workout
