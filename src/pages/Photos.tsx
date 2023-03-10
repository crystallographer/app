import { Button, Col, Form, InputGroup, ListGroup, Row } from "react-bootstrap";

import { Main } from "../layouts/Main";

export function Photos() {
    return (
        <Main>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <InputGroup>
                        <Form.Control
                            aria-describedby="search-photo"
                            aria-label="Photo"
                            placeholder="Photo"
                        />
                        <Button variant="outline-primary" id="search-photo">
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
