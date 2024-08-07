import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Sidebar from "./Component/Slider";
import Nav from "./Component/Nav";
import Dashboard from "./Pages/Dashboard";



function App() {
  return (
    <Router>
      <Nav />
      <div className="flex">
        <Sidebar />
        <div className="content-area flex-1">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* <Route path="/user" element={<User />} /> */}
           
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
