import Image from "next/image";
import { useState } from "react";

export default function Product({ image, title, description, price }) {
  const [countProducts, setcountProducts] = useState(0);

  function addProduct() {
    setcountProducts(countProducts + 1);
  }
  function removeProduct() {
    if (countProducts > 0) {
      setcountProducts(countProducts - 1);
    }
  }

  return (
    <div className="col">
      <div className="card shadow-sm">
        <Image
          class="card-img-top"
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
              <span className="me-3">{countProducts}</span>
              <Image
                class="card-img-top"
                src="/images/cart.png"
                alt={title}
                height={40}
                width={40}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
