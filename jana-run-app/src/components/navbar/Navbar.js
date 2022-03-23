import React from 'react';
import {
  Nav,
  NavLink,
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Logo</h1>
        </NavLink>
        <NavLink to="/wpp">
          Grupo no Wathsapp
        </NavLink>
        <NavLink to="/signin">
          Entrar
        </NavLink>
        <NavLink to="/contact">
          Contato
        </NavLink>
      </Nav>
    </>
  ) 
}

export default Navbar;
