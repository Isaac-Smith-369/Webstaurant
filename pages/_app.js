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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <Nav />
      <Component />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default MyApp;
