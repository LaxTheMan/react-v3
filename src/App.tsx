import './App.css';
import { Practice3 } from './components/Practice3';

function App() {
  return (
    <div className="h-screen w-screen flex justify-center bg-outer-container">
      <div className="flex flex-col flex-grow m-32">
        <header className="bg-slate-400 text-center p-2.5 text-4xl text-offwhite">
          <div>React-v3</div>
        </header>
        <div className="flex-grow bg-white">
          <div className="flex justify-evenly mt-12">
            <Practice3 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
