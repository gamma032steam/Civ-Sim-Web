import React from 'react';

import Navbar from 'react-bootstrap/Navbar'

function Header() {
  return (
    <header style={headerStyle}>
      <Navbar bg='light' expand='lg'>

      </Navbar>
    </header>
  );
}

const headerStyle = {
  width: '100px',
  background: 'white'
}

export default Header;
