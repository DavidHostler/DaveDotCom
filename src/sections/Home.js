import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import './sections.css';
const Home = () => {
    return(
        <div 
        className='home'
        >
            <Header/>
            <h1 
            className='name'
            >David Hostler</h1>

            {/* <h2>Machine Learning Engineer</h2> */}
            <h2>Software Engineer</h2>
            <ul style={{paddingLeft:'32.5vw', backgroundColor:'black'}}>
            <li
            ><a href='https://github.com/DavidHostler'><h3>Github</h3></a></li>
            <li><a href='https://www.linkedin.com/in/david-hostler-a8480b12b/'><h3>LinkedIn</h3></a></li>
            {/* <li><h3>Email</h3></li> */}
            </ul>

            {/* <ul style={{
                position:'relative',
                left:'30vw'
                }}>
                <li><h3>Github</h3></li>
                <li>Github</li>
                <li>Email</li>
            </ul> */}
        </div>
    );
}


export default Home;