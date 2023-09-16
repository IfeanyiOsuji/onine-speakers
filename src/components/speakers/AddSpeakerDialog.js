import { useContext } from "react";
import SpeakerModal from "../speakerModal/SpeakerModal";
import { SpeakerModalContext } from "../contexts/SpeakerModalContext";

export default function AddSpeakerDialog() {
  const {
    setModalShow,
    setModalSpeakerId,
    setModalSpeakerFirstName,
    setModalSpeakerLastName,
    setModalSpeakerEmail,
    setModalSpeakerImgUrl,
  } = useContext(SpeakerModalContext);

  return (
    <>
    {SpeakerModal && <SpeakerModal/>} 
      <button
        onClick={() => {
          setModalSpeakerId(0);
          setModalSpeakerFirstName("");
          setModalSpeakerLastName("");
          setModalSpeakerEmail("");
          setModalSpeakerImgUrl("/images/Speaker-New.jpg");
          setModalShow(true);
        }}
        className="btn btn-accent"
      >
        Add Speaker <i className="fa fa-plus" />
      </button>
    </>
  );
}
