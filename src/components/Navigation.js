import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Page 1
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/page-2/">
            Page 2
          </Link>
        </li>
      </ul>
    </nav>
  );
}
