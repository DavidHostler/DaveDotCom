import React from 'react';
import Header from '../Header';
import Chad from './images/chad.jpg';
// import './sections.css';
import './horizontal.css';

const About = () => {
    return(
        <div style={{backgroundColor:'black', color:'white', height:'100vh'}}>
            <Header/>
            <h2 className='about-me'>About Me</h2>
 
           
            {/* Typing Animation Here: */}
            {/*
             Machine Learning Engineer 
                Full Stack Developer 
                Technology Executive
            */}
            {/* Horizontal list of icons  */}
          <ul>
            <li>
                <p className='paragraph'>
                I'm David, a Software Engineer from Canada.
    
                </p>
                <p className='paragraph'>
                Interests include machine learning, object oriented programming, system design, 
                automation and heavy metal music.
                </p>
                <p className='paragraph'>
                    Thanks for visiting :)
                </p>
                 
            </li>
            <li>
                {/* <img src={Chad}
                    style={{
                    position:'absolute',
                    left:'70vw',
                    bottom:'25vh',
                    width:'25vw', height:'40vh'}}
                    /> */}
            </li>
          </ul>
          
        </div>
    );
}


export default About;