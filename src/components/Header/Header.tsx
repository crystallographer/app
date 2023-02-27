import { Container, Navbar } from "react-bootstrap";

import logo from "../../../assets/images/logo.png";

export function Header() {
    return (
        <Navbar bg="primary" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        width="32"
                        height="32"
                        className="d-inline-block align-top"
                        alt="App logo"
                    />{" "}
                    App
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}
