import React, { Component } from 'react'
import PropTypes from 'prop-types'
import weather from '../components/image/weatherimg.png'

function Navbar() {

    return (
        <nav className="navbar ">
            <div className="container-fluid">
                <a className="navbar-brand"><b>WEATHER</b><img src={weather}/></a>
            
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );


};

export default Navbar;
