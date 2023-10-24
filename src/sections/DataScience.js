import React from "react";
import Header from "../Header";
import SkillCard from "./ui/SkillCard";
// Import Victory for some nice graphs
// import ReactDOM from 'react-dom';
import Histogram from "./ui/Histogram";
import { VictoryBar } from 'victory';
import './sections.css';

// Dummy data for victory ui 

const data = [
    {quarter: 1, earnings: 13000, label:'Tensorflow'},
    {quarter: 2, earnings: 16500, label:'Pytorch'},
    {quarter: 3, earnings: 14250, label:'Keras'},
    {quarter: 4, earnings: 19000, label:'Scikit-Learn'},
    {quarter: 5, earnings: 19000, label:'Spark'},
    {quarter: 6, earnings: 19000, label:'Pandas'},
    {quarter: 7, earnings: 19000, label:'Postgres'}



  ];

const frameworks = [
    'Tensorflow',
    'Keras',
    'Pytorch',
    'Scikit Learn',
    'Pandas',
    'Spark', 
    'Postgres'
];

const languages = [
    'Python',
    'Java',
    'Scala', 
    'C++',
    'SQL',
    'Julia'
];

const DataScience = () =>{
    const listFrameworks = frameworks.map(framework => <li>
       {framework}
    </li>);
        const listLanguages = languages.map(language => <li>
            {language}
         </li>);
    return(
        <div 
        style={{backgroundColor:'rgb(16, 16, 16)', color:'white', height:'100%'}}
        >
            <Header/>
            <h2>Skill Histogram</h2>
            <h3>IMPORTANT: Work In Progress!
                I will find time to complete the UI for this page 
                by the end of the week!
            </h3>

            {/* <ul>
                {listFrameworks}
            </ul> */}
            <Histogram/>
            {/* <div style ={{
                position:'relative',
                bottom:'5vh',
                width:'100vw', height:'100vh',}}>
                <VictoryBar
                    data={data}
                    // data accessor for x values
                    x="quarter"
                    // data accessor for y values
                    y="earnings"
                />
            </div> */}
            {/* <h2>Languages</h2>
            <ul>
                {listLanguages}
            </ul> */}
            
        </div>
    );
}

export default DataScience;