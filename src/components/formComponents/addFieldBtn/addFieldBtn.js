import { Dropdown, DropdownButton } from "react-bootstrap"

const AddFieldBtn = (props) => {

  const addField = (fieldType) => {
    props.newField(fieldType)
  }

  return <DropdownButton className="mt-5 d-flex justify-content-center" id="dropdown-basic-button" title="Add field">
    <Dropdown.Item onClick={() => addField("Small text")}>Small text</Dropdown.Item>
    <Dropdown.Item onClick={() => addField("Long text")}>Long text</Dropdown.Item>
    <Dropdown.Item onClick={() => addField("Number")}>Number</Dropdown.Item>
    <Dropdown.Item onClick={() => addField("Date")}>Date</Dropdown.Item>
  </DropdownButton>
}

export default AddFieldBtn