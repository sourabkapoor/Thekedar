import { nanoid } from 'nanoid'

const state = [
  { "id": nanoid() }
]

const machineReducer = (initialState = state, action) => {
  switch(action.type) {
    // Accepts machone object as payload.
    case "ADD_MACHINE":
      return [...initialState, action.payload]
    
    // Accepts remove id as payload 
    case "REMOVE_MACHINE":
      let filteredArr = initialState.filter(machine => machine.id !== action.payload)
      return filteredArr
    
    default:
      return initialState
    
  }
}

export default machineReducer;