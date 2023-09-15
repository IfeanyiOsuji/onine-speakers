
import { useContext } from "react";
import { SpeakerMenuContext } from "../contexts/SpeakerMenuContext";


export default function useSpeakerSortAndFilter(speakerList){
    const {speakingSaturday,  speakingSunday, searchText
} = useContext(SpeakerMenuContext)


    return speakerList ? speakerList.filter(
        ({sat, sun}) => (sat && speakingSaturday) || (sun && speakingSunday) 
    )
    .filter(
        ({firstName, lastName}) => (firstName.toLowerCase() + lastName.toLowerCase()).includes(searchText.toLowerCase())
    )
    .sort((a, b)=>{
        if(a.firstName < b.firstName) return -1;
        if(a.firstName > b.firstName) return 1;
        return 0
    })
    :[];
}