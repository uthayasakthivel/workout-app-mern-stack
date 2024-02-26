import express from "express"
import mongoose from "mongoose"
import workoutRouter from "./routes/workout.js"
import cors from 'cors'


const app = express()

// Enable all CORS requests
app.use(cors());

// Your other middleware and routes...


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
  .connect(
    "mongodb+srv://uthayasakthivel8:Uthaya241390@workout-app.3cvv0x1.mongodb.net/?retryWrites=true&w=majority&appName=workout-app"
  )
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
