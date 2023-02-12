import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar1'
import Dashboard from './pages/Dashboard.jsx';
import About from './pages/About.jsx';
import Comment from './pages/Comment.jsx';
import Analytics from './pages/Analytics.jsx';
import image from "../src/images/image.png";
const App = () => {
  return (
    <>
   <div style={{
      backgroundImage: `url(${image})`, backgroundPosition: 'center',
      backgroundSize: 'auto',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh',
      align:'centre'
    }}>
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
    </div>
    </>
  );
};

export default App;