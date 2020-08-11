import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <section>
    <Link to='/towns'>
      <p>List Page</p>
    </Link>
    <Link to='/createTown'>
      <p>Create a New Town</p>
    </Link>
  </section>
);

export default Header;
