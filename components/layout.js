import Head from "next/head";

import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, title, hide }) {
  return (
    <>
      <Head>
        <title>{title ? title : "Ualá | Clone"}</title>
        <link rel="icon" href="favicon.ico" />
        <meta name="og:title" content={title ? title : Ualá | Clone} />
      </Head>
      {hide ? (
        <main>{children}</main>
      ) : (
        <>
          <Header />
          <main>{children}</main>
          <Footer />
        </>
      )}
    </>
  );
}
