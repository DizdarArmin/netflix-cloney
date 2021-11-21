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

/**
 * Architecture -5, Coupling, -1
 * What is  "Architecture" and why is taking even more points?
 * Simple it means the overall design (from the structural point of view not from the aesthetics point of view) needs a revision.
 * If EVERY component needs a prop called language, then we need to step back and say how we can remove this depency,
 * because if for some reason the prop language breaks (example: is set to null by mistake) not 1 or 2 but LITERALLY the whole app breaks.
 */
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
