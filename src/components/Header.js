import React from 'react';
import '../styles/Header.css';

// By importing the Header.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

// We use JSX curly braces to evaluate the style object

function Header() {
  return (
    <header>
        
    <div class="page-title">
        <h1>Benji Clewer</h1>
        <p>Web Developer</p>
    </div>
    
    <div class="navbar">
        <a href="#about-me" class="nav-button">About</a>
        <a href="#my-work" class="nav-button">Work</a>
        <a href="#contact-me" class="nav-button">Contact</a>
    </div>
</header>
  );
}

export default Header;
