import './App.css';
import { Practice4 } from './templates/Practice4';

function App() {
  return (
    <div className="h-screen flex justify-center items-center bg-outerContainer">
      <div className="flex flex-col flex-grow m-32">
        <header className="bg-slate-400 text-center p-2.5 text-4xl text-offwhite">
          <div>React-v3</div>
        </header>
        <div className="bg-white">
          <Practice4 />
        </div>
      </div>
    </div>
  );
}

export default App;
