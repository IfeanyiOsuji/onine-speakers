




export default function useSpeakerSortAndFilter(speakerList,speakingSaturday,  speakingSunday, searchText){
   
console.log('useSpeakerSortAndFilter called')

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