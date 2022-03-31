import Product from "../components/product";
import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer";
import Cart from "../components/cart";

import { connect } from "react-redux";
import { getSortedProductsData } from "../lib/products";

export async function getStaticProps() {
  const allProductsData = getSortedProductsData();
  return {
    props: {
      allProductsData,
    },
  };
}

//Connect props products to global state
const mapStateToProps = (state) => {
  return {
    products: state.products,
    total: state.total,
  };
};

export default connect(mapStateToProps)(function Home({ allProductsData }) {
  const displayProducts = allProductsData.map(
    ({ id, title, description, price, image }) => (
      <Product
        key={id}
        image={image}
        title={title}
        description={description}
        price={price}
        id={id}
      />
    )
  );

  return (
    <Layout>
      <Header titlePage="Boutique" />
      <div className="container main">
        <div className="row">
          <div className="col-md-10">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {displayProducts}
            </div>
          </div>
          <div className="col-md-2" id="cart">
            <Cart />
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
});
