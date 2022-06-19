import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addMachine, deleteMachine, updateMachine } from "../../redux/actions";
import AddMachineBtn from "../addMachineBtn/addMachineBtn";
import TextFiled from "../formComponents/textField/textFiled";
import { nanoid } from 'nanoid'

const Machine = ({type}) => {
  const form = useSelector(state => state.categoryReducer)
  
  const machines = useSelector(state => state.machineReducer)
  
  const dispatch = useDispatch()
  const [machineList, setMachineList] = useState(machines)
  
  const [categoryForm, setCategoryForm] = useState(null)

  useEffect(() => {
    // get all machines form of same typename
    setMachineList(machines.filter(machine => machine.typeName.lable === type))
    setCategoryForm(form.filter(machine => machine.typeName === type))
  }, [type])

  const machineAdd = () => {
    var newMachine = {}
    newMachine.id = nanoid()
    newMachine.name = { id: nanoid(), lable: categoryForm[0].name, value: "" }
    newMachine.typeName = { id: nanoid(), lable: categoryForm[0].typeName, value: "" }
    newMachine.form = []
    categoryForm[0].form.map(formItem => newMachine.form = [...newMachine.form, {
        id: nanoid(),
        type: formItem.type,
        lable: formItem.value,
        value: ""
      }]
    ) 
    dispatch(addMachine(newMachine))
    var filteredMachines = machines.filter(machine => machine.typeName.lable === type)
    setMachineList([...filteredMachines, newMachine])
  }

  const machineDelete = (deleteId) => {
    dispatch(deleteMachine(deleteId))
    var remainingMachines = machines.filter(machine => machine.id !== deleteId)
    setMachineList([...remainingMachines])
  }

  const inputChange = (e, id, field, machineId) => {
    if(field === "name") {
      dispatch(updateMachine(id, e.target.value))
    }
    else {
      dispatch(updateMachine(id, e.target.value, machineId))
    }
  }

  return <div className="manageMachnineCntr">
    { machineList.length > 0 &&
      machineList.map(machine => {
        return <div key={machine.id} className="machineFormContr">
          <div className="machineHeadingCntr">
            <div style={{fontSize: 18}}>{machine.typeName.lable}</div>

            <div className="deleteBtn" onClick={() => machineDelete(machine.id)}>&#x2715;</div>
          </div>
          <div className="machineBodyCntr">
            <TextFiled 
                id={machine.id}
                type={"Small text"}
                formLabel={machine.name.lable}
                value={machine.name.value}
                inputChange={(e) => inputChange(e, machine.name.id, "name")}
              />
            {
              machine.form.map(formItem => {
                return <div key={"machineView" + formItem.id}>
                  <TextFiled 
                    id={formItem.id}
                    type={formItem.type}
                    formLabel={formItem.lable}
                    value={formItem.value}
                    inputChange={(e) => inputChange(e, formItem.id, "form", machine.id)}
                  />
                </div>
              })
            }
          </div>
        </div>
      })
    }

    <AddMachineBtn addMachine={() => machineAdd()}/>
  </div>
}

export default Machine; 