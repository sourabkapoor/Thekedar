import { useEffect, useState } from "react"
import { Form } from "react-bootstrap"
import AddFieldBtn from "../formComponents/addFieldBtn/addFieldBtn"
import InputTypeDropDown from "../formComponents/inputTypeDropDown/inputTypeDropDown"
import TextFiled from "../formComponents/textField/textFiled"
import "./machineForm.scss"
import { nanoid } from 'nanoid'
import { useDispatch } from "react-redux"
import { editCategoryForm, deleteCategoryForm, changeCategoryTypeName, changeCategoryName, changeCategoryFormDt } from "../../redux/actions"

const MachineForm = (props) => {
  const dispatch = useDispatch()

  const [name, setname] = useState(props.name)
  const [typeName, setTypeName] = useState(props.typeName)
  const [formFields, setFormFields] = useState(props.machineData.form)

  // use Effect to update the view of form dt.
  useEffect(()=> {
    setFormFields(props.machineData.form)
  }, [props.machineData.form])

  const inputChange = (e) => {
    let textvalue = e.target.value
    if(e.target.id === "objectType") {
      setTypeName(textvalue)
      dispatch(changeCategoryTypeName(props.machineId, textvalue))
    }
    else if(e.target.id === "objectTitle") {
      setname(textvalue)
      dispatch(changeCategoryName(props.machineId, textvalue))
    }
  }

  const fieldValueChange = (fieldId, newValue, type) => {
    dispatch(changeCategoryFormDt(props.machineId, fieldId, newValue, type))
  }

  const addNewField = (type) => {
    dispatch(editCategoryForm(props.machineId, {id: nanoid(), type: type, value: ""}))
  }

  const fieldRemove = (removeFieldId) => {
    dispatch(deleteCategoryForm(props.machineId, removeFieldId))
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
          type="Small text"
          formLabel="Object type"
          value={typeName}
          inputChange={inputChange}
        />

        {/* object title */}
        <TextFiled 
          id="objectTitle"
          type="Small text"
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
                    text={field.value}
                    fieldId={field.id}
                    fieldType={field.type}
                    valueChange={(valueId, changedValue, type) => fieldValueChange(valueId, changedValue.value, type)}
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