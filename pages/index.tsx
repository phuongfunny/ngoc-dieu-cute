import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import HomeBanner from "../components/home";
import Profile from "../components/profile";
import "antd/dist/antd.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Dieu Cute Hihi</title>
        <meta name="description" content="My name is Dieuuuuu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeBanner />
      <Profile />
    </div>
  );
};

export default Home;
