export const ADD_CD = 'ADD_CD';
export const GET_CDS = 'GET_CDS';
export const UPDATE_CD = 'UPDATE_CD';
export const DELETE_CD = 'DELETE_CD';

export const addCDToStore = (cd) => ({
  type: ADD_CD,
  payload: cd
});

export const updateCDInStore = (id, newCD) => ({
  type: UPDATE_CD,
  payload: { id, newCD }
});

export const deleteCDFromStore = (id) => ({
  type: DELETE_CD,
  payload: id
});
