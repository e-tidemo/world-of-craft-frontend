import React from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo1.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = ({ loggedIn, user, onLogout }) => {
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
                        <NavLink exact="true" className={styles.NavLink} activeclassname="active" to="/">
                            <i className="fas fa-home"></i> Home
                        </NavLink>
                        {loggedIn ? (
                            <>
                                <NavLink className={styles.NavLink} activeclassname="active" to="/profile">
                                    {user.username}'s Profile
                                </NavLink>
                                <button className={styles.NavLink} onClick={onLogout}>
                                    <i className="fas fa-sign-out-alt"></i> Logout
                                </button>
                            </>
                        ) : (
                                <>
                                    <NavLink className={styles.NavLink} activeclassname="active" to="/signin">
                                        <i className="fas fa-sign-in-alt"></i> Sign in
                                    </NavLink>
                                    <NavLink className={styles.NavLink} activeclassname="active" to="/signup">
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
