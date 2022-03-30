const initialState = {
  products: [
    {
      id: 0,
      title: "",
      price: 0,
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
      // find the first product to remove
      const productIndexByTitle = state.products.findIndex(
        (item) => item.title === action.value.title
      );
      if (productIndexByTitle === -1) {
        // no product in cart to remove
        nextState = {
          ...state,
        };
      } else {
        // remove product
        nextState = {
          ...state,
          products: state.products.splice(
            state.products.splice(productIndexByTitle, 1)
          ),
          total: (state.total -= action.value.price),
        };
      }

      return nextState || state;

    case "REMOVE_PRODUCT_IN_CART":
      // find product to remove with the id
      const productIndexById = state.products.findIndex(
        (item) => item.id === action.value.id
      );
      nextState = {
        ...state,
        products: state.products.splice(
          state.products.splice(productIndexById, 1)
        ),
        total: (state.total -= action.value.price),
      };
      return nextState || state;
    default:
      return state;
  }
}

export default handleCart;
