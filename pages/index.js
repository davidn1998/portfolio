import Head from "next/head";
import Link from "next/link";
// import { connectToDatabase } from "../util/mongodb";

import styles from "../styles/index.module.css";

import Logo from "../components/Logo";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import GameCarousel from "../components/GameCarousel";
import InfoCard from "../components/InfoCard";
import GameCard from "../components/GameCard";
import { faCode, faGamepad, faLaptop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  const webDevCards = [
    <GameCard
      imgSrc="/images/ludumlib.png"
      title="Ludumlib"
      liveLink="https://ludumlib.vercel.app/"
    />,
    <GameCard
      imgSrc="/images/covid-dash.png"
      title="CovidDash"
      liveLink="https://covid-data-dashboard.herokuapp.com/"
    />,
    <GameCard
      imgSrc="/images/unishare.png"
      title="UniShare"
      liveLink="https://unishare-global.herokuapp.com/"
    />,
  ];

  let gameDevCards = [
    <GameCard
      imgSrc="/images/kayla.png"
      title="Kayla's Story Demo"
      liveLink="/games/KaylasStory/index.html"
      key="1"
    />,
    <GameCard
      imgSrc="/images/lifecycle.png"
      title="Life Cycle"
      liveLink="/games/LifeCycle/index.html"
      key="2"
    />,
    <GameCard
      imgSrc="/images/desertwinds.png"
      title="Desert Winds"
      liveLink="/games/DesertWinds/index.html"
      key="3"
    />,
    <GameCard
      imgSrc="/images/pong.png"
      title="Egg = Pong"
      liveLink="/games/Pong/index.html"
      key="4"
    />,
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>David Nwachukwu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Navbar homepage={true} />
      </header>
      <div className={styles.main}>
        <Hero />
        <div className={styles.infoCards}>
          <InfoCard
            icon={<FontAwesomeIcon icon={faLaptop} size="4x" />}
            infoText="I develop full stack applications using different tech. My current stack is React.js, Node.js and MongoDb."
          />
          <InfoCard
            icon={<FontAwesomeIcon icon={faGamepad} size="4x" />}
            infoText="I develop games in both Unity 3D and Unreal Engine 4. Currently experimenting with multiplayer games in UE4."
          />
          <InfoCard
            icon={<FontAwesomeIcon icon={faCode} size="4x" />}
            infoText="I'm always learning new technologies and programming languages. My skills include C++, Javascript, Java, Python & SQL."
          />
        </div>
        <h2 className={styles.subHeading} id="portfolio">
          Web Development
        </h2>
        <GameCarousel slideUp={false} cards={webDevCards} />
        <h2 className={styles.subHeading}>Game Development</h2>
        <GameCarousel slideUp={false} cards={gameDevCards} />
      </div>

      {/* <Footer /> */}
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const { client } = await connectToDatabase();

//   const isConnected = await client.isConnected(); // Returns true or false

//   return {
//     props: { isConnected },
//   };
// }
