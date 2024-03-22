import React, { useContext } from 'react'
import { Navbar, Container, Nav } from "react-bootstrap"
import logo from "../assets/logo1.png";
import styles from "../styles/NavBar.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { CurrentUserContext } from '../App';

const NavBar = () => {
    const currentUser = useContext(CurrentUserContext)
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/')
    }
    const loggedInIcons = (
        <>
            <NavLink
                className={styles.NavLink}
                activeclassname="active"
                to="/signin">
                <i className='fas fa-user'></i>{currentUser?.username}
            </NavLink>
            <NavLink
                className={styles.NavLink}
                onClick={logout}
                to='/'>
                <i className="fas fa-sign-out-alt"></i>Sign out
            </NavLink>
        </>
    )
    const loggedOutIcons = (
        <>
            <NavLink
                className={styles.NavLink} activeclassname={styles.Active}
                to="/signin">
                <i className="fas fa-sign-in-alt"></i> Sign in
            </NavLink>
            <NavLink
                className={styles.NavLink} activeclassname={styles.Active}
                to="/signup">
                <i className="fas fa-user-plus"></i> Sign up
            </NavLink>
        </>
    );

    /*const auth = JSON.parse(localStorage.getItem('user'));*/
    
    return (
        <Navbar className={styles.NavBar} expand="md" fixed="top">
            <Container>
                <NavLink to="/">
                    <Navbar.Brand>
                        <img src={logo} alt="logo" height="150" />
                    </Navbar.Brand></NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-left">
                        <NavLink
                            exact='true'
                            className={styles.NavLink} activeclassname={styles.Active}
                            to="/"
                        >
                            <i className="fas fa-home"></i> Home
                        </NavLink>
                        {currentUser ? loggedInIcons : loggedOutIcons}
                    </Nav>
                    {/*<Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                    </Form>*/}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar