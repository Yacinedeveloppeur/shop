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
        <meta
          name="description"
          content="Simple boutique développée avec redux et next js"
        />
      </Head>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark  bg-dark">
          <div className="container-fluid">
            <Link href="/">
              <a className="nav-link text-light">Ma boutique</a>
            </Link>
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
                        router.pathname == "/" ? "nav-link active" : "nav-link"
                      }
                    >
                      Accueil
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="#cart" className="nav-link">
                    <div className="bg-primary px-4">
                      Pannier : {total} € HT{" "}
                      <i className="fa-solid fa-cart-shopping"></i>
                    </div>
                  </a>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Rechercher"
                  aria-label="Rechercher"
                />
                <button className="btn btn-outline-light" type="submit">
                  Recherche
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
});
