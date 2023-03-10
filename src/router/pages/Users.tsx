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

export function Users() {
    return (
        <Container fluid>
            <Row className="mb-3">
                <Col>
                    <Header />
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <InputGroup>
                        <Form.Control
                            aria-describedby="search-user"
                            aria-label="User"
                            placeholder="User"
                        />
                        <Button variant="outline-primary" id="search-user">
                            Search
                        </Button>
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
