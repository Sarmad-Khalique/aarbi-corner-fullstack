export const addItemToCart = (cartItems, newItem) => {
  const isExist = cartItems.find((cartItem) => cartItem.id === newItem.id);

  if (isExist) {
    return cartItems.map((cartItem) =>
      cartItem.id === newItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...newItem, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, itemToBeRemoved) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === itemToBeRemoved.id
  );

  if (existingItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== itemToBeRemoved.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === itemToBeRemoved.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const clearItemFromCart = (cartItems, item) => {
  return cartItems.filter((cartItem) => cartItem.id !== item.id);
};
export const getCartItemCount = (cartItems) => {
  return cartItems.reduce(
    (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,
    0
  );
};

export const getCartTotal = (cartItems) => {
  return cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.price * cartItem.quantity,
    0
  );
};
