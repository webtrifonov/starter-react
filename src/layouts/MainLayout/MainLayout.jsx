import React from 'react';
import s from './MainLayout.module.scss';
import { Link } from 'react-router-dom';

const MainLayout = (props) => {
  return (
    <div className={s.mainLayout}>
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
        </div>
      </div>
      <main>{props.children}</main>
    </div>

  );
}
export default MainLayout;
