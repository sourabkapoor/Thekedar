const state = []

const machineReducer = (initialState = state, action) => {
  switch(action.type) {
    // accepts the machine data
    case "ADD_MACHINE":
      return [...initialState, action.payload.newMachine]

    // accepts the machine id
    case "REMOVE_MACHINE":
      var filteredMachines = initialState.filter(machine => machine.id !== action.payload.machineId)
      return [...filteredMachines]

    // accepts updateId & value & machineId
    case "UPDATE_MACHINE":
      if(action.payload.machineId !== undefined) {
        var filtermachineIndex = initialState.findIndex(categor => categor.id === action.payload.machineId)
        initialState[filtermachineIndex].form.map(item => {
          if(item.id === action.payload.updateId)
            item.value = action.payload.value
        })
      }
      else {
        var filterTypeIndex = initialState.findIndex(categor => categor.name.id === action.payload.updateId)
        initialState[filterTypeIndex].name.value = action.payload.value
      }
      return [...initialState]

    default: 
      return initialState
  }
}

export default machineReducer