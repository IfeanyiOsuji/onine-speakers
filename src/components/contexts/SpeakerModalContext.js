import { createContext } from "react"
import useSpeakerModal from "../hooks/useSpeakerModal"



export const SpeakerModalContext = createContext({
    modalShow : false,
    setModalShow : ()=>{},
    modalSpeakerId : 0,
    setModalSpeakerId : ()=>{},
    modalSpeakerFirstName : "",
    setModalSpeakerFirstName : ()=>{},
    modalSpeakerLastName : "",
    setModalSpeakerLastName : ()=>{},
    modalSpeakerImgUrl : "",
    setModalSpeakerImgUrl : ()=>{},
    modalSpeakerEmail : "",
    setModalSpeakerEmail : ()=>{}

})


export const SpeakerModalProvider =({children}) =>{
    const {
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
    } = useSpeakerModal();
   
    const value = {
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

    return (
        <SpeakerModalContext.Provider value={value}>
            {children}
        </SpeakerModalContext.Provider>
    )
}
export default SpeakerModalProvider;