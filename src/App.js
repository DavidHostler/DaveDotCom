import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useParams
} from 'react-router-dom';
import Dave from './screens/data/Dave.jpg';
import MapleJack from './screens/images/MapleJack.jpg';

import { bounce } from 'react-animations';
import styled, { keyframes } from 'styled-components';

import "./App.css";
import Header from "./components/Header/Header";
import HeaderButton from "./components/HeaderButtons/HeaderButton";
import ProjectScreen from './screens/ProjectsScreen';
import Background from "./Background";
import ProjectsScreen from "./screens/ProjectsScreen";
import AboutMe from './screens/AboutMe';

import Typist from 'react-typist';

import Projects from './screens/data/Projects';


function Home() {
  return (
    <div style={{ padding: 20 }}>

    <Centre/>
      {/* <h2>Home View</h2> */}
      {/* <p>Lorem ipsum dolor sit amet, consectetur adip.</p> */}
    </div>
  );
}

const Bounce = styled.div`animation: 2s ${keyframes `${bounce}`} infinite`;

function Centre() {
  return (
    <div id="text_div center_all">
      <div className="center_all">
        <Bounce>
        <a href={'https://www.linkedin.com/in/david-hostler-a8480b12b/'}>
        <img src={Dave}
        className='bubble_image'
        />
        </a>
        {/* <img src={MapleJack} 
        className='bubble_image'

          /> */}
        </Bounce>
        {/* <Bounce>
          
        </Bounce> */}
        <h2 className="custom-subTitle"
        style={{textAlign: 'center'}}>
        David Hostler
        </h2>
        

        {/* <h1 className="custom-subTitle"
        style={{textAlign: 'center'}}>
        Happy Victoria Day!
        </h1>  */}

      
  
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      {/* <Header/> */}
      <nav style={{ margin: 10 }}>
        <ul>
        <Link to="/" style={{ padding: 5 }}>
          <HeaderButton title="Home">Home</HeaderButton>
        </Link>
        {/* <Link to="/Projects" style={{ padding: 5 }}>
          <HeaderButton title="Projects">
          Projects  
          </HeaderButton>
        </Link> */}
        <Link to="/Projects">
          <HeaderButton title="Projects">
            Projects
          </HeaderButton>
        </Link>
        <Link to="/AboutMe" style={{ padding: 5 }}>
        <HeaderButton title="About Me">
          About Me
          </HeaderButton>
        </Link>
        </ul>
      </nav>
      {/* Rest of the code remains same */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/Projects" element={<ProjectsScreen />} /> */}

        <Route path="/Projects" element = {<Projects/>}/>
        <Route path="/AboutMe" element={<AboutMe />}>
          {/* <Route path=":slug" element={<Post />} /> */}
        </Route>
      </Routes>
      <Background/>
      
    </Router>
  );
}

export default App;


// import "./App.css";
// import Header from "./components/Header/Header";
// import HeaderButton from "./components/HeaderButtons/HeaderButton";
// import ProjectScreen from './screens/ProjectsScreen';
// import Background from "./Background";
// import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
// import { Switch } from 'react-switch';
// import ProjectsScreen from "./screens/ProjectsScreen";

// function App() {
//   return (
//     <div className="App">
//       <Header/>
//     <ul>
//       <li>
//     <Link to="/ProjectsScreen">
//     <button>Projects</button>    
//     </Link>
//       </li>

//     <Switch>
//       <Router exact path ='/ProjectsScreen' component={ProjectsScreen}></Router>
//     </Switch>
//     </ul>
    
//     <Background/>

// {/* 
//       <Header/>
//       <HeaderButton title={'About Me'}></HeaderButton>
//       <HeaderButton title={'Personal Projects'}></HeaderButton>
//       <HeaderButton title={'Cool Stuff'}></HeaderButton>

//       <Background /> */}
//       {/* <CenterTitle /> */}
//     </div>



//   );
// }

// // function Cent() {
// //   return (
// //     <div id="text_div center_all">
// //       <div className="center_all">
// //         <h1 className="custom-subTitle"></h1>
// //       </div>
// //     </div>
// //   );
// // }

// export default App;
