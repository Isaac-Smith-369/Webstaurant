import Head from "next/head";
import Nav from "@/layout/Nav";
import Footer from "@/layout/Footer";
import NewsLetter from "components/NewsLetter";
import "styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Webstaurant</title>
        <meta name="description" content="A restaurant on the web" />
      </Head>
      <Nav />
      <Component />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default MyApp;
