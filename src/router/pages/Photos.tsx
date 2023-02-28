import { Col, Container, ListGroup, Row } from "react-bootstrap";

import { Header } from "../../components/Header/Header";

export function Photos() {
    return (
        <Container>
            <Row>
                <Col>
                    <Header />
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col>
                    <ListGroup />
                </Col>
            </Row>
        </Container>
    );
}
