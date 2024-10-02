import { ADD_CD, DELETE_CD, UPDATE_CD } from './cd.actions';

const initialState = {
  cds: []
};

const cdReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CD:
      return { ...state, cds: [...state.cds, { ...action.payload}] };

    case UPDATE_CD:
      return {
        ...state,
        cds: state.cds.map((cd) => (cd.id === action.payload.id ? action.payload.newCD : cd))
      };

    case DELETE_CD:
      return { ...state, cds: state.cds.filter((cd) => cd.id !== action.payload) };

    default:
      return state;
  }
};

export default cdReducer;
