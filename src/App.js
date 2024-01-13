// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import PostDetail from './pages/PostDetail';
import MainLayout from './layouts/MainLayout';
import './assets/styles/global.css';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route>
            <Route path="/" element={<MainLayout />} />
            <Route path="home" element={<Home />} />
            <Route path="blog" element={<Blog />} />
            <Route path="post" element={<PostDetail />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
