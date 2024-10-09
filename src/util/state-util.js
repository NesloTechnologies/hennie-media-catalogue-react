const findItemIndex = (array, id) => {
  return array.findIndex((item) => item.id === id);
};

const setItems = (state, items) => {
  if (state.toString() !== items.toString()) {
    for (let i = 0; i < items.length; i++) {
      state.push(items[i]);
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
