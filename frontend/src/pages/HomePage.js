import { useState, useEffect } from "react"
import WorkoutCards from "../Components/WorkoutCards"
import Row from "react-bootstrap/Row"
import "../App.css"
import { useSelector, useDispatch } from "react-redux"
import { getWorkout } from "../Features/workoutSlice"
function HomePage() {
  const allWorkouts = useSelector((state) => state.workout.workouts)
  console.log(allWorkouts)
  const dispatch = useDispatch()

  // const [workoutss, setWorkouts] = useState([])
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts")
      const json = await response.json()
      if (response.status === 200) {
        dispatch(getWorkout(json))
        // setWorkouts(json)
      }
    }
    fetchWorkouts()
  }, [])

  return (
    <div className="App">
      <div className="wrapper">
        <Row xs={1} md={4}>
          {allWorkouts.map((workout) => (
            <WorkoutCards key={workout._id} workout={workout} />
          ))}
        </Row>
      </div>
    </div>
  )
}

export default HomePage
