import React from 'react'

import { Link } from 'react-router-dom';

const Category = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark shadow nav-2 fixed-top">
                <div className="container-fluid">
                    <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/science">Science</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/sports">Sports</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/technology">Technology</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/health">Health</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/business">Business</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Category
