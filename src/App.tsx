import './App.css';
import { Practice1 } from './components/Practice1';

function App() {
  return (
    <div className="h-screen w-screen flex justify-center bg-outer-container">
      <div className="flex flex-col flex-grow m-32">
        <header className="bg-slate-400 text-center p-[10px] text-4xl text-light">
          <div>React-v3</div>
        </header>
        <div className="flex-grow bg-white">
          <div className="flex justify-evenly mt-12">
            <Practice1 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
