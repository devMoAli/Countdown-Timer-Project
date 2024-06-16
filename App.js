import "./App.css";
import Timer from "./Components/Timer/Timer";

function App() {
  return (
    <div className="App">
      {/* if we wants for example 1 days in form of milliseconds*/}
      <Timer duration={1 * 24 * 60 * 60 * 1000}/>
    </div>
  );
}

export default App;
