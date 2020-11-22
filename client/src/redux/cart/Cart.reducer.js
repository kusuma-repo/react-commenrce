import cartActionTypes from './Cart.types';
import { addItemsToCart, removeItemCart } from './Cart.utils';
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
        cartItems: addItemsToCart(state.cartItems, action.payload),
      };
    case cartActionTypes.CLEAR_ITEM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case cartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    case cartActionTypes.REMOVE_ITEM_CART:
      return {
        ...state,
        cartItems: removeItemCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
