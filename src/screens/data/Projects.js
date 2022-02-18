import React, { useState } from "react";
import ProjectData from './ProjectData';

//Define the different projects created
var milk = new ProjectData(
    'Milk',
    'https://github.com/DavidHostler/Milk',
    'Milk (it is a weird name I know, but some people like a nice glass of Milk now and then). This is a super resolution generative adversarial network that receives an image of a given size, and uses deep learning to "hallucinate" a more high resolution version of that image.'
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



const Projects = () => {
    var milk = new ProjectData(
        'Milk',
        'https://github.com/DavidHostler/Milk',
        'Milk (it is a weird name I know, but some people like a nice glass of Milk now and then). This is a super resolution generative adversarial network that receives an image of a given size, and uses deep learning to "hallucinate" a more high resolution version of that image.'
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

    const projects = [gauss, milk, draco];
    const [project, setProjects] = useState("");

    return (

        <div>

        <div>
            
        {projects.map(project=>(
        <button 
        type="button"
        key={project}
        
        onClick={()=>setProjects(project)}>
            {project.title}
        </button>
        
        ))}


        </div>    
                <div className = "center_all">
                    <p>{project.title}</p>

                    <h5>{project.body}</h5>
                </div>

        </div>
    )

}



export default Projects;