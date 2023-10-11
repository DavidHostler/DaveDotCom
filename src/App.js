import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
// import Header from './Header';
import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import DataScience from './sections/DataScience';

function App() {
  return (
    <div>
      {/* <Header/>
      <Home/> */}
       <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="projects" element={ <Projects/> } />
        <Route path="data-science" element={ <DataScience/> } />

      </Routes>
    </div>
  );
}

export default App;
