import React, { useContext } from "react";
import SpeakerDetail from "./SpeakerDetail";
import { SpeakerDataContext } from "../contexts/SpeakerDataContext";

export default function SpeakersList() {
  const {speakerList, loadingStatus} = useContext(SpeakerDataContext);
  if(loadingStatus === 'loading'){
    return <div className="card">Loading...</div>
  }
  return (
    <>
      {speakerList.map(function (speakerRec) {
        return (
          <SpeakerDetail
            key={speakerRec.id}
            speakerRec={speakerRec}
            showDetails={false}
          />
        );
      })}
    </>
  );
}
