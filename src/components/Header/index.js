import React from 'react';
import './style.css';

function Header(){
    return (
        <div className="bg-color">
            <div className="container">
                <header className="row">
                    <nav className="col">
                        <ul className="nav justify-content-end transition">
                            <li className="nav-item">
                                <a className="nav-link" href="/">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/work">Work</a>
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