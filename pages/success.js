import Head from "next/head";
import styles from "../styles/index.module.css";
import Link from "next/link";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const success = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Message Sent</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Navbar />
      </header>
      <div className={styles.main}>
        <h1 style={{ textAlign: "center" }}>Form Successfully Submitted</h1>
        <p style={{ textAlign: "center" }}>
          {" "}
          <Link href="/">
            <a>Return Home</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default success;
