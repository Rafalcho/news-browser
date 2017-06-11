import React from 'react';
import {NavLink} from 'react-router-dom';

export const Nav = () => {
  return (
    <ul className='nav'>
      <li>
        <NavLink activeClassName='active'
          to='/Wiadomosci'>Wiadomości</NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/Tech'>Tech</NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/Gwiazdy'>Gwiazdy</NavLink>
      </li>
    </ul>
  );
};
