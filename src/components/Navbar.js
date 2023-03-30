import React from 'react'
// import PropTypes from 'prop-types'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary shadow fixed-top-2">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">NewsHub</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                            <li className="nav-item">
                                <a rel='noreferrer' className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a rel='noreferrer' className="nav-link" href="/">Link</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar