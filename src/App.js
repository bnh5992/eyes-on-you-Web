import './App.css';
import ClassRoom from "./pages/classroom/ClassRoom";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SideBar from "./pages/main/SideBar";
import Login from "./pages/auth/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="App">
          <main>
            <section className="feature">
              <Routes>
                <Route path="/" element={<Login/>}/>
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
