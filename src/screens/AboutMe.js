import classes from './css/AboutMe.module.css';

// import Leaf from './images/mapleleaf.png';
const AboutMe = () => {
    
    return (

      <div className="center_all">
        <h2  className={classes['center']}>About Me</h2>
      <p>  
        <h5>
    I'm David. I am a developer from Toronto, Ontario with a background in undergraduate
    Physics and Mathematics, and a huge nerd all around. During my last few years at uni, 
    I developed an interest in software development and data science after learning Python.
      </h5>
      </p>
      <h5>
    Some of my current technical skills include full-stack web development, machine learning and 
    wherever I can apply logic to solve a scalable problem. 
        </h5>
        <h5>
    In addition to the technical stuff, I have a few amateur interests including fitness, 
    music theory and electric guitar, history and random trivia.
        </h5>

      <div  className={classes['center']}>
        <h2 >
          Past Experience
        </h2>
      </div>

      <div>
        <h5>
          As mentioned, I studied at UofT. Additionally, I have worked many jobs while finishing my degree
          and shortly thereafter, including telemarketing, sales, construction, being a teaching assistant, working as a 
          school crossing guard, and more recently as a fullstack developer. 
        </h5>
      </div>

      <div>
        <h5>
          Outside of work, I'm an avid gym goer. I make time for exercise as often as possible,
          as it provides the routine necessary to form a well-structured schedule, and hopefully keeps
          me on this earth just a little longer. Between that and guitar practice, I managed to maintain
          some semblance of normalcy throughout the pandemic in Ontario.

        </h5>
      </div>
      
    </div>
    
        

    
        
    )
}

export default AboutMe;