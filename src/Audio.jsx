import react, {useState, useEffect} from 'react'



export default function Audio({src}){
    const [playing, notPlaying] = useState(false);
    return(
        <>
        <button className="audio" onClick={handleAudio}>Audio</button>
        </>
    )
}