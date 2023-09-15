import React, { createContext } from "react";
import useSpeakerData from "../hooks/useSpeakerData";


export const SpeakerDataContext = createContext({
    speakerlist : [],
    createSpeaker : ()=>{},
    updateSpeaker : () =>{},
    deleteSpeaker : () =>{},
    loadingStatus : ""

});

export const SpeakerDataProvider = ({children}) =>{
const {speakerList,
createSpeaker,
updateSpeaker,
deleteSpeaker,
loadingStatus} = useSpeakerData();

const value = {
    speakerList,
    createSpeaker,
    updateSpeaker,
    deleteSpeaker,
    loadingStatus
}; 
return (
    <SpeakerDataContext.Provider value={value}>
        {children}
    </SpeakerDataContext.Provider>
)
}