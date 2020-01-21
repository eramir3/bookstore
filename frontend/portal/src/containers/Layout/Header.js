import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";


class Header extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
              <div className="container">
                <Link className="navbar-brand" to="/">
                    ADMIN PORTAL
                </Link>
                <div className="collapse navbar-collapse" id="mobile-nav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/bookList">
                            View Book List
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/addBook">
                            Add Book
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">
                            Login
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                            Logout
                            </Link>
                        </li>
                    </ul>
                </div>
              </div>
            </nav>
          );
    }
}

export default Header;