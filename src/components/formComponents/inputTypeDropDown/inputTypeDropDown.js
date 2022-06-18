import { InputGroup, Form, Dropdown, DropdownButton } from "react-bootstrap";
const { useState } = require("react");

const InputTypeDropDown = (props) => {
  const [activeType, setActive] = useState(props.fieldType);
  const [inputValue, setinputValue] = useState(props.text)

  const changeFieldtype = (newType) => {
    setActive(newType)
    setinputValue("")
  }

  const inputValueChange = (value) => {
    setinputValue(value.value)
    props.valueChange(props.fieldId, value)
  }

  return (
    <>
      <InputGroup className="mb-3">
        {  activeType === "Small text" ?
         <Form.Control 
            value={inputValue} 
            placeholder="Enter field name" 
            type="text" 
            onChange={(e) => inputValueChange(e.target)}
          />
          :
          activeType === "Long text" ?
          <Form.Control
            value={inputValue}
            placeholder="Enter field name" 
            type="textArea" 
            onChange={(e) => inputValueChange(e.target)}
          />
          :
          activeType === "Number" ?
          <Form.Control 
            value={inputValue} 
            placeholder="Enter field name" 
            type="number" 
            onChange={(e) => inputValueChange(e.target)}
          />
          :
          <Form.Control
            value={inputValue}
            placeholder="Enter field name" 
            type="date" 
            onChange={(e) => inputValueChange(e.target)}
          />

        }

        <DropdownButton
          variant="outline-secondary"
          title={activeType}
          id="formTypeSelect"
          align="end"
        >
          <Dropdown.Item onClick={() => changeFieldtype("Small text")}>
            Small text
          </Dropdown.Item>
          <Dropdown.Item onClick={() => changeFieldtype("Long text")}>
            Long text
          </Dropdown.Item>
          <Dropdown.Item onClick={() => changeFieldtype("Number")}>
            Number
          </Dropdown.Item>
          <Dropdown.Item onClick={() => changeFieldtype("Date")}>
            Date
          </Dropdown.Item>
          <Dropdown.Item onClick={() => props.removeFiled(props.fieldId)}>
            Remove
          </Dropdown.Item>
        </DropdownButton>
      </InputGroup>
    </>
  );
};

export default InputTypeDropDown;
