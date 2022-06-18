import { useState } from "react"
import { Form } from "react-bootstrap"
import AddFieldBtn from "../formComponents/addFieldBtn/addFieldBtn"
import InputTypeDropDown from "../formComponents/inputTypeDropDown/inputTypeDropDown"
import TextFiled from "../formComponents/textField/textFiled"
import "./machineForm.scss"
import { nanoid } from 'nanoid'

const MachineForm = (props) => {
  const [name, setname] = useState("")
  const [typeName, setTypeName] = useState("")
  const [formFields, setFormFields] = useState([ { "id": nanoid(), "type": "Small text" } ])

  const inputChange = (e) => {
    let textvalue = e.target.value
    if(e.target.id === "objectType") {
      setTypeName(textvalue)
    }
    else if(e.target.id === "objectTitle") {
      setname(textvalue)
    }
  }

  const fieldValueChange = (newValue) => {
    console.log("value is: ", newValue)
    return true
  }

  const addNewField = (type) => {
    setFormFields([...formFields, {id: nanoid(), type: type}])
  }

  const fieldRemove = (removeFieldId) => {
    setFormFields(formFields.filter(fields => fields.id !== removeFieldId))
  }


  return <div className="machineFormContr">
    <div className="machineHeadingCntr">
      <div style={{fontSize: 18}}>{typeName}</div>

      <div className="deleteBtn" onClick={() => props.deleteMachine(props.machineId)}>&#x2715;</div>
    </div>
    <div className="machineBodyCntr">
      <Form>
        {/* Object type */}
        <TextFiled 
          id="objectType"
          formLabel="Object type"
          value={typeName}
          inputChange={inputChange}
        />

        {/* object title */}
        <TextFiled 
          id="objectTitle"
          formLabel="Object title"
          value={name}
          inputChange={inputChange}
        />

        { formFields.length > 0 &&
          <Form.Group className="mb-2">
            <Form.Label>Fields</Form.Label>
  
            { formFields.map(field => {
                return <div key={"formField" + field.id}>
                  <InputTypeDropDown 
                    text=""
                    fieldId={field.id}
                    fieldType={field.type}
                    valueChange={(changedValue) => fieldValueChange(changedValue.value)}
                    removeFiled={(id) => fieldRemove(id)}
                  />
                </div>
              })
            }
          </Form.Group>
        }
        
        {/* Add a new field */}
        <AddFieldBtn 
          newField={(fieldType) => addNewField(fieldType)}
        />

      </Form>
    </div>
  </div>
}

export default MachineForm