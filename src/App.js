import "./App.css";
import Header from "./components/Header/Header";
import HeaderButton from "./components/HeaderButtons/HeaderButton";
import Background from "./Background";

function App() {
  return (
    <div>
      <Header/>
      <HeaderButton title={'About Me'}></HeaderButton>
      <HeaderButton title={'Personal Projects'}></HeaderButton>
      <HeaderButton title={'Cool Stuff'}></HeaderButton>

      <Background />
      {/* <CenterTitle /> */}
    </div>
  );
}

// function Cent() {
//   return (
//     <div id="text_div center_all">
//       <div className="center_all">
//         <h1 className="custom-subTitle"></h1>
//       </div>
//     </div>
//   );
// }

export default App;
