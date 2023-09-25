import SpeakerLine from "./SpeakerLine";
import axios from "axios";
import { useCallback, useContext, useDeferredValue, useEffect, useReducer, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { SpeakerDataContext, SpeakerDataProvider } from "../contexts/SpeakerDataContext";
import { SpeakerMenuContext } from "../contexts/SpeakerMenuContext";
import useSpeakerSortAndFilter from "../hooks/useSpeakerSortAndFilter";





function List({state, dispatch}) {
  const [updatingId, setUpdatingId] = useState(0);
  const [searchState, setSearchState] = useState("");

  const highlighChars = useDeferredValue(searchState);


  const isPending = false;

  function toggleFavoriteSpeaker(speakerRec) {

    const updatedSpeakerRec = {...speakerRec, favorite:!speakerRec.favorite}
     dispatch({type:'updaterecord', speaker: updatedSpeakerRec});
     async function updateAsyncRef(rec){
        setUpdatingId(rec.id)
        await axios.put(`/api/speakers/${rec.id}`, updatedSpeakerRec)
        setUpdatingId(0)
     }
     updateAsyncRef(updatedSpeakerRec);

  }

  //if(loadingStatus === 'loading') return <div className="container"> Loading...</div>

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
                value= {searchState}
                onChange={(event) => setSearchState(event.target.value)}
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
        {state.speakers.map(function (speakerRec) {
          const highlight = highlighChars?.length > 0 && (speakerRec.firstName?.toLowerCase()
          + speakerRec.lastName?.toLowerCase()
          ).includes(highlighChars?.toLocaleLowerCase()) ? true : false;
          return (
            <SpeakerLine
              key={speakerRec.id}
              speakerRec={speakerRec}
              updating={updatingId === speakerRec.id ? updatingId : 0}
              toggleFavoriteSpeaker = {useCallback(() => toggleFavoriteSpeaker(speakerRec), [speakerRec.favorite])}
              highlight={highlight}
            />
          );
        })}
      </div>
    </div>
  );
}



 const SpeakerList = () => {
  const {darkTheme} = useContext(ThemeContext)
  const reduce = (state, action) =>{
    switch(action.type){
      case 'speakerloaded':
        
        return {...state, loading: false, speakers:[...action.speakers, ...createDummySpeakers(8000)]}

      case 'setloadingstatus':
        return {...state, loading:true}

      case 'updaterecord':
        const updatedSpeaker = state.speakers.map(rec => action.speaker.id === rec.id ? action.speaker: rec);
        return {...state, speakers:updatedSpeaker}

      default:
        throw new Error(`case failure. type : ${action.type}`)


    }
}

  
const initialState = {
  speakers : [],
  loading : true
}
  const [state, dispatch] = useReducer(reduce, initialState);
  

 // const delay = (ms) => setInterval(resolve => (resolve, ms));

  useEffect(()=>{
    async function getDataAsync(){
      dispatch({type:'setloadingstatus'})
      const result = await axios('/api/speakers');
      
      dispatch({type: 'speakerloaded', speakers:result.data});
      
    }
    getDataAsync();
    
  },
   []);

 
  
   if(state.loading) return <div className="container"> Loading...</div>

  
  
  return (
    
    <div className={darkTheme ? "theme-dark" : "theme-light"}>
     
      <List state ={state} dispatch={dispatch}/>
     
    </div>
   
  );
};

export default SpeakerList;

function createDummySpeakers(numToAdd){
  let speakers = [];
   for(let increment = 0; increment < numToAdd; increment++){
    speakers.push({
      id : 1000 + increment,
      firstName : `Craig${increment}`,
      lastName : `Mantle${increment}`,
      favorite : false,
      bio : 'fake bio',
      company : 'fake company',
      twitterHandle : `fakeTwitterHandle${increment}`,
      userBioShort : `fakeShortBio${increment}`,
      imageUrl : "",
      email : `fakeEmail${increment}@codecamp.net`

    });

   }
   return speakers;

}

