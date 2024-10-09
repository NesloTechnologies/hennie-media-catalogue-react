const findItemIndex = (array, id) => {
  return array.findIndex((item) => item.id === id);
};

const loadItems = (currentState, incomingState) => {
  currentState = incomingState;
};

const addItem = (state, newItem) => {
  state.push({ ...newItem });
};

const updateItem = (state, newItem) => {
  const index = findItemIndex(state, newItem.id);

  if (index !== -1) {
    state[index] = newItem;
  }
};

const deleteItem = (state, id) => {
  const index = findItemIndex(state, id);

  if (index !== -1) {
    state.splice(index, 1);
  }
};

export { loadItems, addItem, updateItem, deleteItem };
