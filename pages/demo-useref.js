import React, { useRef } from "react"



const Demo = () =>{
    const imgRef = useRef();
    const onMouseOverCount = useRef(0);
    return(
        <div className="container">
            <img src="/images/Speaker-1124.jpg"
            style={{filter:'grayscale(100%)'}}
            ref={imgRef}
            onMouseOver={()=>{imgRef.current.style.filter = 'grayscale(0%)'
                onMouseOverCount.current++}}

            onMouseOut={()=>imgRef.current.style.filter = 'grayscale(100%)'}/>
            <hr />
            <button onClick={()=>{alert('Registered! onMouseOverCount: '+onMouseOverCount.current)}}>
                Register
            </button>

        </div>
    )
}
export default Demo;