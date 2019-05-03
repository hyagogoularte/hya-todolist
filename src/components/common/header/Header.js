import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
        <div className="had-container">
            <nav className="navbar-fixed">
                <div className="nav-wrapper">
                    <a href="#!" className="brand-logo">Logo</a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
  }
}
