// src/components/Navbar.tsx
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav >
      <div className="container mx-auto" style={{marginTop:"-50px"}}>
        <div className="flex justify-between items-center">
          <a href="/" className="text-white mr-5">
            Solution
          </a>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-white ">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

