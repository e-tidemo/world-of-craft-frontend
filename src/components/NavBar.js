import React from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo1.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = ({ isAuthenticated, user, logout }) => {
    return (
        <Navbar className={styles.NavBar} expand="md" fixed="top">
            <Container>
                <NavLink to="/">
                    <Navbar.Brand>
                        <img src={logo} alt="logo" height="150" />
                    </Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-left">
                        <NavLink exact className={styles.NavLink} activeClassName={styles.Active} to="/">
                            <i className="fas fa-home"></i> Home
                        </NavLink>
                        {isAuthenticated ? (
                            <>
                                <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/profile">
                                    {user.username}'s Profile
                                </NavLink>
                                <button className={styles.NavLink} onClick={logout}>
                                    <i className="fas fa-sign-out-alt"></i> Logout
                                </button>
                            </>
                        ) : (
                                <>
                                    <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/signin">
                                        <i className="fas fa-sign-in-alt"></i> Sign in
                                    </NavLink>
                                    <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/signup">
                                        <i className="fas fa-user-plus"></i> Sign up
                                    </NavLink>
                                </>
                            )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;