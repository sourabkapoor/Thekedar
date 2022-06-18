import { Button } from "react-bootstrap";
import MachineForm from "../machineForm/machineForm";
import "./manageMachine.scss"
import { nanoid } from 'nanoid'
import { useSelector, useDispatch } from "react-redux"
import { addMachine, deleteMachine } from "../../redux/actions";

const ManageMachines = () => {
  const machineList = useSelector(state => state.machineReducer)
  const dispatch = useDispatch()

  // delete a machine category
  const machineAdd = () => {
    dispatch(addMachine({"id": nanoid()}))
  }

  // Add a new machine category
  const machineDelete = (deltId) => {
    dispatch(deleteMachine(deltId))
  }

  return <div className="manageMachnineCntr">
    { 
      machineList.length > 0 &&
        machineList.map(machine => {
          return <div key={"machineType" + machine.id}>
            <MachineForm 
              machineId={machine.id}
              deleteMachine={(machineId) => machineDelete(machineId)}
            />
          </div>
        })
    }
    
    <Button variant="primary" className="addBtn" onClick={machineAdd}>Add new machine</Button>
  </div>
}

export default ManageMachines;