import express from "express"
import mongoose from "mongoose"
import workoutRouter from "./routes/workout.js"
import cors from 'cors'
import dotenv from "dotenv"

const app = express()
dotenv.config()
// Allow requests from specific origins
app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your frontend URL
  })
)

//Global Middleware
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

//Global module
app.use(express.json())

//Routes
app.use("/api/workouts", workoutRouter)

//connect to DB
mongoose
  .connect(`${process.env.MONGODB_URL}`)
  .then(() => {
    //Listening on port
    app.listen(8000, () => {
      console.log("Server running at 8000")
    })
  })
  .catch((error) => console.log(error.message))

// app.get("/", (req, res) => {
//   res.send("Hello there !")
// })
