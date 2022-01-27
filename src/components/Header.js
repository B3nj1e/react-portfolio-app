import React from 'react';
import '../styles/Header.css';

// By importing the Header.css file, it is added to the DOM whenever this component loads


// We use JSX curly braces to evaluate the style object

function Header() {
  return (
    <header>
    <div className="page-title">
        <h1>Benji Clewer</h1>
        <p>Web Developer</p>
    </div>

    <div className="navbar">
        <a href="#about-me" class="nav-button">About</a>
        <a href="#my-work" class="nav-button">Portfolio</a>
        <a href="#contact-me" class="nav-button">Contact</a>
        <a href="#resume" class="nav-button">Resume</a>
    </div>
</header>
  );
}

export default Header;
