import useGeneralisedCrudMethods from "./useGeneralisedCrudmethod";


function useSpeakerData(){

    const url = '/api/speakers';
    const errorNotification = (error)=>{
        console.log("Error from useSpeakerData", error);
    }

    const {
    data,
    loadingStatus,
    error,
    createRecord,
    updateRecord,
    deleteRecord,
} = useGeneralisedCrudMethods(url, errorNotification)

 function createSpeaker(speakerRec, callbackDone){
    createRecord(speakerRec, callbackDone);
 }

 function updateSpeaker(speakerRec, callbackDone){
    updateRecord(speakerRec, callbackDone);
 }

 function deleteSpeaker(id, callbackDone){
    deleteRecord(id, callbackDone);
 }

    return {
        speakerList: data,
        loadingStatus,
        error,
        createSpeaker,
        updateSpeaker,
        deleteSpeaker
    };

}

export default useSpeakerData;