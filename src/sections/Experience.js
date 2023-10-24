import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Header from "../Header";
const Experience = () => {
    return(
    <div style={{backgroundColor:'grey'}}>
        <Header/>
    <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2023 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            // icon={<WorkIcon />}
        >
            <h3 className="vertical-timeline-element-title">Machine Learning Engineer (Consulting)</h3>
            {/* <h3 className="vertical-timeline-element-title">EquoAI </h3> */}

            <h4 className="vertical-timeline-element-subtitle">EquoAI</h4>
            <p>
                Trained, tested and deployed models to production, and developed event-driven software to monitor model quality.
                Designed and built Vector Store for RAG and event-driven AI Chat system. 
                Performs consultation for other startups.
                
                
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2023"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            // className="vertical-timeline-element--work"
            // // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            // // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            // date="2023 - present"
            // // iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            // iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}


            
            
            // icon={<WorkIcon />}
        >
            <h3 className="vertical-timeline-element-title">Software Engineer and CTO</h3>
            {/* <h3 className="vertical-timeline-element-title">PreemptorAI</h3> */}
            <h4 className="vertical-timeline-element-subtitle">PreemptorAI</h4>
            <p>
                Developed deep learning models using biometric verification to discourage 
                plagiarism in colleges.
                Managed version control systems, and led company standups and code reviews.
                Participated in Machine Learning research with graduate students through the Vector 
                Institute and TuskML fireside chat.
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            // icon={<WorkIcon />}
        >
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Invinzsible</h4>
            <p>
            Helped implement the original Invinzsible.ca  fashion website
            (now Invinzsible.com). Rapidly gained 109,000 site views using UI patterns to optimize SEO rankings.
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="December 2020"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            // icon={<SchoolIcon />}
        >
            <h3 className="vertical-timeline-element-title">Python for Data Science and Machine Learning Bootcamp Certificate</h3>
            <h4 className="vertical-timeline-element-subtitle">Pierian Data (Udemy)</h4>
            <p>
            Successfully completed online data science bootcamp from Pierian Data.
            Learned advanced Python programming skills and best practices, data preprocessing, feature 
            engineering and selection techniques, and all modern popular machine learning algorithms.
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2021"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            // icon={<WorkIcon />}
        >
            <h3 className="vertical-timeline-element-title">Research Assistant, Machine Learning</h3>
            <h4 className="vertical-timeline-element-subtitle">University of Toronto</h4>
            <p>
            Designed and implemented deep learning models to act as functional approximators of 
            the probability distribution functions of valence electrons. Research focused on using 
            solid state physics and quantum mechanics to optimize battery development.
            </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="April 2020"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            // icon={<SchoolIcon />}
        >
            <h3 className="vertical-timeline-element-title">Bachelor of Science with Honours, Physics. 3.6 GPA</h3>
            <h4 className="vertical-timeline-element-subtitle">University of Toronto</h4>
            <p>
            Graduated from the University of Toronto from the Specialist program for Physical and Mathematical 
            Sciences. Acquired many skills including scientific computing, hardware programming, linear algebra, 
            statistics, methods for solving differential equations, differential geometry, and combinatorics.
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="September 2019"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            // icon={<SchoolIcon />}
        >
            <h3 className="vertical-timeline-element-title">Junior Software Engineer, Co-founder</h3>
            <h4 className="vertical-timeline-element-subtitle">Kazoo</h4>
            <p>
            Co-founded my first startup with my brother. Built MVP grocery service mobile app using
            React Native, Java Spring Boot and Google Firebase.
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="September 2018 - April 2019"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            // icon={<SchoolIcon />}
        >
            <h3 className="vertical-timeline-element-title">Teaching Assistant</h3>
            <h4 className="vertical-timeline-element-subtitle">University of Toronto</h4>
            <p>
            Taught tutorials and lab practicals, in addition to marking course work.
            Courses served include Introduction to Physics for Life Sciences, Multivariable Calculus, 
            Introduction to Astrophysics and Introduction to Astronomy.

            Developed advanced understanding of deep mathematical topics through teaching,
            which would become important for later roles.
            </p>
        </VerticalTimelineElement>
        
       
        </VerticalTimeline>
        </div>
    )
}


export default Experience;