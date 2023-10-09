import ControlledInputs from "./tutorial/05-controlled-inputs/01-controlled-inputs-component"
import ControlledInputChallenge from "./tutorial/05-controlled-inputs/02-controlled-inputs-challenge-component"
import MultipleInputs from "./tutorial/05-controlled-inputs/03-multiple-inputs-component"
import OtherInputs from "./tutorial/05-controlled-inputs/04-otherInputs-component"
import UncontrolledInputs from "./tutorial/05-controlled-inputs/05-formData-component"

function App() {
  return (
    <div className='container'>
      <UncontrolledInputs />
      <OtherInputs />
      <MultipleInputs />
      <ControlledInputs />
      <ControlledInputChallenge />
    </div>
    )
}

export default App
