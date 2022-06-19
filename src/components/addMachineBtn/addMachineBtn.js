import { Dropdown, DropdownButton, Button } from "react-bootstrap"
import { useLocation } from "react-router-dom"

const AddMachineBtn = (props) => {
  const location = useLocation()

  const addNewField = (machinetype) => {
    props.addMachine(machinetype)
  }

  return location.pathname === "/" ?
  <DropdownButton className="d-flex justify-content-center addBtn" id="dropdown-basic-button" title="Add field">    
    { props.machineTypes.map(machine => {
      return <div key={"machineTypeBtn" + machine.id}>
        <Dropdown.Item onClick={() => addNewField(machine.typeName)}>{machine.typeName}</Dropdown.Item>
      </div>
    })
    }
  </DropdownButton> 
  :
  <Button className="d-flex justify-content-center addBtn" onClick={() => props.addMachine()}>Add field</Button>
}

export default AddMachineBtn