import Layout from "../../components/layout";
import { getAllProductIds, getProductData } from "../../lib/products";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Image from "next/image";
import Link from "next/link";
import singleProductStyles from "../../styles/singleProduct.module.css";

export async function getStaticPaths() {
  const paths = getAllProductIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Product({ productData }) {
  return (
    <Layout>
      <Header titlePage={productData.title} />
      <div className={singleProductStyles.layout}>
        <h1 className="my-4">{productData.title}</h1>
        <div className={singleProductStyles.imageContainer}>
          <Image
            src={productData.image}
            alt={productData.title}
            height={190}
            width={362}
          />
        </div>

        <div
          dangerouslySetInnerHTML={{ __html: productData.contentHtml }}
          className="my-4"
        />
        <span>{productData.price} € </span>
        <Link href="/">
          <a className="my-4">Retour à la boutique</a>
        </Link>
      </div>
      <Footer />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const productData = await getProductData(params.id);
  return {
    props: {
      productData,
    },
  };
}
