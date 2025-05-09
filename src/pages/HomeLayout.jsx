import React from 'react';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <div>
      <nav>My Navbar</nav>
      <Outlet />
    </div>
  );
};

export default HomeLayout;
