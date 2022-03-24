import Product from "../components/product";
import products from "../data/products";
import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer";

import { useState } from "react";

export default function Home() {
  const [cart, setCart] = useState([""]);
  const displayProducts = products.map((product) => (
    <Product
      key={product.id}
      image={product.image}
      title={product.title}
      description={product.description}
      price={product.price}
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
}
