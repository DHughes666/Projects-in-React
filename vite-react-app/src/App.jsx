import ControlledInputs from "./tutorial/05-controlled-inputs/01-controlled-inputs-component"
import ControlledInputChallenge from "./tutorial/05-controlled-inputs/02-controlled-inputs-challenge-component"
import MultipleInputs from "./tutorial/05-controlled-inputs/03-multiple-inputs-component"

function App() {
  return (
    <div className='container'>
      <MultipleInputs />
      <ControlledInputs />
      <ControlledInputChallenge />
    </div>
    )
}

export default App
