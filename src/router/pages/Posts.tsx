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

export function Posts() {
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
                            aria-describedby="search-post"
                            aria-label="Post"
                            placeholder="Post"
                        />
                        <Button variant="outline-primary" id="search-post">
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
