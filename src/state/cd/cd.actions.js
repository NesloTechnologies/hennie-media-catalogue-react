const addToStore = (cd) => ({
  type: 'ADD_CD',
  payload: cd
});

const getFromStore = () => ({
  type: 'GET_CDs'
});

const updateToStore = (id, newCD) => ({
  type: 'UPDATE_CD',
  payload: { newCD }
});

const deleteFromStore = (id) => ({
  type: 'DELETE_CD',
  payload: id
});

export { addToStore, getFromStore, updateToStore, deleteFromStore };
