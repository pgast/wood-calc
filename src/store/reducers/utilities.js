// ADD ITEM TO LIST
export const addItem = (state, payload) => {
  let { nombre, cantidad, ancho, alto, sentidoVeta } = payload.payload;
  let piezasCopy = [...state.piezas];
  piezasCopy[piezasCopy.length] = { nombre, cantidad, ancho, alto, sentidoVeta, edit: false };

  return {
    ...state,
    piezas: piezasCopy
  }
}

// DELETE ITEM FROM LIST
export const deleteItem = (state, payload) => {
  return {
    ...state,
    piezas: [...state.piezas].filter((name, index) => index !== payload.payload)
  }
}

// CLEAR LIST FROM ALL ITEMS
export const clearList = (state) => {
  return {
    ...state,
    piezas: []
  }
}

// TOGGLE EDIT MODE FOR ITEMS
export const editItem = (state, payload) => {
  let editingItems = [...state.piezas];

  for (let i = 0; i<editingItems.length; i++) {
    editingItems[i]['edit'] = false;
  }

  editingItems[payload.payload]['edit'] = editingItems[payload.payload]['edit'] ? false : true;

  return {
    ...state,
    piezas: editingItems,
  }
}

// UPDATE ITEM INFO
export const updateItem = (state, payload) => {
  let { nombre, cantidad, ancho, alto, sentidoVeta, itemIndex } = payload.payload;
  let newItem = { nombre, cantidad, ancho, alto, sentidoVeta, edit: false };
  let piezasCopy = [...state.piezas];
  piezasCopy[itemIndex] = newItem;

  return {
    ...state,
    piezas: piezasCopy
  }
}

// TOGGLES DISPLAYS VIEW
export const toggleView = (state, payload) => {
  return {
    ...state,
    display: payload.payload
  }
}

// UPDATES WOOD INFORMATION
export const updateWood = (state, payload) => {
  let { espesor, madera, desperdicio } = payload.payload;
  let newWood = { espesor, madera, desperdicio };

  return {
    ...state,
    tipoMadera: newWood
  }
}

// GET RESULT
export const getResult = (state) => {
  let result = 0;
  let numToFeet = 0;
  let numToInches = 0;
  let numDePiezas = 0;

  if (state.piezas.length === 0) {
    return {
      ...state,
      numDePiezas: numDePiezas,
      result: result
    }
  } else {
    for(let i=0; i<state.piezas.length; i++) {
      if(state.piezas[i]['sentidoVeta'] === 'vertical') {
        numToFeet = state.piezas[i]['alto'] / 12;
        numToInches = state.piezas[i]['ancho'];
      } else {
        numToFeet = state.piezas[i]['ancho'] / 12;
        numToInches = state.piezas[i]['alto'];
      }
      // agregar espesor de madera variable
      result = (result + ((1 * numToFeet * numToInches) / 12)) * state.piezas[i]['cantidad'];
      numDePiezas = (numDePiezas * 1) + (state.piezas[i]['cantidad'] * 1);
    }

    result = Math.ceil((result * (state.tipoMadera.desperdicio / 100)) + result);

    return {
      ...state,
      result: result,
      numDePiezas: numDePiezas
    }
  }
}
