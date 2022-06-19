import { nanoid } from 'nanoid'

const state = [
  { id: nanoid(), name: "", typeName: "", form: [{ id: nanoid(), type: "Small text", value: "" }] }
]

const categoryReducer = (initialState = state, action) => {
  switch(action.type) {
    // Accepts machone object as payload.
    case "ADD_CATEGORY":
      return [...initialState, action.payload]
 
    // Accepts remove id as payload 
    case "REMOVE_CATEGORY":
      let filteredArr = initialState.filter(category => category.id !== action.payload)
      return [...filteredArr]

    // Accepts category id & string
    case "CHANGE_CATEGORY_NAME":
      let nameIndex = initialState.findIndex(categor => categor.id === action.payload.id)
      initialState[nameIndex].name = action.payload.name
      return [...initialState]
    
    // Accepts category id & string
    case "CHANGE_CATEGORY_TYPE_NAME":
      let typeNameIndex = initialState.findIndex(categor => categor.id === action.payload.id)
      initialState[typeNameIndex].typeName = action.payload.typeName
      return [...initialState]
    
    // Accepts 2 arguments: category Id & form data.
    case "ADD_CATEGORY_FORM":
      let itemIndex = initialState.findIndex(categor => categor.id === action.payload.id)
      initialState[itemIndex].form.push(action.payload.formData)
      return [...initialState]

    // Accepts 2 category Id & form item id
    case "DELETE_CATEGORY_FORM":
      let categoryIndex = initialState.findIndex(categor => categor.id === action.payload.id)
      let newDt = initialState[categoryIndex].form.filter(formItem => formItem.id !== action.payload.formItemId)
      initialState[categoryIndex].form = newDt
      return [...initialState]

    // Accepts 4: category Id, form Id, value & type
    case "EDIT_CATEGORY_FORM":
      let formCategoryIndex = initialState.findIndex(categor => categor.id === action.payload.id)
      let formDtIndex = initialState[formCategoryIndex].form.findIndex(formItem => formItem.id === action.payload.formId)
      initialState[formCategoryIndex].form[formDtIndex].value = action.payload.data
      initialState[formCategoryIndex].form[formDtIndex].type = action.payload.type
      return [...initialState]

    // Accepts 1: machine type
    case "GET_MACHINES":
      let filteredMachines = initialState.filter(machine => machine.typeName === action.payload.type)
      return [...filteredMachines]
    
    default:
      return initialState
    
  }
}

export default categoryReducer;