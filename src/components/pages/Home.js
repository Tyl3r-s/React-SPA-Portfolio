import React from 'react';

export default function Home({ currentPage, handlePageChange }) {
  return (
    <section className="landing">

      <div className="landing-container">

        <div className="landing-title">
          <h1>
            Tyler Scott
          </h1>
          <p className="landing-subtitle">.designer &<span>&</span> <span>coder()</span></p>
          <div className="landingBtns">
          <a
          href="#about"
          onClick={() => handlePageChange('About')}

          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
        <a
          href="#about"
          onClick={() => handlePageChange('Work')}

          className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}
        >
          Projects
        </a>
        <a
          href="#about"
          onClick={() => handlePageChange('Skills')}

          className={currentPage === 'Skills' ? 'nav-link active' : 'nav-link'}
        >
          Skills
        </a>
        <a
          href="#about"
          onClick={() => handlePageChange('Contact')}

          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
        {/* <a
          href="#about"
          onClick={() => handlePageChange('Resume')}

          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a> */}
        </div>
        </div>

      </div>

    </section>
  );
}
