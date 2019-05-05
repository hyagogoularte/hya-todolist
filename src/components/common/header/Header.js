import React, { Component } from 'react'
import './header.css';

export default class Header extends Component {
  render() {
    return (
        <div className="had-container">
            <nav className="navbar-fixed">
                <div className="nav-wrapper">
                    <a href="#!" className="left brand-logo">Todo React APP</a>
                    <ul className="right side-nav">
                        <li>
                            <a rel="noopener noreferrer" href="https://www.linkedin.com/in/hyagogoularte/" target="_blank">LinkedIn</a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="https://github.com/hyagogoularte/" target="_blank">GitHub</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
  }
}
