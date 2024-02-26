import express from "express"
const router = express.Router()
import {
  createWorkout,
  deleteWorkout,
  getWorkout,
  getWorkouts,
  updateWorkout,
} from "../controllers/workoutcontroller.js"

//Get all workouts
router.get("/", getWorkouts)

//Get a single workout
router.get("/:id", getWorkout)

//Post workout
router.post("/", createWorkout)

//Delete workout
router.delete("/:id", deleteWorkout)

//Update a workout
router.patch("/:id", updateWorkout)

export default router
