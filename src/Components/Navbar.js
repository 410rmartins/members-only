import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link"> Homepage</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/register" className="nav-link">Register</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/login" className="nav-link">Login </Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link to="/new-msg" className="nav-link">New Message </Link>
                        </li>


                    </ul>

                </div>
            </nav>
        )
    }
}