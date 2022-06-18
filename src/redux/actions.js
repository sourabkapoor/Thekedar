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

export const changeCategoryFormDt = (categoryId, formId, data) => {
  return {
    type: "EDIT_CATEGORY_FORM",
    payload: {id: categoryId, formId, data}
  }
}