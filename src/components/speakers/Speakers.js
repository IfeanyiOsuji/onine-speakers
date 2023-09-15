import React, { useContext } from "react";

import SpeakerMenu from "./SpeakerMenu";
import SpeakersList from "./SpeakersList";
import { ThemeContext } from "../contexts/ThemeContext";
import { SpeakerDataProvider } from "../contexts/SpeakerDataContext";


function Speakers() {
  //const darkTheme = false;
    const {darkTheme} = useContext(ThemeContext);

  return (
    <SpeakerDataProvider>
    <div className={darkTheme ? "theme-dark" : "theme-light"}>
      <SpeakerMenu />
      <div className="container">
        <div className="row g-4">
          <SpeakersList />
        </div>
      </div>
    </div>
    </SpeakerDataProvider>
  );
}

export default Speakers;
