import './App.css';
import ClassRoom from "./ClassRoom";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SideBar from "./SideBar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="App">
          <main>
            <section className="feature">
              <Routes>
                <Route path="/" element=""/>
                <Route path="classroom" element={<ClassRoom/>}/>
              </Routes>
            </section>
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
