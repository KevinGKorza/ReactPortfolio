import React from 'react';


function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#AboutMe"
          onClick={() => handlePageChange('aboutme')}

          className={currentPage === 'aboutme' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#MyPortfolio"
          onClick={() => handlePageChange('myportfolio')}

          className={currentPage === 'myportfolio' ? 'nav-link active' : 'nav-link'}
        >
          My Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#MyResume"
          onClick={() => handlePageChange('myresume')}
          

          className={currentPage === 'myresume' ? 'nav-link active' : 'nav-link'}
        >
          My Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#ContactMe"


          onClick={() => handlePageChange('contactme')}
          className={currentPage === 'contactme' ? 'nav-link active' : 'nav-link'}
        >
          Contact Me
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;