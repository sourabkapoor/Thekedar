import { Form } from "react-bootstrap";

const TextFiled = (props) => {

  return <Form.Group className="mb-2">
    <Form.Label>{props.formLabel}</Form.Label>
    <Form.Control
      id={props.id}
      type="text" 
      value={props.value}
      placeholder="Object title" 
      onChange={props.inputChange}
    />
  </Form.Group>
}

export default TextFiled;