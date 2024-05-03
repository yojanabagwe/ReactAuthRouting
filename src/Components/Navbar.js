import React from 'react';
import { Link } from 'react-router-dom';
import homeimg from '../Components/homeimg.png';

const Navbar = () => {
  return (
    <div className="container-fluid p-0">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
      <Link className="navbar-brand" to="/login">Login</Link>
      <Link className="navbar-brand" to="/denylogin">DashBoard</Link>
    </nav>
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: 'calc(100vh - 150px)' }}>
      <h1 className=" display-4 fw-bold">User Data Management Hub</h1>
    </div>
      <img src={homeimg} alt="Description" className="img-fluid position-absolute bottom-0 right-0" style={{ maxHeight: '50vh' }} />
    </div>
);
};

export default Navbar;

