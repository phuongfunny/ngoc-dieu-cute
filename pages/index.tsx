import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import HomeBanner from "../components/home";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dieu Cute Hihi</title>
        <meta name="description" content="My name is Dieuuuuu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeBanner />
    </div>
  );
};

export default Home;
