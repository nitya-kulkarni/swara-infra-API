import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/home';
import Packages from './Pages/Packages';
import About from './Pages/About';
import Contact from './components/contact';
import Projects from './components/Projects';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Premium from './components/Premium';
import Auth from './components/Auth'; 
import BallCursor from "./components/Cursor";
import Backtotop from "./components/Backtotop";
import { useCookies } from 'react-cookie';
// import WhatsAppButton from './components/Whattsapp';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Manage login state
  const [cookies] = useCookies(['user']); // Get user data from cookies

  // Check if user is already logged in via cookies
  useEffect(() => {
    if (cookies.user) {
      try {
        const user = JSON.parse(cookies.user);
        setIsLoggedIn(true); // If successful, mark as logged in
      } catch (error) {
        console.error("Error parsing cookies data:", error);
      }
    }
  }, [cookies]);

  return (
    <Router>
      <div>
        {/* <WhatsAppButton /> */}
        <Backtotop />
        <BallCursor />
        <TopBar />
        <Navbar />
        <Routes>
          {/* Route Definitions */}
          <Route path="/" element={<Home />} />
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
            element={<Auth handleLogin={() => setIsLoggedIn(true)} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;