import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <h1 className="navbar-brand ps-5 fs-1 fw-bold">Quiz World</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className=" navbar-nav ms-auto mb-2 mb-lg-0 pe-5 fs-5 fw-semibold">
                        <li className="nav-item">
                        <Link to="/" className="nav-link active " aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/statistics" className="nav-link active" aria-current="page">Statistics</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/blog" className="nav-link active" aria-current="page">Blog</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;