import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Pages/Navbar/Navbar';
import Home from "./Pages/Home/Home"
import Register from "./Pages/Register/Register";
import SignIn from './Pages/Signin/Signin';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
           {/* <Route path="/about" element={<About />} /> */}
          <Route path="/signin" element={<SignIn />} /> 
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;