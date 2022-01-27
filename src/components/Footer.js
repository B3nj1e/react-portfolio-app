import React from 'react';
import '../styles/Footer.css';
import github from '../assets/images/github.png'
import facebook from '../assets/images/facebook.png'
import linkedin from '../assets/images/linkedin.png'


// We use JSX curly braces to evaluate the style object on the JSX tag

function Footer() {
  return (
    <footer>
      <div>
            <p>That's all folks</p>
        </div>
        <div id="icons">
        <a href="https://github.com/B3nj1e" target="_blank" rel="noopener noreferrer"><img src={github} alt="place-holder" class="img"/></a>

        <a href="https://www.facebook.com/ben.m.clewer" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="place-holder" class="img"/></a>

        <a href="https://www.linkedin.com/in/ben-clewer-bbb110129/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="place-holder" class="img"/></a>
        </div>
        
    </footer>
  );
}

export default Footer;
