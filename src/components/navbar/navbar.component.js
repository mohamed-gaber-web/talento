import React from 'react';

import { Link } from 'react-router-dom';

import './navbar.component.css';

export function Navbar () {
    return (
        <nav>
            <ul>
                <li> <Link to=""> About Us </Link> </li>
                <li> <Link to=""> Be a part of Talento </Link> </li>
                <li> <Link to=""> Contact </Link> </li>
            </ul>
        </nav>
    );
}