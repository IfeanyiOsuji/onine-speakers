import SpeakerLine from "./SpeakerLine";
import axios from "axios";
import { useEffect, useState } from "react";
import { resolve } from "styled-jsx/css";



function List({speakers, updateSpeaker}) {
  const [updatingId, setUpdatingId] = useState(0);
  const isPending = false;

  function toggleFavoriteSpeaker(speakerRec) {

    const updatedSpeakerRec = {...speakerRec, favorite:!speakerRec.favorite}
     updateSpeaker(updatedSpeakerRec);
     async function updateAsyncRef(rec){
        setUpdatingId(rec.id)
        await axios.put(`/api/speakers/${rec.id}`, updatedSpeakerRec)

        setUpdatingId(0)
     }
     updateAsyncRef(updatedSpeakerRec);

  }

  return (
    <div className="container">
      <div className="border-0">
        <div
          className="btn-toolbar"
          role="toolbar"
          aria-label="Speaker toolbar filter"
        >
          <div className="toolbar-trigger mb-3 flex-grow-04">
            <div className="toolbar-search w-100">
              <input
                value=""
                onChange={(event) => {}}
                type="text"
                className="form-control"
                placeholder="Highlight Names"
              />
            </div>
            <div className="spinner-height">
              {isPending && (
                <i className="spinner-border text-dark" role="status" />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="row g-3">
        {speakers.map(function (speakerRec) {
          const highlight = false;
          return (
            <SpeakerLine
              key={speakerRec.id}
              speakerRec={speakerRec}
              updating={updatingId === speakerRec.id ? updatingId : 0}
              toggleFavoriteSpeaker={() => toggleFavoriteSpeaker(speakerRec)}
              highlight={highlight}
            />
          );
        })}
      </div>
    </div>
  );
}

const SpeakerList = ({darkTheme}) => {
  const [speakers, setSpeakers] = useState([]);
  const [loading, setLoading] = useState(true);
  

  const delay = (ms) => setInterval(resolve => (resolve, ms));

  useEffect(()=>{
    async function getDataAsync(){
      const result = await axios('/api/speakers');
      delay(2000)
      setSpeakers(result.data);
      setLoading(false);
    }
    getDataAsync();
    
  },
   []);

   function updateSpeaker(speakerRec){
        const updatedSpeaker = speakers.map(rec => speakerRec.id === rec.id ? speakerRec : rec);
        setSpeakers(updatedSpeaker);
   }

   if(loading) return <div className="container"> Loading...</div>

  //const darkTheme = false;
  return (
    <div className={darkTheme ? "theme-dark" : "theme-light"}>
      <List speakers = {speakers} updateSpeaker={updateSpeaker}/>
    </div>
  );
};

export default SpeakerList;
