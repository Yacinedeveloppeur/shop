import Link from "next/link";
import Head from "next/head";

import { useRouter } from "next/router";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    total: state.total,
  };
};

export default connect(mapStateToProps)(function Header({ titlePage, total }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="og:title" content="boutique sous redux, next js" />
        <title>{titlePage}</title> <link rel="icon" href="/favicon.ico" />{" "}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossOrigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        ></link>
        <meta
          name="description"
          content="Simple boutique développée avec redux et next js"
        />
      </Head>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <div className="container-fluid">
            <Link href="/">
              <a className="nav-link text-light">Ma boutique</a>
            </Link>

            <a href="#cart" className="btn btn-primary">
              <div className="">
                Pannier : {total} € HT{" "}
                <i className="fa-solid fa-cart-shopping"></i>
              </div>
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <Link href="/">
                    <a
                      className={
                        router.pathname == "/"
                          ? "nav-link active mx-4"
                          : "nav-link mx-4"
                      }
                    >
                      Accueil
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
});
