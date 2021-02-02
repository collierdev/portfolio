  
import React, { useState,} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Divide as Hamburger } from 'hamburger-react'

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMenu}>
            Collier.
          </Link>
          <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/about' className='nav-links' onClick={closeMenu}>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/portfolio'
                className='nav-links'
                onClick={closeMenu}
              >
                Portfolio
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMenu}
              >
                Services
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/experiments'
                className='nav-links'
                onClick={closeMenu}
              >
                Experiments
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-links'
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>

          <Hamburger toggled={isOpen} toggle={setOpen} size={25} color="white"/>
        </div>
      </nav>
    </>
  );
}

export default Navbar;