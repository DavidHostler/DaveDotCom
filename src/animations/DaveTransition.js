import React, { useState, useEffect } from 'react';
import Dave from '../screens/data/Dave.jpg';
import { CSSTransition, Transition } from 'react-transition-group';



const DaveTransition = () =>{


    // const [transitionState, setTransitionState] = useState(true);
    // const [showDave, setShowDave] = useState(true);
    // const [imageClasses, setImageClasses] = useState("d-none");




    // function showImage(node) {
    //     setImageClasses("d-block");
    //     node.style.opacity = 0;
    //   }


    const [showCat, setShowCat] = useState(false);
  const [imageClasses, setImageClasses] = useState("d-none");
  /** End Variables for Using CSS Transitions  */
  /** Start Variables for Using Transition Groups  */
  // const [languages, setLanguages] = useState(randomItems(defaultLanguages, 4));
  const [counter, setCounter] = useState(11);
  /** End Variables for Using Transition Groups  */
  /** Start Variables for Using Switch Transitions  */
  const [isDanger, setIsDanger] = useState(true);
  const [isDanger2, setIsDanger2] = useState(true);
  /** End Variables for Using Switch Transitions  */

  /** Start Helper Functions for Using CSS Transitions */
  function toggleCat () {
    setShowCat(!showCat);
  }

  function hideImage() {
    setImageClasses("d-none");
  }

  function showImage(node) {
    setImageClasses("d-block");
    node.style.opacity = 0;
  }

  function removeOpacity (node) {
    node.style.opacity = 1;
  }
  /** End Helper Functions for Using CSS Transitions */

  /** Start Helper Functions for Using Transition Groups */
  

  
      
    const transitions = {
        entering: {
          display: 'block'
        },
        entered: {
          opacity: 1,
          display: 'block'
        },
        exiting: {
          opacity: 0,
          display: 'block'
        },
        exited: {
          opacity: '0',
          display: 'none'
        }
      };
    return(
//         <Transition in={transitionState} timeout={300} >
// 	{state => (
// 		<img src={Dave} alt="dolad" style={{
// 			transition: 'all .1s',
// 			opacity: 0,
// 			display: 'none',
//             width:  '225px',
//             height:  '225px',
//             borderRadius:'50%',
// 			...transitions[state]
// 			}} className="mt-2" />
// 	)}
// </Transition>
        <CSSTransition
        in={showImage} timeout={500} classNames={{
            enterActive: 'animate__bounceIn',
            exitActive: 'animate__bounceOut'
          }} 
          onEnter={showImage}
          onEntered={removeOpacity}
          onExited={hideImage}
          className={`animate__animated my-4 ${imageClasses}`}
        
        >
            
        </CSSTransition>
    )
}

export default DaveTransition;