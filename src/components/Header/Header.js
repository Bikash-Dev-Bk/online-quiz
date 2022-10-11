import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <p className='header-title'>Quiz World</p>
            <div>
                <Link to="/">Home</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to="/blog">Blog</Link>
            </div>
        </nav>
    );
};

export default Header;