const initialState = [];

const dvdReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_DVD':
      return [...state, action.payload];

    case 'UPDATE_DVD':
      return state.map((dvd) => (dvd.id === action.payload.id ? action.payload.dvd : dvd));

    case 'DELETE_DVD':
      return state.filter((dvd) => dvd.id !== action.payload);

    default:
      return state;
  }
};

export default dvdReducer;
