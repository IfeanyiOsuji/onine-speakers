import React, { useContext } from "react";
import SpeakerDetail from "./SpeakerDetail";
import { SpeakerDataContext } from "../contexts/SpeakerDataContext";
import useSpeakerSortAndFilter  from "../hooks/useSpeakerSortAndFilter";

export default function SpeakersList() {
  
  const {speakerList, loadingStatus} = useContext(SpeakerDataContext);

  const speakerFiltered = useSpeakerSortAndFilter(speakerList);


  if(loadingStatus === 'loading'){
    return <div className="card">Loading...</div>
  }
  return (
    <>
      {speakerFiltered.map(function (speakerRec) {
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
