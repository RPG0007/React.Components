import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo-store.png';

export class Header extends Component {
  render() {
    return (
      <header data-testid="header" className="header">
        <div>
          <NavLink to="/React.Components/" className="logo">
            <img className="logo" src={logo} alt="" />
          </NavLink>
        </div>
        <div className="wrapper_navigation">
          <nav className="navigation">
            <ul>
              <li>
                <NavLink
                  className="navigation_link"
                  to="/React.Components/"
                  style={({ isActive }) =>
                    isActive
                      ? {
                          textDecoration: 'none',
                          color: 'gold',
                        }
                      : {}
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="navigation_link"
                  to="/React.Components/about"
                  style={({ isActive }) =>
                    isActive
                      ? {
                          textDecoration: 'none',
                          color: 'gold',
                        }
                      : {}
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="navigation_link"
                  to="/React.Components/forms"
                  style={({ isActive }) =>
                    isActive
                      ? {
                          textDecoration: 'none',
                          color: 'gold',
                        }
                      : {}
                  }
                >
                  Forms
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
