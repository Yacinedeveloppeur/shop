import Image from "next/image";
import { useState, useEffect } from "react";
import { connect } from "react-redux";

//Connect props products to global state
const mapStateToProps = (state) => {
  return {
    products: state.products,
    total: state.total,
  };
};

export default connect(mapStateToProps)(function Product({
  image,
  title,
  description,
  price,
  dispatch,
  id,
  products,
}) {
  const [quantity, setQuantity] = useState(0);

  function removeProduct() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      const action = {
        type: "REMOVE_PRODUCT",
        value: { id, title, price, quantity },
      };
      dispatch(action);
    }
  }
  console.log(products);
  function addProduct() {
    setQuantity(quantity + 1);
    const action = {
      type: "ADD_PRODUCT",
      value: {
        id: Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1),
        title,
        price,
        quantity,
      },
    };
    dispatch(action);
  }

  return (
    <div className="col">
      <div className="card shadow-sm">
        <Image
          className="card-img-top"
          src={image}
          alt={title}
          height={190}
          width={362}
        />

        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <i>{price} €</i>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-primary"
                onClick={() => {
                  addProduct();
                }}
              >
                +
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-danger"
                onClick={removeProduct}
              >
                -
              </button>
            </div>

            <div className="d-flex align-items-center ">
              <Image
                className="card-img-top"
                src="/images/cart.png"
                alt={title}
                height={40}
                width={40}
              />
              <span
                className={quantity > 0 ? "mx-3 px-2 bg-warning" : "mx-3 px-2"}
              >
                {quantity}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
