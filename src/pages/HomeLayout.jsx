import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <section className="page">
        <Outlet />
      </section>
    </div>
  );
};

export default HomeLayout;
