import Header from "../components/header";
import Footer from "../components/footer";
import Layout from "../components/layout";

export default function Custom404() {
  return (
    <Layout>
      <Header titlePage="Boutique" />
      <div className="container main">
        <div className="row">
          <h1 className="text-center">Page introuvable !</h1>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
