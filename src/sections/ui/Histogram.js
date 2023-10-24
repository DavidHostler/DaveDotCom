import React, { useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import Button from 'react-bootstrap/Button';

import Button from './Button';
import jsonData from '../data/jsonData';
// ---------------------------------
const containerStyle = {
    padding: '0 0.5px',
    // background: '#ffffff',
    flex: '1',
    color:'white',
    transition: '0.3s'


};

const spaceStyle = {
    // background: '#ffffff',
    // position:'relative',
    // left:'5vw',
    transition: '1.0s'
};

const barStyle = {
    background: '#00cc00',
    transition: '0.3s',
    columnFill: 'auto'

};

const frameworks = [
    'Tensorflow',
    'Keras',
    'Pytorch',
    'Scikit Learn',
    'Pandas',
    'Spark', 
    'Postgres'
];


const Bar = ({value, skill}) => {
    return (
    <div style={containerStyle}>
      <div style={{...spaceStyle, height: `${100 - value}%`}} />
      <div style={{...barStyle, height: `${value}%`}} />
      <h3 style={{...spaceStyle}} >{skill}</h3>

    </div>
  );
};

const chartStyle = {
    position: 'relative',
    left:'10vw',
    width: '75vw',//'85vw',
    height: '50vh',
    display: 'flex',
    overflow: 'hidden',
    transition:'0.5s'
};

const OGChart = ({data}) => {
  return (
    <div style={chartStyle}>
      {data.map((value, index) => 
             <Bar key={index}
            value={value}
            />
      )}
    </div>
  );
};

const Chart = ({data}) => {
  return (
    <div style={chartStyle}>
      {data.map((value, index) => <>
        {/* <h3>{value.skill}</h3> */}
              {/* <Bar key={index}
            value={value.level}
            /> */}
                <div key={index} style={containerStyle}>
                  <h3 style={{fontSize:'1vw'}}>{value.skill}</h3>
                  <div style={{...spaceStyle, height: `${100 - value.level}%`}} />
                  <div style={{...barStyle, height: `${value.level}%`}} />
                </div>
      </>
      //  skill={value.skill}
      )}
    </div>
  );
};

// Implement bidirectional (circular) queue system; each time we cycle thru topics,
// 
const Histogram = () => {
//   const [data, setData] = React.useState(() => calculateData(0));
  const [data, setData] = React.useState([10, 20, 30, 40, 50, 60, 10]);
  const[languages, setLanguages] = React.useState(jsonData.programmingLanguages);
  // Switch it up
  const [cyclicData, setCyclicData] = React.useState([]);

  const[frameworks, setFrameworks] = React.useState(jsonData.frameworks);
  const[webFrameworks, setWebFrameworks] = React.useState(jsonData.webFrameworks);
  // const [topics, setTopics] = React.useState(['Languages', 'Frameworks', 'Web Frameworks'])
  const [topics, setTopics] = React.useState([ 'Frameworks','Languages'])

  const [topicIndex, setTopicIndex] = React.useState(0);
  const xOffsets = [0, 0.7853, 1.5707, 2.3559, 3.1415];
  const [currentTopic, setCurrentTopic] = React.useState('Languages');
  const [currentData, setCurrentData] = React.useState([]);

  useEffect(()=>{
      if(currentTopic == 'Languages'){
        setCyclicData(languages);
      }
      else if(currentTopic == 'Frameworks'){
        setCyclicData(frameworks);
      }
  })


// Yay! Algorithm for cycling through topics
  const cycleTopics = () =>{
    var bidirectionalQueue = topics;
    // Pop current topic from the front of the bdqueue and then add it to the end.
    // This eliminates having to keep track of annoying indices
    var currentTopic = bidirectionalQueue.shift();
    bidirectionalQueue.push(currentTopic);
    setCurrentTopic(currentTopic);
    setTopics(bidirectionalQueue);

    // else if(currentTopic == 'Web Frameworks'){
    //   setCyclicData(webFrameworks);
    // }
    console.log('TOPIC:' ,currentTopic);

    // Legacy code 
    // let i = topicIndex;
    // console.log(topics[i]);
    // if(i < topics.length){
    //  i++; //Increment topicIndex pointer
    // }
    // else{
    //   i = 0; //Set back to starting index once we reach the end
    // }
    // setTopicIndex(i);
    // let nextTopic = topics[i];
    // setCurrentTopic(nextTopic);
    
    // setCurrentTopic('Frameworks');
  }
  return (
    <div>
        <Button onClick={cycleTopics} func={cycleTopics}/>

      {
      // Default state of application 
      // currentTopic == 'Languages' &&  <Chart data={languages}  /> ||
      // currentTopic == 'Frameworks' &&  <Chart data={frameworks}  /> || 
      // currentTopic == 'Web Frameworks' && <Chart data={webFrameworks}  />
      <Chart
       data={cyclicData}  />
      }
      {/* <OGChart data={data}  /> */}

      <div>
      {/* {dummyData.map((children, child)=>
        <div key={child} style={containerStyle}>
            <h1>{children.skill}</h1>
          <div style={{...spaceStyle, height: `${100 - children.level}%`}} />
          <div style={{...barStyle, height: `${children.level}%`}} />
        </div> 
      )} */}
      
      </div>
      <br />
      <div>
        
        {/* <button 
        onClick={cycleTopics}
        >Toggle</button> */}

        {/* <Button  variant="outline-primary"  onClick={cycleTopics}>Toggle</Button>{' '} */}
        {/* <Button variant="text">Text</Button> */}

        {/* <Button variant="outline-primary">Primary</Button>{' '} */}

        
        {/* {xOffsets.map(xOffset => {
            const handleClick = () => setData(calculateData(xOffset));
            return (
              <button key={xOffset} onClick={handleClick}>{xOffset}</button>
            );
        })} */}
      </div>
    </div>
  );
};

export default Histogram;