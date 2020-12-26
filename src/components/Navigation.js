import React from 'react';
import axios from 'axios';
import './Navigation.css';
import {Link} from 'react-router-dom';

function Navigation() {
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to={{pathname: '/about', state: {fromNavigation: true}}}>About</Link>
        </div>
    );
}

export default Navigation;
