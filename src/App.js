import logo from './logo.svg';
import './App.css';
import Media from './Media/MediaStream'
import Sfu from './Media/SfuStream'
import { Routes, Route } from "react-router-dom";
function App() {
  return (
      <Routes>
        <Route path="/" element={<Sfu />} />
      </Routes>
  );
}

export default App;
