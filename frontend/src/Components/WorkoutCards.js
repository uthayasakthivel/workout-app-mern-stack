import React from "react"
import Card from "react-bootstrap/Card"
import { MdDelete } from "react-icons/md"
import { deleteWorkout } from "../Features/workoutSlice"
import { useDispatch } from "react-redux"
import { formatDistanceToNow } from "date-fns"
import "../App.css"
// import CreatedAtFormat from "./CreatedAtFormat"
const WorkoutCards = ({ workout }) => {
  const styles = {
    display: "flex",
    justifyContent: "space-between",
    cursor: "pointer",
  }
  const dispatch = useDispatch()
  const ID = workout._id
  const time = workout.createdAt

  function formatCreatedAt(time) {
    const distance = formatDistanceToNow(new Date(time), {
      addSuffix: true,
    })
    return `created ${distance}`
  }

  const handleDelete = async () => {
    try {
      const response = await fetch("/api/workouts/" + workout._id, {
        method: "DELETE",
      })

      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.error)
      }

      dispatch(deleteWorkout(ID))
      console.log("Post Deleted:", data)
    } catch (error) {
      console.error("Error:", error)
    }
  }

  return (
    <div>
      <Card className="shadow-sm p-3 mb-5 rounded card-style">
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title style={styles}>
            {workout.title}
            <MdDelete onClick={handleDelete} />
          </Card.Title>

          <Card.Text>
            <strong>Load : </strong>
            {workout.load}
          </Card.Text>
          <Card.Text>
            <strong>Reps : </strong>
            {workout.reps}
          </Card.Text>
          <Card.Text>
            <strong>Created By : </strong>
            {formatCreatedAt(time)}
          </Card.Text>
          {/* <Card.Text></Card.Text> */}
        </Card.Body>
      </Card>
    </div>
  )
}

export default WorkoutCards
