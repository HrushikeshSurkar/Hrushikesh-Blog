// src/components/common/TopNav.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/topNav.css';
const TopNav = () => {
  return (
    <nav className="top-nav">
      <div>
        <h3>Hrushikesh Blog</h3>
      </div>
      <div>
        <ul className="top-nav-wrap">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/post">Post</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopNav;
