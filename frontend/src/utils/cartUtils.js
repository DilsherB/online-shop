export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
};
// export const addDecimals = (num) => {
//   return (Math.round(num * 100) / 100).toFixed(2);
// };

export const updateCart = (state) => {
  // calculate item price
  state.itemsPrice = addDecimals(
    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  // calculate shipping price
  state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);
  // calculate tax price
  state.taxPrice = addDecimals(state.itemsPrice * 0.15);
  // calculate total price
  state.totalPrice = (
    Number(state.itemsPrice) +
    Number(state.shippingPrice) +
    Number(state.taxPrice)
  ).toFixed(2);

  localStorage.setItem("cartItems", JSON.stringify(state));
  return state;
};
