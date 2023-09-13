import { useEffect, useState } from "react"
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
     const [cnt, setCnt] = useState(0);

     useEffect(()=>{
        console.log('Rendering ...')
     },[cnt]);
     function renderMe(){
        setCnt(cnt + 1);
        console.log('renderMe called ...')
     }
     localStateVlauesIndex = 0;
    return (

        <DemoApp useState={useMyState} />
    )
}