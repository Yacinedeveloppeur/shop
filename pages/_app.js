import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import Store from "../store/configureStore";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={Store}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
