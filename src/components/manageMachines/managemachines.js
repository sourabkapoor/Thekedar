import { Button } from "react-bootstrap";
import MachineForm from "../machineForm/machineForm";
import "./manageMachine.scss"

const ManageMachines = () => {

  return <div className="manageMachnineCntr">
    <MachineForm />
    
    <Button variant="primary" className="addBtn">Add new machine</Button>
  </div>
}

export default ManageMachines;