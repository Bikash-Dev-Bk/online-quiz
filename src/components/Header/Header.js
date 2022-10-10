import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <h1 className='header-title'>Quiz World</h1>
            <div>
                <a href="/">Home</a>
                <a href="/statistics">Statistics</a>
                <a href="/blog">Blog</a>
            </div>
        </nav>
    );
};

export default Header;