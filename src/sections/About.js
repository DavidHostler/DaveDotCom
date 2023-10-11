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
                    I'm David, a Software Engineer
                    from Toronto, Canada.
                    
                </p>
                <p className='paragraph'>
                    Some of my more recent work experience includes being CTO at PreemptorAI, 
                    joining EquoAI as an ML Engineer, working as an e-commerce web-developer, 
                    and having been a private Physics, Chemistry,  Computer Science teacher at one point.
                </p>
                <p className='paragraph'>

                    Additionally, I have worked on two other startups previously, one as far back as 2019/2020, 
                    one in the grocery delivery space and another having been a Metaverse company in 2021.
                    Prior to landing roles in tech, I was a research assistant with the University of Toronto,
                    working on using ML models to predict properties of atomic structures.
                </p>
                <p className='paragraph'>
                    Currently, I specialize in the deployment of ML models, and in designing 
                    event-driven applications and microservice architectures for various products, 
                    combining a mix of advanced back end developer skill with intermediate data engineering. 
                    
                    
                </p>
                <p className='paragraph'>
                    In my spare time, I'm passionate about fitness, world history, mathematics,
                    and heavy music. Personally I wish to learn more about the cognitive theory behind 
                    Large Language Models and applications of the Transformer model architecture
                    to time-series analysis.
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