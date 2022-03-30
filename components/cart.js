import { connect } from "react-redux";
import { useEffect } from "react";

//Connect props products to global state
const mapStateToProps = (state) => {
  return {
    products: state.products,
    total: state.total,
  };
};

export default connect(mapStateToProps)(function Cart({
  products,
  total,
  dispatch,
}) {
  function removeProductInCart(id, title, price) {
    const action = {
      type: "REMOVE_PRODUCT_IN_CART",
      value: { id, title, price },
    };
    dispatch(action);
    document.getElementsByClassName(title)[0].innerHTML -= 1;
  }

  const displayProducts = products.map(
    (product) =>
      product.title != "" && (
        <li key={product.id} className="py-2">
          <span className="mx-2">
            {product.title} {product.price} €
          </span>{" "}
          <button
            className="btn btn-danger"
            onClick={() => {
              removeProductInCart(product.id, product.title, product.price);
            }}
          >
            -
          </button>
        </li>
      )
  );

  return (
    <div className="bg-primary text-center text-light">
      <ul className="list-unstyled">{displayProducts}</ul>
      <p>Total : {total} €</p>
    </div>
  );
});
