import SpeakerDetail from "./SpeakerDetail";
{}
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { SpeakerDataContext, SpeakerDataProvider } from "../contexts/SpeakerDataContext";


 function Inner({ id}) {
  // const { darkTheme } = {
  //   darkTheme: false,
  // };
  const {speakerList, loadingStatus} = useContext(SpeakerDataContext)
  const {darkTheme} = useContext(ThemeContext);
  const speakerRec = speakerList?.find((rec) => rec.id === id);

  if(loadingStatus === 'loading') return <div className="card">Loading...</div>

  return speakerRec ? (
    <div className={darkTheme ? "theme-dark" : "theme-light"}>
      <SpeakerDetail speakerRec={speakerRec} showDetails={true} />
    </div>
  ) : (
    <h2 className="text-danger">Speaker {id} not found</h2>
  );
}

export default function Speaker(props){
  return(
    <SpeakerDataProvider>
      <Inner {...props}/>
    </SpeakerDataProvider>
  )
}