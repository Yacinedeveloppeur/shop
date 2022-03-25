const initialState = {
  products: [
    {
      id: 0,
      title: "",
      price: 0,
      quantity: 0,
    },
  ],
  total: 0,
};

function handleCart(state = initialState, action) {
  let nextState;
  switch (action.type) {
    case "ADD_PRODUCT":
      nextState = {
        ...state,
        products: [...state.products, action.value],
        total: (state.total += action.value.price),
      };
      return nextState || state;
    case "REMOVE_PRODUCT":
      nextState = {
        ...state,
        products: [...state.products, state.products.unshift(action.value)],
        total: (state.total -= action.value.price),
      };
      return nextState || state;
    default:
      return state;
  }
}

export default handleCart;
