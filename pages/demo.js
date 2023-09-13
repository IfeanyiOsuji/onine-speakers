import { useEffect, useReducer, useState } from "react"
import DemoApp from "./demoApp";

const localStateValues = []; 
let localStateVlauesIndex = 0;
export default function Demo(){
       
        
    const useMyState = (initialstate)=>{
        const localStateVlauesIndexLocal = localStateVlauesIndex;
        if(localStateValues[localStateVlauesIndexLocal] === undefined){
            localStateValues[localStateVlauesIndexLocal] = initialstate;
        }
    
        function setValue(val){
            localStateValues[localStateVlauesIndexLocal] = val;
            renderMe();
        }
        localStateVlauesIndex++;
        return [localStateValues[localStateVlauesIndexLocal], setValue];
    
     }
     const [cnt, dispatch] = useReducer((state, action) =>{
            switch(action.type){
                case 'increment':
                    return state + action.incrementValue;
                default:
                    return action;
            }
        }, 10);

     useEffect(()=>{
        console.log('Rendering ...')
     },[cnt]);
     function renderMe(){
        dispatch({type:'increment', incrementValue: 1});
        console.log('renderMe called ...', cnt)
     }
     localStateVlauesIndex = 0;
    return (

        <DemoApp useState={useMyState} />
    )
}