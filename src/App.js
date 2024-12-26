import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/home';
import Packages from './Pages/Packages';
import About from './Pages/About';
import Contact from './components/contact';
import Projects from './components/Projects';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Premium from './components/Premium';
import { Login, Register } from './components/Auth'; // Updated path for Login and Register components
import BallCursor from "./components/Cursor";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Manage login state

  // Handle login logic
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div>
        <BallCursor/>
        <TopBar />
        <Navbar />
        <Routes>
          {/* Route Definitions */}
          <Route path="*" element={<Home />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/projects"
            element={
              isLoggedIn ? (
                <Projects />
              ) : (
                <Navigate to="/login" state={{ from: '/projects' }} />
              )
            }
          />
          <Route path="/premium" element={<Premium />} />
          <Route
            path="/login"
            element={<Login handleLogin={handleLogin} />}
          />
          <Route
            path="/register"
            element={<Register />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;