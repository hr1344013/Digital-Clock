// understanding the concept of the useRef in react js .
import React, {useState, useEffect, useRef} from "react";

function Refrence(){

    const inputRef = useRef(null);
    

    useEffect(() => {
        console.log("COMPONENT RENDERED");
        console.log(inputRef);
    });

    function handleClick(){
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "yellow";
    }

    return(
        <>
        <div>
            <button onClick={handleClick}>
            Click Me !
        </button>
        <input ref = {inputRef}/>
        </div>
        </>
    )
}

export default Refrence