import React from 'react'
import {Navbar, Container, Nav} from "react-bootstrap"
import logo from "../assets/logo1.png";
import styles from "../styles/NavBar.module.css"

const NavBar = () => {
    return (
        <Navbar className={styles.NavBar} expand="md" fixed="top">
            <Container>
                <Navbar.Brand>
                    <img src={logo} alt="logo" height="150" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-left">
                        <Nav.Link><i className="fas fa-home"></i> Home</Nav.Link>
                        <Nav.Link><i className="fas fa-sign-in-alt"></i> Sign in</Nav.Link>
                        <Nav.Link><i className="fas fa-user-plus"></i> Sign up</Nav.Link>
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