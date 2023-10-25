import React, { useState, useEffect } from "react";

import './card.css';
const Card = (props) =>{
    const [image, setImage] = useState('');

    useEffect(()=>{
        setImage(props.imagePath);
    })
    return(
        <div  className="card"
        // style={{height:'375'}}
        >
            <h2 
            // style={{textAlign:"center"}}
            >{props.name}</h2>
            <div >
            <img 
            src={props.image} 
            style={{width:props.width, height:props.height}}
            // style={{width:'27.5vw', height:'35vh'}}
            />
            {/* <h1 className="price">View Explanation</h1> */}
            <p className="price">{props.description}</p>
            {/* <p><button>Get Explanation</button></p> */}
                <a href={props.github}>
                    <button>View Github</button>
                </a>
            </div>
        </div>
    );
}
export default Card;