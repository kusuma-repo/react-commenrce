import cartActionTypes from './Cart.types';

export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItemsCart = (cart) => ({
  type: cartActionTypes.ADD_CART_ITEM,
  payload: cart,
});

export const clearItemCart = (cart) => ({
  type: cartActionTypes.CLEAR_ITEM_CART,
  payload: cart,
});

export const removeItemCart = (cart) => ({
  type: cartActionTypes.REMOVE_ITEM_CART,
  payload: cart,
});

export const clearCartItemSignOut = () => ({
  type: cartActionTypes.CLEAR_CART,
});
