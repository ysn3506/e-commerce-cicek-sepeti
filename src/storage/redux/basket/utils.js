export const addItemToBasket = (basketItems, basketItemToAdd) => {
  const existingbasketItem = basketItems.find(
    (basketItem) => basketItem.productId === basketItemToAdd.productId
  );

  if (existingbasketItem) {
    return basketItems.map((basketItem) =>
      basketItem.productId === basketItemToAdd.productId
        ? { ...basketItem, quantity: basketItem.quantity + 1 }
        : basketItem
    );
  }

  return [...basketItems, { ...basketItemToAdd, quantity: 1 }];
};

export const removeItemFromBasket = (basketItems, basketItemToRemove) => {
  const existingbasketItem = basketItems.find(
    (basketItem) => basketItem.productId === basketItemToRemove.productId
  );

  if (existingbasketItem.quantity === 1) {
    return basketItems.filter(
      (basketItem) => basketItem.productId !== basketItemToRemove.productId
    );
  }

  return basketItems.map((basketItem) =>
    basketItem.productId === basketItemToRemove.productId
      ? { ...basketItem, quantity: basketItem.quantity - 1 }
      : basketItem
  );
};

