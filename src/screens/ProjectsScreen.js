import classes from './css/ProjectsScreen.module.css';
import ProjectData from './data/ProjectData';
import { Component } from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Outlet,
    useParams
  } from 'react-router-dom';

//Declare the data to be presented!
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

function ProjectDetails(props){
    return(
        <div className="center_all">
        <p>{props.title}</p>
        <h1>{props.link}</h1>
        <h3>{props.body}</h3>
        </div>
    )
}
  
function ProjectsScreen(){
    return(

        <nav>
            <ul>
                <Link>
                <button>Gauss</button>
                </Link>
            </ul>
        </nav>
    
    );

    
     
}
  

export default ProjectsScreen;
// const ProjectsScreen = () => {
//     return(
//         <div >
//     <div>
//         <h1 className="custom-subTitle"></h1>
//     <div>
//         <h1>Welcome to Projects</h1>
//     </div>
//         <div><h2>Here is a list of some things that I've worked on!</h2></div>
        
//         <div><h5>My Github: https://github.com/DavidHostler</h5></div>

//         <div><h2>Machine Learning Related Projects</h2></div>
//         <h5>Here are some examples of ML projects that I've created 
//             in 2020, 2021:
        
//         </h5>
   
//         <h5>
//             "Milk" (it's a weird name I know, but some people like a nice glass of Milk now and then).
//             This is a super resolution generative adversarial network that  receives an image of a given
//             size, and uses deep learning to "hallucinate" a more high resolution version of that image.            
            
//         </h5>
//             <div>
//                 <h5>
//                 https://github.com/DavidHostler/Milk
//                 </h5>
//             </div>

//             <div><h5>
                
//             https://github.com/DavidHostler/Pytorch-Gaussian-NN

//                 </h5></div>
//         <h5>

//             This is a little research project I worked on briefly in late 2020 and early 2021.
//             I had volunteered to help some grad students in the University of Toronto Scarborough 
//             materials science research project with implementing a single hidden-layer neural network
//             in order to model high-precision Gaussian functions given a single input value.

//             The idea is that if a given element or compound has a known excitation energy known to a 
//             certain accuracy, then we could improve this accuracy by using a neural network to approximate
//             the Gaussian distribution function centred around this excitation energy eigenvalue.

//             The results were that the required neural architecture was insufficient for such a desired result,
//             since training the neural network on successive eigenvalue training data had the effect of causing the 
//             model to "unlearn" anything it knew of previous eigenvalue distributions.
//             Therefore, I posit that the only way to implement this method successfully would be to ascribe to the
//             model an attention window- e.g. RNN's, LSTM's or preferably Transformers.

//             These models were deemed too complicated for the desired architecture and so they decided to implement
//             the energy distribution functions directly by hard-coding the distribution function.

//         </h5>

//             <div><h3>DRACO</h3></div>
//            <div> <h5>https://github.com/DavidHostler/Draco</h5> </div>
//         <h5>
//             This one is a favorite for a couple of reasons. I was attempting to implement 
//             a Reinforcement Learning agent using a technique called Deep Deterministic Policy Gradients
//             or DDPG for short. I wanted to maximize the speed of my agent as well.
            
//             Python is known to run about ~ 20 times more slowly than C/C++, 
//             so I figured that I'd implement my solution in C++ using my current understanding 
//             of the Python code at the time.

//             In doing so,  I ran into a few build issues with the Tensorflow C API and figured that
//             since DDPG only uses deep hidden layers (i.e. linear transformations of the form 
//             Ax + b = y, where A is a matrix a.k.a. "weights"", x is the input tensor, b is the bias)
            
//             This project allowed me to play around with a super fast RL simulation and learn more 
//             about the direct behaviour of deep learning models from a mathematical point of view, 
//             as I had to hard-code the linear transformations and take the derivatives of activation 
//             functions numerically.

//             If using this model, depending on the user's architecture you might want to consider implementing
//             a "Big Float" datatype to prevent "Nan" values as weights, biases or gradients.
//         </h5>

//         <div><h2>Web Develpment</h2></div>

//         <div><h5>https://github.com/DavidHostler/Invinzsible</h5></div>

        
//         <h5>

//         During 2021, I briefly worked as a Fullstack developer for a business 
//         called Invinzsible Inc. With a small team, I implemented many (but not all)
//         of the website's features using my favorite stack, ReactJS and the Django
//         Rest Framework.

//         Using ReactJS, I built a basic layout of page navigation to get from the homse
//         page to the checkout and inventory screens. Additionally, I implemented a backend
//         using Django with Python and created three endpoints: Products, Orders, and Cart.
//         I deployed this basic REST API to Heroku, and used Postman to make sure that various 
//         HTTP requests worked (GET, POST, PUT, and DELETE).
        
//         Once the basic CRUD app was working online, I made use of Axios, a very useful web client
//         for NodeJS, and basic React hooks (useState, useEffect) to interact with JSON data from
//         the API. This would allow a potential user to view a product, add it to their cart, and 
//         make a purchase of all items in said cart once their shopping trip is satisfactory.

//         </h5>
         
//          <div><h5>
//              <div>I have developed a ton of other projects related to web and mobile
//                 fullstack development, some yet to be made public on Github.
//                 Coming soon, I may post the React-Native chat app code that I've been working on
//                 for mobile (I was hoping to maybe get a few customers should I complete it!)
//                 </div>
//              <div>
//                 Additionally, I have a few stock projects that I may have had little time to 
//                 complete but that I thought were potential money-makers, including a dating app, 
//                 a cryptocurrency payment service, and maybe a data based fitness app.
//              </div>
//              <div>
//                 The latter I suspect will be difficult to monetize as a consequence of human hubris-
//                 attempting to make accurate recommendations for fitness routines, users would have to give
//                 honest measurements of their strength and size. The problem with this is that most 
//                 young men will say that they can bench 225 and think that they are 15% bodyfat!
//              </div>


                
            
                

                

//              </h5></div>
//     </div>
//     </div>

//     )
// }

// export default ProjectsScreen;