import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Header({ titlePage }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{titlePage}</title> <link rel="icon" href="/favicon.ico" />{" "}
      </Head>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
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
                  <Link href="/cart">
                    <a
                      className={
                        router.pathname == "/cart"
                          ? "nav-link active"
                          : "nav-link"
                      }
                    >
                      Panier
                    </a>
                  </Link>
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
}
