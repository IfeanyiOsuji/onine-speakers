import { useState } from "react"


const useSpeakerModal = ()=>{
    const [modalShow, setModalShow] = useState(false);

    const [modalSpeakerId, setModalSpeakerId] = useState(0);
    const [modalSpeakerFirstName, setModalSpeakerFirstName] = useState("");
    const [modalSpeakerLastName, setModalSpeakerLastName] = useState("");
    const [modalSpeakerImgUrl, setModalSpeakerImgUrl] = useState("");
    const [modalSpeakerEmail, setModalSpeakerEmail] = useState("");


    return {
        modalShow,
        setModalShow,
        modalSpeakerId,
        setModalSpeakerId,
        modalSpeakerFirstName,
        setModalSpeakerFirstName,
        modalSpeakerLastName,
        setModalSpeakerLastName,
        modalSpeakerImgUrl,
        setModalSpeakerImgUrl,
        modalSpeakerEmail,
        setModalSpeakerEmail
    }


}
export default useSpeakerModal;