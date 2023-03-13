import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import logo from "../../assets/images/logo.png";

export function Header() {
    return (
        <Navbar bg="primary" collapseOnSelect expand="lg" variant="dark">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>
                        <img
                            alt="App logo"
                            className="d-inline-block align-top"
                            height="32"
                            src={logo}
                            width="32"
                        />{" "}
                        App
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/photos">
                            <Nav.Link>Photos</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/posts">
                            <Nav.Link>Posts</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/users">
                            <Nav.Link>Users</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
