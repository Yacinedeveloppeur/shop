import Script from "next/script";

export default function Footer() {
  return (
    <footer className="footer bg-dark mt-4">
      <ul id="menu-pied-de-page" className="py-3 container">
        <ul className="nav justify-content-center border-bottom border-secondary text-muted pb-3 mb-3">
          <li
            id="menu-item-42"
            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-42 nav-item"
          >
            <a
              href="https://www.linkedin.com/in/yacine-d%C3%A9veloppeur-273aa820a/"
              className="nav-link text-muted"
            >
              Linkedin
            </a>
          </li>
          <li
            id="menu-item-43"
            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-43 nav-item"
          >
            <a
              href="https://github.com/Yacinedeveloppeur"
              className="nav-link text-muted"
            >
              GitHub
            </a>
          </li>
        </ul>
        <p className="text-center text-muted">
          Site édité par Ab-developpement. Copyright © 2021-2022. Tous droits
          réservés.
        </p>
      </ul>{" "}
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossOrigin="anonymous"
      ></Script>
    </footer>
  );
}
