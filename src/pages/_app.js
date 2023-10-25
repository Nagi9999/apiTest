import NavBar from "@/components/nav";
import Footer from "@/components/footer";
import "../assets/scss/global.css";
import "../assets/scss/main.scss";

import Head from "next/head";
import CustomCursor from "@/components/cusromcursor";

export default function App({ Component, pageProps }) {
  const socialLinks = { en: { Instagram: "your_instagram_link", Linkedin: "your_linkedin_link" } };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>NextJs</title>
      </Head>
      <main className="flex flex-col justify-center ">
        <CustomCursor/>
        <NavBar />
        <Component {...pageProps} />

        <Footer socialLinks={socialLinks} />
      </main>
    </>
  );
}
