import React from "react";
import './ui.css';
const ProjectCard = (props) =>{
    return(
        <div style={{
            borderRadius:'15px',
            width:'25%',
            }}>
            <ul>
                <img 
                style={{width:'100%', height:'8.5vw'}}
                src={'https://www.wellingtonadvertiser.com/wp-content/uploads/2023/04/Holland-LopWEB-scaled.jpg'}/>
                <h1>{props.name}</h1>
                <h3>{props.description}</h3>
            </ul>
        </div>
    )
}

// const ProjectCard = () =>{
//     return(
//         <div>
//             <h2 style={{textAlign:"center"}}>Product Card</h2>
//             <div className="card">
//             <img src="https://www.w3schools.com/w3images/jeans3.jpg" 
//             alt="Denim Jeans" style={{width:'100%'}}
//             />
//             <h1>Tailored Jeans</h1>
//             <p className="price">$19.99</p>
//             <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
//             <p><button>Add to Cart</button></p>
//             </div>
//         </div>
//     );
// }
// export default ProjectCard;
export default ProjectCard;