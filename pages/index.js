import Product from "../components/product";
import productsData from "../data/products";
import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer";

import { connect } from "react-redux";
import { useState } from "react";

//Connect props products to global state
const mapStateToProps = (state) => {
  return {
    products: state.products,
    total: state.total,
  };
};

export default connect(mapStateToProps)(function Home() {
  const [quantity, setQuantity] = useState(0);

  const displayProducts = productsData.map((product) => (
    <Product
      key={product.id}
      image={product.image}
      title={product.title}
      description={product.description}
      price={product.price}
      id={product.id}
    />
  ));

  return (
    <Layout>
      <Header titlePage="Boutique" />
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
          {displayProducts}
        </div>
      </div>
      <Footer />
    </Layout>
  );
});
