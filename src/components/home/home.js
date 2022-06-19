import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addMachine, deleteMachine, updateMachine } from "../../redux/actions";
import AddMachineBtn from "../addMachineBtn/addMachineBtn";
import TextFiled from "../formComponents/textField/textFiled";
import { nanoid } from 'nanoid'

const Home = () => {
  const form = useSelector(state => state.categoryReducer)
  const machines = useSelector(state => state.machineReducer)

  const dispatch = useDispatch()

  const [machineList, setMachineList] = useState(machines)
  

  const machineAdd = (machineType) => {
    var machineForm = form.filter(category => category.typeName === machineType)
    var newMachineToAdd = {}
    newMachineToAdd.id = nanoid()
    newMachineToAdd.name = { id: nanoid(), lable: machineForm[0].name, value: ""}
    newMachineToAdd.typeName = { id: nanoid(), lable: machineForm[0].typeName, value:"" }
    newMachineToAdd.form = []
    machineForm[0].form.map(formItem => newMachineToAdd.form = [...newMachineToAdd.form, {
      id: nanoid(),
      type: formItem.type,
      lable: formItem.value,
      value: ""
    }])
    dispatch(addMachine(newMachineToAdd))
    setMachineList([...machineList, newMachineToAdd])
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

    <AddMachineBtn 
      machineTypes={form}
      addMachine={(machineType) => machineAdd(machineType)}  
    />
  </div>
}

export default Home;