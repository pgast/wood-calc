import * as actionTypes from './actionTypes';


// ADD ITEM TO LIST
export const addItem = (itemInfo) => {
  return {
    type: actionTypes.ADD_ITEM,
    payload: itemInfo
  }
}

// DELETE ITEM FROM LIST
export const deleteItem = (itemIndex) => {
  return {
    type: actionTypes.DELETE_ITEM,
    payload: itemIndex
  }
}

// CLEAR LIST
export const clearList = () => {
  return {
    type: actionTypes.CLEAR_LIST,
  }
}

// TOGGLE EDIT ITEM
export const editItem = (itemIndex) => {
  return {
    type: actionTypes.EDIT_ITEM,
    payload: itemIndex
  }
}

// UPDATE ITEM
export const updateItem = (itemInfo) => {
  return {
    type: actionTypes.UPDATE_ITEM,
    payload: itemInfo
  }
}

// TOGGLE VIEW
export const toggleView = (view) => {
  return {
    type: actionTypes.TOGGLE_VIEW,
    payload: view
  }
}

// UPDATE WOOD TYPE
export const updateWood = (woodInfo) => {
  return {
    type: actionTypes.UPDATE_WOOD,
    payload: woodInfo
  }
}

// GET RESULT
export const getResult = () => {
  return {
    type: actionTypes.GET_RESULT,
  }
}
