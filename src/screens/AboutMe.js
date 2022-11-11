import classes from './css/AboutMe.module.css';

// import Leaf from './images/mapleleaf.png';
const AboutMe = () => {
    
    return (

      <div className="center">
                <h1 className={classes["title-sections"]}>About Me</h1>
      <p className={classes["paragraphs"]}>  
        <h5>
          <p>
          My formal education was as a specialist in Physical and Mathematical 
          Sciences (Physics) at the University of Toronto, where I obtained my 
          Bachelor of Science. During my attendance, I served as a teaching assis-
          tant for multiple Physics and Mathematics classes, and then did volunteer
          research assistance for the UTSC material sciences projects
          shortly after graduating.  
          </p> 
    
          <p>
          During the course of studying, I picked up skills in a number of additional areas, 
          namely numerical methods, general computer science, and machine learning. Many classes
          required me to become proficient in Python to numerically solve different systems of 
          differential equations. 
          </p>

          <p>
          After realizing I needed to greatly improve this skill (I wasn't very good at programming!),
          I practised regularly, and even obtained a Udemy certification from Jose Portilla's Python For 
          Data Science course. Additionally, I picked up Javascript, C++, SQL, and a few other languages 
          and frameworks while my province was in lockdowns, and became very proficient with React, Django, 
          Flask, PostgreSQL, SQLite, AWS and OpenCV for image processing.
          </p>
      </h5>
      </p>
    
      <div>
    <p className={classes["paragraphs"]}>
        
        <h5>

      
        </h5>

        </p>
      </div>

      
      <h1 className={classes["title-sections"]}>Personal Life</h1>
      <p className={classes["paragraphs"]}> 

        <h5>
        <p>
          Currently I have been doing a mix of freelance software (web and mobile) 
          development, as well as tutoring math and science intermittently. 
          While this lifestyle is comfortable, I'm currently hoping for a more stable,
          safe longterm position in the right company going forward.
        </p>

        <p>
          My technical interests so far encompass a mix of Software Engineering and Data Science.
          It is my belief also that many Software Engineers may be forced to learn Data Science 
          and machine learning techniques in the near future, so a company would benefit from having 
          an engineer with a mix of both skill sets... such as myself!



















          
        </p>
        </h5>  
        
      </p>
    </div>
    
        

    
        
    )
}

export default AboutMe;