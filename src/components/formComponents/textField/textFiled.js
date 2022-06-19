import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

const TextFiled = (props) => {
  const [value, setvalue] = useState(props.value)
  
  const [Fieldtype, setFieldType] = useState("text")

  useEffect(() => {
    setFieldType(props.type === "Small text" ? "text" : props.type === "Long text" ? "textArea" : props.type === "Date" ? "date" : "number")
  }, [])

  return <Form.Group className="mb-2">
    <Form.Label>{props.formLabel}</Form.Label>
    <Form.Control
      id={props.id}
      type={Fieldtype} 
      value={value}
      placeholder="Object title" 
      onChange={(e) => {
        setvalue(e.target.value)
        props.inputChange(e)
      }}
    />
  </Form.Group>
}

export default TextFiled;