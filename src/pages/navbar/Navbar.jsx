import React, { useContext } from 'react';
import NavbarLoggedIn from './NavbarLoggedIn';
import NavbarLoggedOut from './NavbarLoggedOut';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return isLoggedIn ? <NavbarLoggedIn /> : <NavbarLoggedOut />;
};

export default Navbar;

