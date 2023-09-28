import React from 'react';
import Header from '../Header';
import './sections.css';

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
            
          <div>
            <p className='paragraph'>
                I'm David, a Machine Learning Engineer and Physicist
                from Toronto, Canada.
            </p>
            <p className='paragraph'>
                Over the last several years, I have worked as an ML-Research Assistant, 
                a private Physics and Computer Science teacher, an E-Commerce Developer, 
                and Chief Technology Officer at a startup. Some of the startups that I've 
                worked at have dabbled in highly interesting concepts, from Augmented Reality
                to Biometric Verification and Generative AI.  
            </p>
            <p className='paragraph'>
                In my spare time, I'm passionate about fitness, world history, mathematics,
                and heavy music. Currently I'm fascinated with the cognitive theory behind 
                Large Language Models and applications of the Transformer self-attention mechanism 
                to time-series analysis.
            </p>
          </div>
        </div>
    );
}


export default About;