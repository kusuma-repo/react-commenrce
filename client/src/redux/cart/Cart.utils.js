export const addItemsToCart = (cartItems, newItemsCart) => {
  const existingCart = cartItems.find(
    (cartItem) => cartItem.id === newItemsCart.id
  );

  if (existingCart) {
    const increaseQuant = cartItems.map((cartItem) =>
      cartItem.id === newItemsCart.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
        : cartItem
    );
    return increaseQuant.map((cartItem) =>
      cartItem.id === newItemsCart.id
        ? {
            ...cartItem,
            subtotal: cartItem.quantity * cartItem.price,
          }
        : cartItem
    );
  }
  return [
    ...cartItems,
    { ...newItemsCart, quantity: 1, subtotal: newItemsCart.price },
  ];
};

export const removeItemCart = (cartItems, cartItemRemove) => {
  const existingCart = cartItems.find(
    (cartItem) => cartItem.id === cartItemRemove.id
  );
  if (existingCart.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemRemove.id);
  }
  const decreaseQuant = cartItems.map((cartItem) =>
    cartItem.id === cartItemRemove.id
      ? {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        }
      : cartItem
  );
  return decreaseQuant.map((cartItem) =>
    cartItem.id === cartItemRemove.id
      ? {
          ...cartItem,
          subtotal: cartItem.quantity * cartItem.price,
        }
      : cartItem
  );
};
