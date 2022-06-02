import classes from './css/AboutMe.module.css';

// import Leaf from './images/mapleleaf.png';
const AboutMe = () => {
    
    return (

      <div className="center">
                <h1 className={classes["title-sections"]}>About Me</h1>
      <p className={classes["paragraphs"]}>  
        <h5>
    I'm David. I am a developer from Toronto, Ontario with a background in undergraduate
    Physics and Mathematics, and a huge nerd all around. During my last few years at uni, 
    I developed an interest in software development and data science after learning Python.
      </h5>
      </p>
    <p className={classes["paragraphs"]}>
      <h5>
    Some of my current technical skills include front end and back end web development, machine learning, 
    algorithms and data structures, error debugging, and causing people to cringe at my dad jokes.
        </h5>
    </p>
    <p className={classes["paragraphs"]}>
        <h5>
    In addition to the technical stuff, I have a few amateur interests including fitness, 
    music theory and electric guitar, history and random trivia.
        </h5>
    </p>

      <div  className={classes["center"]}>
        <h1 className={classes["title-sections"]}>
          Past Experience
        </h1>
      </div>

      <div>
      <p className={classes["paragraphs"]}>
       <h5>
          As mentioned, I studied at UofT. Additionally, I have worked many jobs while finishing my degree
          and shortly thereafter, including telemarketing, sales, construction, being a teaching assistant, working as a 
          school crossing guard, and more recently as a fullstack developer. 
        </h5>
       </p>
      </div>

      <div>
    <p className={classes["paragraphs"]}>
        
        <h5>
          Outside of work, I'm an avid gym goer. I make time for exercise as often as possible,
          as it provides the routine necessary to form a well-structured schedule, and hopefully keeps
          me on this earth just a little longer. Between that and guitar practice, I managed to maintain
          some semblance of normalcy throughout the pandemic in Ontario.

        </h5>

        </p>
      </div>

      
      <h1 className={classes["title-sections"]}>Personal Life</h1>
      <p className={classes["paragraphs"]}>  
        <h5>
        I've got hobbies. Most people think programmers and STEM people in general have very boring hobbies. 
        I tend to disagree. 
        Every year, I try to make the biggest metal show in Ontario even if it means booking time out of town. 
        In 2022 alone, within the span of less than two months I saw both Judas Priest and Megadeth live! 
        
        Additionally, I've been into fitness for a few years now. Whenever I can, I get friends to join me  
        at the gym. Mainly because I need a spotter! 
        This was a big motivator for the Natty Or Not application, which you can read more about in the  
        projects section of this site. 

        
        Other stuff I do in my spare time is lacklustre in comparison- I hit the beach every week in the summer, 
        go on the occasional date or movie night, or see some indie bands perform live at a dive bar. 
        And then there's solving math problems, solving programming problems, and of course using programming to solve  
        math problems.

        



          
      </h5>
      </p>
    </div>
    
        

    
        
    )
}

export default AboutMe;