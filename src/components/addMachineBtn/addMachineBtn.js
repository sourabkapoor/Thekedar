import { Dropdown, DropdownButton, Button } from "react-bootstrap"
import { useLocation } from "react-router-dom"

const AddMachineBtn = (props) => {
  const location = useLocation()

  const addField = (fieldType) => {
    props.newField(fieldType)
  }

  return location.pathname === "/" ? <DropdownButton className="mt-5 d-flex justify-content-center" id="dropdown-basic-button" title="Add field">    
    <Dropdown.Item onClick={() => addField("Date")}>Date</Dropdown.Item>
  </DropdownButton> :
  <Button className="d-flex justify-content-center addBtn" onClick={() => props.addMachine()}>Add field</Button>
}

export default AddMachineBtn