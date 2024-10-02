export const ADD_DVD = 'ADD_DVD';
export const GET_DVDS = 'GET_DVDS';
export const UPDATE_DVD = 'UPDATE_DVD';
export const DELETE_DVD = 'DELETE_DVD';

export const addDVDToStore = (dvd) => ({
  type: ADD_DVD,
  payload: dvd
});

export const updateDVDInStore = (id, newDVD) => ({
  type: UPDATE_DVD,
  payload: { id, newDVD }
});

export const deleteDVDFromStore = (id) => ({
  type: DELETE_DVD,
  payload: id
});
