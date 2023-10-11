import React from 'react';
// import ReactDOM from 'react-dom';
import jsonData from '../data/jsonData';
// ---------------------------------
const containerStyle = {
    padding: '0 1px',
    background: '#ffffff',
    flex: '1'
};

const spaceStyle = {
    background: '#ffffff',
    transition: '0.3s'
};

const barStyle = {
    background: '#00cc00',
    transition: '0.3s'
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
      <h3>{skill}</h3>

    </div>
  );
};

const chartStyle = {
    width: '85vw',
    height: '50vh',
  display: 'flex',
    overflow: 'hidden'
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
                  <h3>{value.skill}</h3>
                  <div style={{...spaceStyle, height: `${100 - value.level}%`}} />
                  <div style={{...barStyle, height: `${value.level}%`}} />
                </div>
      </>
      //  skill={value.skill}
      )}
    </div>
  );
};
// ---------------------------------
// Replace this with a function that switches between precalculated 
// datasets, e.g. different topics.
// One can be languages, another frameworks and another general skills.
const calculateData = (xOffset) => {
  const data = [ ];
  for (var x = 0; x < 3.1415; x += 0.1) {
      const y = Math.cos(x + xOffset) + 1;
      data.push(50 * y);
  }
    return data;
};

// Update this to include an import statement. We need to import 
// a list of JSON data from another file in the project... 
const Histogram = () => {
//   const [data, setData] = React.useState(() => calculateData(0));
  const [data, setData] = React.useState([10, 20, 30, 40, 50, 60, 10]);
  const[dummyData, setDummyData] = React.useState([
    {
      level:95,
      skill:'Python'
    },
    {
      level:75,
      skill:'C++'
    },
    {
      level:70,
      skill:'Java'
    },
    {
      level:90,
      skill:'Javascript'
    },
    {
      level:92,
      skill:'SQL'
    },
    {
      level:75,
      skill:'C#'
    },
    {
      level:45,
      skill:'Verilog'
    }
  ]);
  // Switch it up

  const[frameworks, setFrameworks] = React.useState(jsonData.frameworks);
  const [topics, setTopics] = React.useState(['Languages', 'Frameworks', 'Web Frameworks'])
  const [topicIndex, setTopicIndex] = React.useState(0);
  const xOffsets = [0, 0.7853, 1.5707, 2.3559, 3.1415];
  const [currentTopic, setCurrentTopic] = React.useState('Languages');
  const [currentData, setCurrentData] = React.useState([]);

// Yay! Algorithm for cycling through topics
  const cycleTopics = () =>{
    let i = topicIndex;
    if(i < topics.length){
     i++; //Increment topicIndex pointer
    }
    else{
      i = 0; //Set back to starting index once we reach the end
    }
    setTopicIndex(i);
    let nextTopic = topics[i];
    setCurrentTopic(nextTopic);
    
    // setCurrentTopic('Frameworks');
  }
  return (
    <div>
      {
      // Default state of application 
      currentTopic == 'Languages' &&  <Chart data={dummyData}  /> ||
      currentTopic == 'Frameworks' &&  <Chart data={frameworks}  />

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
        <span>xOffset: </span>
        
        <button 
        onClick={cycleTopics}
        >Toggle</button>
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