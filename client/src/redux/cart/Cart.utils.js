export const addItemsToCart = (cartItems, newItemsCart) => {
  const existingCart = cartItems.find(
    (cartItem) => cartItem.id === newItemsCart.id
  );

  if (existingCart) {
    return cartItems.map((cartItem) =>
      cartItem.id === newItemsCart.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
        : cartItem
    );
  }
  return [...cartItems, { ...newItemsCart, quantity: 1 }];
};

export const removeItemCart = (cartItems, cartItemRemove) => {
  const existingCart = cartItems.find(
    (cartItem) => cartItem.id === cartItemRemove.id
  );
  if (existingCart.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
