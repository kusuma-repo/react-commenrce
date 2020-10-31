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
        : cartItems
    );
  }
  return [...cartItems, { ...newItemsCart, quantity: 1 }];
};
