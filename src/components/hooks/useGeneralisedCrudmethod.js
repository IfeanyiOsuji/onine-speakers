import axios from "axios";
import { useEffect, useState } from "react";


const LOADING_STATUS = ['loading', 'errored', 'success']

function useGeneralisedCrudMethods(url, errorNotification){
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loadingStatus, setLoadingStatus] = useState('loading');

    if(!url || url.length ===0){
        throw 'useGeneralisedCrudMethods no url passed in error';
    }

    function formatErrorString(e, url){
        const errorString = 
        e?.response?.status === 404 
        ? e?.message + ' url ' + url 
        : e?.message + e?.response?.data;

        
        return errorString;
    }

    useEffect(()=>{
        async function getData(){
            try{
                
                setLoadingStatus(LOADING_STATUS[0]);
                const result = await axios.get(url);
                console.log(result)
                setData((await result).data);
                setLoadingStatus(LOADING_STATUS[2]);
            }
            catch(e){
                setError(e);
                setLoadingStatus(LOADING_STATUS[1]);
            }
        }
        
        getData();
    },
    [url]);

    function createRecord(createObject, callbackDone){

        async function addData(){
        const startingData = data.map(rec =>{
            return {...rec};
        });
        try{
            createObject.id = Math.max(...data.map((o)=>o.id), 0) + 1
            setData(function(oriState){
                return [createObject, ...oriState];
            });
            await axios.post(`${url}/${createObject.id}`, createObject);
            if(callbackDone)callbackDone();
            console.log('created')
        }
        catch(e){
            setData(startingData);
            const errorString = formatErrorString(e, url);
            errorNotification?.(errorString);
            if(callbackDone)callbackDone();
        }
    }
        addData();
    }

    function updateRecord(updateObject, callbackDone){
        const id = updateObject.id // All speakers must have a column id

        async function updateData(){
            //const startingData = [...data]  // fails because not deep copy 
            const startingData = data.map(rec =>{
                return {...rec};
            });

            try{
                setData(function(oriState){
                    const datarecord = oriState.find(rec => rec.id === updateObject.id);
                    // only update the fields passed in for the update object
                    for(const[key, value] of Object.entries(updateObject)){
                        datarecord[key] = value === undefined? datarecord[key] : value;
                    }
                    return oriState.map(rec => rec.id === datarecord.id ? datarecord: rec)
                });
                await new Promise(resolve => setTimeout(resolve, 2000));
                
                // get the full record that have been updated
                const updatedrecord = data.find(rec => rec.id === id);
                await axios.put(`${url}/${id}`, updatedrecord);
                if(callbackDone){
                    callbackDone();
                }
            }
            catch(e){
                setData(startingData);
            const errorString = formatErrorString(e, url);
            errorNotification?.(errorString);
            if(callbackDone)callbackDone();   
            }
        }
        if(data.find(rec => rec.id === id)){
            updateData();
        }
        else{
            const errorString = `No record found for id ${id}`;
            errorNotification?.(errorString);
        }

    }

    function deleteRecord(id, callbackDone){

        async function deleteData(){
            try{
                setData(function(oriState){
                    return oriState.filter(rec => rec.id !== id)
                });
                await axios.delete(`${url}/${id}`);
                if(callbackDone)callbackDone();
            }
            catch(e){
                setData(startingData);
                const errorString = formatErrorString(e, url);
                errorNotification?.(errorString);
                if(callbackDone)callbackDone();   
                }
            }
            if(data.find(rec => rec.id === id)){
                deleteData();
            }
            else{
                const errorString = `No record found for id ${id}`;
                errorNotification?.(errorString);
            }
        }

        return {
            data,
            loadingStatus,
            error,
            createRecord,
            updateRecord,
            deleteRecord
        }

    }

    export default useGeneralisedCrudMethods;
