import { useState, useEffect } from "react"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import { useNavigate } from "react-router-dom"
function AddNewWorkout() {
  const [validated, setValidated] = useState(false)
  const [title, setTitle] = useState("")
  const [load, setLoad] = useState("")
  const [reps, setReps] = useState("")
  const navigate = useNavigate()
  const workout = { title, load, reps }

  const handleSubmit = async (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
    try {
      const response = await fetch("/api/workouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(workout),
      })

      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.error)
      }

      console.log("Post created:", data)
    } catch (error) {
      console.error("Error:", error)
    }
  }

  useEffect(() => {
    if (validated) {
      navigate("/api/workouts/", { replace: true })
    }
  }, [validated])

  return (
    <div className="form-wrapper">
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="workout-form"
      >
        <Row className="mb-3 workout-form-row">
          <Form.Group as={Col} controlId="validationCustom01">
            <Form.Label>Workout Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Workout Name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please Enter workout name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="validationCustom02">
            <Form.Label>Loads in Kg</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Loads in Kg"
              value={load}
              onChange={(e) => setLoad(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please choose a Load.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="validationCustomUsername">
            <Form.Label>Reps Count</Form.Label>
            <Form.Control
              type="number"
              placeholder="Reps Count"
              aria-describedby="5"
              required
              value={reps}
              onChange={(e) => setReps(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please choose a Reps.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Button type="submit">Submit form</Button>
      </Form>
    </div>
  )
}

export default AddNewWorkout
