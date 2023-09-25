import React, { useContext, useMemo } from "react";
import SpeakerDetail from "./SpeakerDetail";
import { SpeakerDataContext } from "../contexts/SpeakerDataContext";
import useSpeakerSortAndFilter  from "../hooks/useSpeakerSortAndFilter";
import { SpeakerMenuContext } from "../contexts/SpeakerMenuContext";

export default function SpeakersList() {
  
  const {speakerList, loadingStatus} = useContext(SpeakerDataContext);
  
  console.log(speakerList)
  const {speakingSaturday,  speakingSunday, searchText} = useContext(SpeakerMenuContext)

const speakerListJson = JSON.stringify(speakerList);

  const speakerFiltered = useMemo(()=>useSpeakerSortAndFilter(
    speakerList, speakingSaturday,  speakingSunday, searchText), 
    [speakerListJson,speakingSaturday, speakingSunday, searchText, loadingStatus]);


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
