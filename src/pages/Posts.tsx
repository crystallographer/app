import { Button, Col, Form, InputGroup, ListGroup, Row } from "react-bootstrap";

import { Main } from "../layouts/Main";

export function Posts() {
    return (
        <Main>
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
        </Main>
    );
}
