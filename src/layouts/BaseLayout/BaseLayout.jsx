import React from 'react';
import './BaseLayout.scss';
import { Link } from 'react-router-dom';

const BaseLayout = (props) => {
  return (
    <div className="container">
      <div className="row">
        <header>
          <nav className="menu">
            <ul>
              <Link to={'/'}>Home</Link>
              <Link to={'/about'}>About</Link>
            </ul>
          </nav>
        </header>
        <main>{props.children}</main>
      </div>
    </div>
  );
}
export default BaseLayout;
