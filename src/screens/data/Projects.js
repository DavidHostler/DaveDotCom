import React, { useState } from "react";
import ProjectData from './ProjectData';
import classes from '../css/Projects.module.css';
import github from './github.png';
import Button from 'react-bootstrap/Button';
import { alignPropType } from "react-bootstrap/esm/types";

//Make the Github logo bounce
import { bounce } from 'react-animations';
import styled, { keyframes } from 'styled-components';
const BounceGithub = styled.div`animation: 2s ${keyframes `${bounce}`} infinite`;


const Projects = () => {
    var milk = new ProjectData(
        'Milk',
        'https://github.com/DavidHostler/Milk',
        'Milk (it is a weird name I know, but some people like a nice glass of Milk now and then). This is a super resolution generative adversarial network that receives an image of a given size, and uses deep learning to "hallucinate" a more high resolution version of that image. This project is built on ExpressJS  with HTML and CSS, and uses a pretrained GAN model based off of the Pytorch website. That being said, while I did not train this model, I figured it would be a cool starting point to use for demonstration purposes.'
    );
    
    var gauss = new ProjectData(
        'Gaussian',
        'https://github.com/DavidHostler/Pytorch-Gaussian-NN',
        'This is a little research project I worked on briefly in late 2020 and early 2021. I had volunteered to help some grad students in the University of Toronto Scarborough materials science research project with implementing a single hidden-layer neural network in order to model high-precision Gaussian functions given a single input value. The idea is that if a given element or compound has a known excitation energy known to a certain accuracy, then we could improve this accuracy by using a neural network to approximate the Gaussian distribution function centred around this excitation energy eigenvalue. The results were that the required neural architecture was insufficient for such a desired result, since training the neural network on successive eigenvalue training data had the effect of causing the model to "unlearn" anything it knew of previous eigenvalue distributions. Therefore, I posit that the only way to implement this method successfully would be to ascribe to the model an attention window- e.g. RNNs, LSTMs or preferably Transformers. These models were deemed too complicated for the desired architecture and so they decided to implement the energy distribution functions directly by hard-coding the distribution function.'
    );
    
    var draco = new ProjectData(
        'Draco',
        'https://github.com/DavidHostler/Draco',
        'This one is a favorite for a couple of reasons. I was attempting to implement a Reinforcement Learning agent using a technique called Deep Deterministic Policy Gradients or DDPG for short. I wanted to maximize the speed of my agent as well. Python is known to run about ~ 20 times more slowly than C/C++, so I figured that I would implement my solution in C++ using my current understanding of the Python code at the time. In doing so, I ran into a few build issues with the Tensorflow C API and figured that since DDPG only uses deep hidden layers (i.e. linear transformations of the form Ax + b = y, where A is a matrix a.k.a. "weights"", x is the input tensor, b is the bias) This project allowed me to play around with a super fast RL simulation and learn more about the direct behaviour of deep learning models from a mathematical point of view, as I had to hard-code the linear transformations and take the derivatives of activation functions numerically. If using this model, depending on the user architecture you might want to consider implementing a Big Float datatype to prevent Nan values as weights, biases or gradients.'
    );

    
    var nattyornot = new ProjectData(
        'Natty Or Not',
        'https://github.com/DavidHostler/NattyOrNot/tree/master',
        'Here, I have implemented a very heavy full stack web application for the purpose of determining whether somebody is a natural or enhanced lifter. I wrote and trained a binary classifier network in Tensorflow on images of professional bodybuilders and on those of average-to-decent physiques. Additionally, I set up a set of REST API endpointsusing Django with Python3 to enable users to interact with the neural network from behind the webpage. A simple webpage in ReactJS is also written, with instructions to allow a user to upload a picture of any physique and obtain a prediction as to whether the image is of a natural or enhanced lifter. It is purely for entertainment and is not meant to be used in lieu of a real drug test.'
    )

    const projects = [gauss, milk, draco, nattyornot];
    const [project, setProjects] = useState("");

    // if(project == ""){
    //     return(
    //        <div>
    //             <h2>Please Click On One Of The Project Buttons In The Upper Left Corner of Your Screen!</h2>
    //        </div>
    //     )
    // }
    
    function isButtonClicked(){
        if(project == ""){
            return "Please click one of the project buttons!";
        }
        else{
            console.log("Keep calm and carry on, tovarisch!")
        }
    }

    return (

        <div>

        <div>
            
        {projects.map(project=>(
        <button 

        style={{color:"#000000",
                backgroundColor:"#d4af37",
                // borderRadius: '15px',
                // border: 'none',
         margin: "1%", boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)"}} 
        
        className="custom_subtitle"
        type="button"
        key={project}
        
        onClick={()=>setProjects(project)}>
            {project.title}
        </button>
        
        ))}


        </div>    
                <div className = "center_all">
                    <h1 className={classes['center']}>{project.title}</h1>

                    {/* <h2 className={classes['center']}>
                        <a href = {project.link}
                        className={classes['hyperlink']}
                        >
                    
                        {project.link}
                        </a>
                    </h2> */}
                    <div className={classes['center']}>
                    <a href = {project.link}
                        className={classes['hyperlink']}
                        >
                    
                    <BounceGithub>
                    <img src={github}
                    
                    // 'https://static01.nyt.com/images/2016/09/28/us/28xp-pepefrog/28xp-pepefrog-superJumbo.jpg'
                    style={{borderRadius: '50%',
                            height:'50px',
                            width: '50px'}}/>
                    </BounceGithub>
                       
                        </a>
                    </div>
                    

                        <p 
                        style={{
                            display: 'block',
                            marginTop: '1em',
                            marginBottom: '1em',
                            marginLeft: '2rem',
                            marginRight: '2rem'
                        }}
                        >

                        <h5>
                        {project.body}
                        </h5>

                        </p>
                </div>

        </div>
    )

}



export default Projects;