import Workout from "../models/workoutModel.js"
import mongoose from "mongoose"

//get workout
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 })
  if (workouts.length === 0) {
    return res.status(404).json({ error: "No workouts found !" })
  }
  res.status(200).json(workouts)
}

//get a single workout
const getWorkout = async (req, res) => {
  const id = req.params.id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" })
  }
  const workout = await Workout.findById(id)
  if (!workout) {
    return res.status(404).json({ error: "No such workout" })
  }
  res.status(200).json(workout)
}

//post workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body
  try {
    const workout = await Workout.create({ title, load, reps })
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({ error: "error.message" })
  }
}

//delete workout
const deleteWorkout = async (req, res) => {
  const id = req.params.id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" })
  }
  const workout = await Workout.findByIdAndDelete(id)
  if (!workout) {
    return res.status(404).json({ error: "No such workout" })
  }
  res.status(200).json(workout)
}

//update workout
const updateWorkout = async (req, res) => {
  const id = req.params.id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" })
  }
  const workout = await Workout.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  )
  if (!workout) {
    return res.status(404).json({ error: "No such workout" })
  }
  res.status(200).json(workout)
}

export { createWorkout, getWorkouts, getWorkout, deleteWorkout, updateWorkout }
