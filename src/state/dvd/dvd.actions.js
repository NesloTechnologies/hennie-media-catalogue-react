const addDVD = (dvd) => ({
  type: 'ADD_DVD',
  payload: dvd
});

const getDVD = (id) => ({
  type: 'GET_DVD',
  payload: id
});

const updateDVD = (id, newDVD) => ({
  type: 'UPDATE_DVD',
  payload: { id, newDVD }
});

const deleteDVD = (id) => ({
  type: 'DELETE_DVD',
  payload: id
});

export { addDVD, getDVD, updateDVD, deleteDVD };
