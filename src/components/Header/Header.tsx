import { Container, Nav, Navbar } from "react-bootstrap";

import logo from "../../../assets/images/logo.png";

export function Header() {
    return (
        <Navbar
            bg="primary"
            collapseOnSelect
            expand="lg"
            fixed="top"
            variant="dark"
        >
            <Container>
                <Navbar.Brand href="#">
                    <img
                        alt="App logo"
                        className="d-inline-block align-top"
                        height="32"
                        src={logo}
                        width="32"
                    />{" "}
                    App
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#albums">Albums</Nav.Link>
                        <Nav.Link href="#comments">Comments</Nav.Link>
                        <Nav.Link href="#photos">Photos</Nav.Link>
                        <Nav.Link href="#posts">Posts</Nav.Link>
                        <Nav.Link href="#users">Users</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
