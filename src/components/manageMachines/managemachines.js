import { Button } from "react-bootstrap";
import MachineForm from "../machineForm/machineForm";
import "./manageMachine.scss"
import { nanoid } from 'nanoid'
import { useSelector, useDispatch } from "react-redux"
import { addCategory, deleteCategory } from "../../redux/actions"

const ManageMachines = () => {
  const machineCategList = useSelector(state => state.categoryReducer)
  const dispatch = useDispatch()

  // Add a new machine category
  const machineAdd = () => {
    dispatch(addCategory({id: nanoid(), name: "", typeName: "", form: [{ id: nanoid(), type: "Small text", value: "" }]}))
  }

  // Delete a machine category
  const machineDelete = (deltId) => {
    dispatch(deleteCategory(deltId))
  }

  return <div className="manageMachnineCntr">
    {
      machineCategList.length > 0 &&
        machineCategList.map(machine => {
          return <div key={"machineType" + machine.id}>
            <MachineForm 
              machineId={machine.id}
              machineData={machine}
              machineForm={machine.form}
              typeName={machine.typeName}
              name={machine.name}
              deleteMachine={(machineId) => machineDelete(machineId)}
            />
          </div>
        })
    }

    {/* Add a new machine category */}
    <Button variant="primary" className="addBtn" onClick={machineAdd}>Add new type</Button>
  </div>
}

export default ManageMachines; 