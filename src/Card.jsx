import react, {useState, useEffect} from 'react'
import axios from 'axios'
import Tilt from 'react-parallax-tilt'
export default function Card({name, imageUrl, afterClick}){
    const handleClick = () =>{
        afterClick(name, imageUrl);
    }
    return(
        <Tilt glareEnable={false} tiltMaxAngleX={10} 
        tiltMaxAngleY={10} perspective={1000} 
        >
        <div className="card" onClick={handleClick}>
            <h1>{name}</h1>
            <img src={imageUrl} alt={name}/>
        </div>
        </Tilt>
    )
}