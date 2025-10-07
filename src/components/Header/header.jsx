import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ padding: '1rem', background: '#eee' }}>
      <nav>
        <Link to="/" style={{ textDecoration: 'none', fontWeight: 'bold' }}>
          🏠 Home
        </Link>
      </nav>
    </header>
  );
};

export default Header;
