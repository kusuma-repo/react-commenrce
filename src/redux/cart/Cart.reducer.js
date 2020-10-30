import cartActionTypes from './Cart.types';

const INITIAL_STATE = {
  toggleHidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        toggleHidden: !state.toggleHidden,
      };
    case cartActionTypes.ADD_CART_ITEM:
      return {
        ...state,
        cartItems: action.payload,
      };

    default:
      break;
  }
};

export default cartReducer;
