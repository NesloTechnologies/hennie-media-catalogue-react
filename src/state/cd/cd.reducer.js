const initialState = [];

let nextId = 1; // Global counter

const cdReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CD':
      return [...state, { ...action.payload, id: nextId++ }];

    case 'UPDATE_CD': {
      return state.map((cd) => (cd.id === action.payload.newCD.id ? action.payload.newCD : cd));
    }

    case 'DELETE_CD':
      return state.filter((cd) => cd.id !== action.payload);

    default:
      return state;
  }
};

export default cdReducer;
