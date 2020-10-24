import Head from "next/head";
import styles from "../styles/index.module.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const contact = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Navbar homepage={false}/>
      </header>
      <div className={styles.main}>
        <h1 style={{ textAlign: "center" }}>Contact Me</h1>
        <ContactForm />
      </div>
    </div>
  );
};

export default contact;
