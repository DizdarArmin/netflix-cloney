import WatchOnTv from "../components/home/WatchOnTv";
import Hero from "../components/home/Hero";
import Navbar from "../components/home/Navbar";
import LangSelect from "../components/home/LangSelect";
import DownloadAndWatch from "../components/home/DownloadAndWatch";
import Devices from "../components/home/Devices";
import Kids from "../components/home/Kids";
import FAQ from "../components/home/FAQ";
import GetStarted from "../components/home/GetStarted";
import Footer from "../components/home/Footer";

export default function Home({ language }) {
  return (
    <div className="home container">
      <Navbar language={language}>
        <LangSelect />
        <div className="red-button">
          <a href="login">{language.signIn}</a>
        </div>
      </Navbar>
      <div className="our-story-cards">
        <Hero language={language} />
        <WatchOnTv language={language} />
        <DownloadAndWatch language={language} />
        <Devices language={language} />
        <Kids language={language} />
        <FAQ language={language} />
        <div className="our-story-card">
          <GetStarted language={language} />
        </div>
        <Footer />
      </div>
    </div>
  );
}
