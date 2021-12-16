import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark pt-3 pb-3">
            <div className="container-fluid">
                <a href="/" className='logo navbar-brand'>
                    Ema<span>John</span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link ms-4 active  text-light text-capitalize" aria-current="page" href="/shop">shop</a>
                        <a className="nav-link ms-4  text-light text-capitalize" href="/order">order</a>
                        <a className="nav-link ms-4  text-light text-capitalize" href="/review">Review</a>
                        <a className="nav-link ms-4  text-light text-capitalize" href="/manage">Manage Inventory</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;