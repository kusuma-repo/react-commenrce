import cartActionTypes from './Cart.types';

export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addCartItems = (cart) => ({
  type: cartActionTypes.ADD_CART_ITEM,
  payload: cart,
});
