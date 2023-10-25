import React from "react";
import ProjectCard from "./ui/ProjectCard";
import Header from "../Header";
import Card from "./ui/Card";


const data = [
    {
        name:'Natty-Or-Not',
        imagePath:'https://staticg.sportskeeda.com/editor/2022/08/471f9-16609079272704-1920.jpg',
        github:'https://github.com/DavidHostler/NattyOrNot',
        description:'Convolutional neural net trained to detect steroid use just from physique pictures',
        procedure:'Built Python webscraper with Beautifulsoup, used it to scrape Google Images for physiques of various athletes. Preprocessed and cleaned data into training and validation sets, then built and trained a convolutional neural network in Tensorflow to identify users with a high-probability of steroid use. Built ReactJS front end, and Flask REST API to enable users to upload the image to a stateless Python backend. Wrote and tested HTTP Javascript request logic to display API response based on neural network prediction.'
    },
    {
        name:'Autopilot',
        imagePath:'https://png.pngtree.com/background/20230417/original/pngtree-robot-future-world-cyberpunk-style-background-picture-image_2446170.jpg',
        github:'https://github.com/DavidHostler/AutopilotAI',
        description:'Self-driving AI bot for driving based videogames. Built with multithreaded model deployment.',
        procedure:"Wrote a Python keylogger. Got permission to install on friend's RTX 2080 gaming PC. Wrote data pipeline to collect timestamps of user keystrokes for training the AI. In order to optimize training, implemented training data as a Martingale from stochastic calculus as used in finance to make predictions during options trading."
    },
    {
        name:'Draco',
        imagePath:'https://cdna.artstation.com/p/assets/images/images/030/987/842/large/sam-chan-art-r1-samchan.jpg',
        github:'https://github.com/DavidHostler/Draco',
        description:'Open-source framework for deploying deep learning models in C++ in embedded systems.',
        procedure:"Wrote Layer classes, implementing a deep neural network as a Doubly-Linked List such that each hidden Layer is a Node of the data structure. The forward pass is done by traversing the list forward, whereas backpropagation is done by computing the matrix derivatives of the loss function at each layer and traversing in the opposite direction back toward the head of the Linked List."
    },
    // {
    //     name:'EquoAI Biometric Verification',
    //     description:'Typing Dynamics Verification model. ',
    //     procedure:"Wrote Layer classes, implementing a deep neural network as a Doubly-Linked List such that each hidden Layer is a Node of the data structure. The forward pass is done by traversing the list forward, whereas backpropagation is done by computing the matrix derivatives of the loss function at each layer and traversing in the opposite direction back toward the head of the Linked List."
    // },
    // {
    //     name:'Streak Compilation Generator',
    //     description:'',
    //     procedure:"Wrote Layer classes, implementing a deep neural network as a Doubly-Linked List such that each hidden Layer is a Node of the data structure. The forward pass is done by traversing the list forward, whereas backpropagation is done by computing the matrix derivatives of the loss function at each layer and traversing in the opposite direction back toward the head of the Linked List."
    // }    
];

const Projects = () =>{
    return(
        <div>
            <Header/>
               {/* 
                Build list of projects here. 
                Should be gallery 
            */}
            {/* <ProjectCard/> */}
            {/* <Card/> */}
            <ul>
            {data.map((item, key) => {
                    return <li key={key}>
                        <Card 
                        name={item.name}
                        description={item.description}
                        image={item.imagePath}
                        github={item.github}
                        />
                    </li>
                }
            )}
            </ul>
                   
        </div>
    )
}

export default Projects;