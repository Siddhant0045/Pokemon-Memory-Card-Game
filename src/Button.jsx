import react, {useState, useEffect} from 'react';


export default function Button({difficulty, afterClick}){
    function handleClick(){
        afterClick(difficulty);
    }
    return(
        <>
        <button className="button-56" onClick={handleClick}>{difficulty}</button>
        </>
    )

}