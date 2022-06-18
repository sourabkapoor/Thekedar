export const addMachine = (newMachine) => {
  return {
    type: "ADD_MACHINE",
    payload: newMachine
  }
}

export const deleteMachine = (deleteMachineId) => {
  return {
    type: "REMOVE_MACHINE",
    payload: deleteMachineId
  }
}