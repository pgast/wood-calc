import * as actionTypes from '../actions/actionTypes';
import {
  addItem,
  deleteItem,
  clearList,
  editItem,
  updateItem,
  toggleView,
  updateWood,
  getResult
} from './utilities';

const initialState = {
  result: 0,
  numDePiezas: 0,
  piezas: [
    {nombre: 'Pieza 1', cantidad: 2, ancho:2, alto:3, sentidoVeta: 'vertical', edit: false},
    {nombre: 'Pieza 1', cantidad: 2, ancho:2, alto:3, sentidoVeta: 'vertical', edit: false},
    {nombre: 'Pieza 1', cantidad: 2, ancho:2, alto:3, sentidoVeta: 'vertical', edit: false},
  ],
  tipoMadera: {
    espesor: '1/4',
    madera: 'Parota',
    desperdicio: '10'
  },
  display: 'woodConfigView',
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case actionTypes.ADD_ITEM: return addItem(state, action);
    case actionTypes.DELETE_ITEM: return deleteItem(state, action);
    case actionTypes.CLEAR_LIST: return clearList(state);
    case actionTypes.EDIT_ITEM: return editItem(state, action);
    case actionTypes.UPDATE_ITEM: return updateItem(state, action);
    case actionTypes.TOGGLE_VIEW: return toggleView(state, action);
    case actionTypes.UPDATE_WOOD: return updateWood(state, action);
    case actionTypes.GET_RESULT: return getResult(state);
    default: return state;
  }
};

export default reducer;
