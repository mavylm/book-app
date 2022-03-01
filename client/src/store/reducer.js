const initialState = {
  books: [],
  cart: [],
  isAuthenticated: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADDTOCART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
