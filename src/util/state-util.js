const findItemIndex = (array, id) => {
  return array.findIndex((item) => item.id === id);
};

const setItems = (currentState, incomingState) => {
  const longestArray = currentState > incomingState? currentState : incomingState;

  if (currentState.toString() !== incomingState.toString()) {
    for (let i = 0; i < longestArray.length; i++) {
      currentState.push(incomingState[i]);
    }
  }
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

export { setItems, addItem, updateItem, deleteItem };
