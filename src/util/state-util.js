let nextID = 1;

const findItemIndex = (array, id) => {
  return array.findIndex((item) => item.id === id);
};

const addItem = (state, newItem) => {
  state.push({ ...newItem, id: nextID });
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
export { findItemIndex, addItem, updateItem, deleteItem };
