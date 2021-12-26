import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import HeaderButtons from './components/Header/HeaderButtons/HeaderButtons';
import BigSmoke from './images/BigSmoke.jpg';
import Leaf from './images/Leaf.jpg';
import Jack from './images/Jack.jpg';

function App() {
  return (
    <div className="App">
      <Header>
      </Header>
      <HeaderButtons title={'Projects Page'}></HeaderButtons>
      <HeaderButtons title={'Personal Interests'}></HeaderButtons>
      <HeaderButtons title={'Mathematical Stuff'}></HeaderButtons>
      <HeaderButtons></HeaderButtons>
      <HeaderButtons></HeaderButtons>


        <div>
          Welcome to AboutDave
        </div>
        <Body/>

        <img src={BigSmoke}/>
        <img src = {Leaf}/>
        <img src = {Jack}/>

    </div>
  );
}

export default App;
