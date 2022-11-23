import React from 'react';
import "../components/Navbar/style.css";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#AboutMe"
          onClick={() => handlePageChange('AboutMe')}

          className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#MyPortfolio"
          onClick={() => handlePageChange('MyPortfolio')}

          className={currentPage === 'MyPortfolio' ? 'nav-link active' : 'nav-link'}
        >
          My Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#MyResume"
          onClick={() => handlePageChange('MyResume')}
          

          className={currentPage === 'MyResume' ? 'nav-link active' : 'nav-link'}
        >
          My Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#ContactMe"


          onClick={() => handlePageChange('ContactMe')}
          className={currentPage === 'ContactMe' ? 'nav-link active' : 'nav-link'}
        >
          Contact Me
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;