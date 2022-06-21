export const addCategory = (newMachine) => {
  return {
    type: "ADD_CATEGORY",
    payload: newMachine
  }
}

export const deleteCategory = (deleteMachineId) => {
  return {
    type: "REMOVE_CATEGORY",
    payload: deleteMachineId
  }
}

export const editCategoryForm = (categoryId, formData) => {
  return {
    type: "ADD_CATEGORY_FORM",
    payload: {"id": categoryId, "formData": formData}
  }
}

export const deleteCategoryForm = (categoryId, formId) => {
  return {
    type: "DELETE_CATEGORY_FORM",
    payload: {id: categoryId, formItemId: formId}
  }
}

export const changeCategoryName = (categoryId, name) => {
  return {
    type: "CHANGE_CATEGORY_NAME",
    payload: {id: categoryId, name}
  }
}

export const changeCategoryTypeName = (categoryId, typeName) => {
  return {
    type: "CHANGE_CATEGORY_TYPE_NAME",
    payload: {id: categoryId, typeName}
  }
}

export const changeCategoryFormDt = (categoryId, formId, data, type) => {
  return {
    type: "EDIT_CATEGORY_FORM",
    payload: {id: categoryId, formId, data, type}
  }
}

export const getMachines = (type) => {
  return {
    type: "GET_MACHINES",
    payload: { type }
  }
}

export const addMachine = (data) => {
  return {
    type: "ADD_MACHINE",
    payload: {newMachine: data}
  }
}

export const deleteMachine = (machineId) => {
  return {
    type: "REMOVE_MACHINE",
    payload: {machineId}
  }
}

export const updateMachine = (updateId, value, machineId) => {
  return {
    type: "UPDATE_MACHINE",
    payload: {updateId, value, machineId}
  }
}

export const transformMachine = (machines) => {
  return {
    type: "TRANSFORM_MACHINE",
    payload: machines
  }
}