import Image from "next/image";
import Link from "next/link";
import { connect } from "react-redux";
import cardStyles from "../styles/card.module.css";

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
}) {
  function removeProduct() {
    const action = {
      type: "REMOVE_PRODUCT",
      value: { id, title, price },
    };
    dispatch(action);
  }

  function addProduct() {
    const action = {
      type: "ADD_PRODUCT",
      value: {
        id: Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1),
        title,
        price,
      },
    };
    dispatch(action);
  }

  return (
    <div className="col">
      <div className="card shadow-sm">
        <div className={cardStyles.cardImg}>
          <Image
            className="card-img-top"
            src={image}
            alt={title}
            height={190}
            width={362}
          />
        </div>

        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <i>{price} €</i>
          <div className="d-flex justify-content-between align-items-center my-2">
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
                onClick={() => {
                  removeProduct();
                }}
              >
                -
              </button>
            </div>
            <div className="d-flex align-items-center ">
              <Link href={"/produits/" + id}>
                <a className="nav-link">plus de détails</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
