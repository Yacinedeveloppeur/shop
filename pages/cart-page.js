import Header from "../components/header";
import Footer from "../components/footer";
import Layout from "../components/layout";
import { connect } from "react-redux";

//Connect props products to global state
const mapStateToProps = (state) => {
  return {
    products: state.products,
    total: state.total,
  };
};

export default connect(mapStateToProps)(function CartPage({ products, total }) {
  const displayProducts = products.map(
    (product) =>
      product.title != "" && (
        <li key={product.id}>
          {product.title} {product.price} €
        </li>
      )
  );

  return (
    <Layout>
      <Header titlePage="Boutique" />
      <ul>{displayProducts}</ul>
      <p>Total : {total} €</p>
      <Footer />
    </Layout>
  );
});
