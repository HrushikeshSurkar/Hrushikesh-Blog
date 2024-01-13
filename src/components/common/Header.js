import React from 'react';
import Sidebar from './Sidebar';
import TopNav from './TopNav';
import '../../assets/styles/header.css';

const Header = () => {
  return (
    <>
      <TopNav />
      <Sidebar />
    </>
  );
};

export default Header;
