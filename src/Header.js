import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return(
        <div>
            {/* Right Side of Page */}
            {/* <h1>Horizontal List of Components</h1> */}
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                {/* <li>
                <Link to="/skills">Skills</Link>
                </li>
                <li>
                    <Link to="/education">Education</Link>
                </li>
                <li>
                    <Link to="experience">Experience</Link>
                </li> */}
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/skills">Skills</Link>
                </li>
                <li>
                    <Link to="/experience">Experience</Link>
                </li>
            </ul>
            
        </div>
    );
}

export default Header;