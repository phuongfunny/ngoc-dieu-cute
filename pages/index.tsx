import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import HomeBanner from "../components/home";

const Home: NextPage = () => {
  return (
    <div>
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
