import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return(
    <nav className='navbar navbar-default bg-secondary'>
      <div className='container-fluid'>
        <div className='navbar-header'>
          <Link to={'/'}>
            <img style={{ 'height': '50px', 'marginLeft': '30px' }} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/265330/logo.png" alt="logo" />
          </Link>
        </div>
        <ul className="nav navbar-right">
          <li className='m-2'><Link className='btn lead btn-secondary' style={{ 'fontSize': 'large' }} to={'/'}>Home</Link></li>
          <li className='m-2'><Link className='btn btn-secondary' style={{ 'fontSize': 'large' }} to={'/films'}>Films</Link></li>
          <li className='m-2'><Link className='btn btn-secondary' style={{ 'fontSize': 'large' }} to={'/users'}>Users</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
