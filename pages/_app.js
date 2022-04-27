import Head from "next/head";
import NavBar from "@/layout/NavBar";
import Footer from "@/layout/Footer";
import "styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Webstaurant</title>
        <meta name="description" content="A restaurant on the web" />
      </Head>
      <NavBar />
      <Component />
      <Footer />
    </>
  );
}

export default MyApp;
