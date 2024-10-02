import { ADD_DVD, DELETE_DVD, UPDATE_DVD } from './dvd.action';

const initialState = {
  dvds: []
};

const dvdReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DVD:
      return { ...state, dvd: [...state.dvds, { ...action.payload }] };

    case UPDATE_DVD:
      return {
        ...state,
        dvds: state.dvds.map((dvd) => (dvd.id === action.payload.id ? action.payload.dvd : dvd))
      };

    case DELETE_DVD:
      return { ...state, dvds: state.dvds.filter((dvd) => dvd.id !== action.payload) };

    default:
      return state;
  }
};

export default dvdReducer;
