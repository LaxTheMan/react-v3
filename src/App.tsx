import './App.css';
import {Practice5} from "./templates/Practice5"

function App() {
  return (
    <div className="h-screen flex justify-center items-center bg-outerContainer">
      <div className="flex flex-col flex-grow m-32">
        <header className="bg-slate-400 text-center p-2.5 text-4xl text-offwhite">
          <div>React-v3</div>
        </header>
        <div className="bg-white">
          <Practice5 />
        </div>
      </div>
    </div>
  );
}

export default App;
