// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleBurgerClick = () => {
    setMenuOpen(true);
  };

  const handleMiddleClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav>
      <div className="desktop">
        <div className="logo-wrapper">
          <img src="src/assets/Logo.png" alt="Logo" />
        </div>
        <ul>
          <Link className='link' to="/">
            Home
          </Link>
          <Link className='link' to="/gallery">
            Katalog
          </Link>
          <Link className='link' to="/quiz">
            Quiz
          </Link>
        </ul>
      </div>

      <div className="mobile">
        <div className="outer">
          <div className="logo-wrapper">
            <img src="src/assets/Logo.png" alt="Logo" />
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="burger"
            onClick={handleBurgerClick}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>

        <div
          className="middle"
          style={{ display: menuOpen ? 'block' : 'none' }}
          onClick={handleMiddleClick}
        ></div>

        <div
          className="inner"
          style={{ right: menuOpen ? '0' : '-100%' }}
        >
          <ul>
          <Link className='link' to="/">
            Home
          </Link>
          <Link className='link' to="/gallery">
            Katalog
          </Link>
          <Link className='link' to="/quiz">
            Quiz
          </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
