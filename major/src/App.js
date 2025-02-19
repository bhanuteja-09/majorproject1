import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import FindAJob from './components/FindAJob';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';

// import Login from './components/Login';

const App = () => {
  return (
    <Router>
      {/* <Header /> */}
      <Home />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/find-a-job" element={<FindAJob />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/register" element={<Register />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
