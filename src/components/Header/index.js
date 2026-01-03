import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Header(){
    return (
        <div className="bg-color">
            <div className="container">
                <header className="row">
                    <nav className="col">
                        <ul className="nav justify-content-end transition">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/work">Work</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./assets/doc/resume.pdf" download="">Resume</a>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
        </div>
    );
}

export default Header;