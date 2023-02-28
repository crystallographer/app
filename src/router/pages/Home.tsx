import {
    Button,
    Col,
    Container,
    Form,
    InputGroup,
    ListGroup,
    Row
} from "react-bootstrap";

import { Header } from "../../components/Header/Header";

export function Home() {
    return (
        <Container>
            <Row>
                <Col>
                    <Header />
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <InputGroup>
                        <Form.Control
                            placeholder="User"
                            aria-label="User"
                            aria-describedby="user"
                        />
                        <Button variant="outline-primary">Search</Button>
                    </InputGroup>
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
