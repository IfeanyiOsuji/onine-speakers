import Header from "./Header";
import AppMenu from "./AppMenu";
import SpeakerModal from "../speakerModal/SpeakerModal";
import Speakers from "../speakers/Speakers";
import About from "../about/About";
import Speaker from "../speakers/Speaker";
import SpeakerList from "../speakers/SpeakerList";
import { useState } from "react";

// Layout does not use children but instead uses what comes from AppRouteProvider
export default function Layout({ url }) {
  const speakerId = parseInt(url.substring(9).replace("#", ""));
  const [darkTheme, setDarkTheme] = useState(false);

  function alterTheme(theme){

    setDarkTheme(theme);
    console.log('in layout settheme', darkTheme);
  }

  return (
    <>
      <Header />
      <AppMenu darkTheme={darkTheme} setDarkTheme={alterTheme}/>
      {url === "/about" && <About />}
      {url === "/" && <Speakers />}
      {url.startsWith("/speaker/") && <Speaker id={speakerId} />}
      {url.startsWith("/speakerlist") && <SpeakerList />}
      {url.startsWith("/speakerpopup") && <SpeakerModal modalShow={true} />}
    </>
  );
}
