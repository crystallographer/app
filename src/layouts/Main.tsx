import { ReactNode } from "react";
import { Col, Container, Row } from "react-bootstrap";

import { Header } from "../components/Header";

type Properties = {
    children: ReactNode;
};

export function Main({ children }: Properties) {
    return (
        <Container fluid>
            <Row className="mb-3">
                <Col>
                    <Header />
                </Col>
            </Row>
            {children}
        </Container>
    );
}
