import React from 'react';
import Styles from './Navbar.module.css'; 

const Navbar = () => {
  return (
    <>
      <nav className={`${Styles.navigation} container`}> 
        <div className="logo"> 
          <img src="/Images/logo.png" alt="logo" />
        </div>

        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
