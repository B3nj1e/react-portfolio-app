import React from 'react';
import '../styles/Navigation.css';

const styles = {
    navbarStyle: {
      background: 'green',
      justifyContent: 'flex-end',
    },
  };
  
  // We use JSX curly braces to evaluate the style object on the JSX tag
  
  function Navigation() {
    return (
      <nav style={styles.navbarStyle} className="navbar">
        <a href="/">Welcome</a>
      </nav>
    );
  }

export default Navigation;