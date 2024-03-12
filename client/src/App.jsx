import Header from "./Components/Header/Header.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import "./App.css"
import Companies from "./Components/Companies/Companies.jsx";
import Residencies from "./Residencies/Residencies.jsx";
function App() {
  return (
    <div className="App">
      <div >
        <div className="white-gradient"/>

        <Header/>
        <Hero/>
      </div>
      <Companies/>
      <Residencies/>
    </div>
  );
}

export default App;
