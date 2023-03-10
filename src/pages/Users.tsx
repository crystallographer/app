import { Button, Col, Form, InputGroup, ListGroup, Row } from "react-bootstrap";

import { Main } from "../layouts/Main";

export function Users() {
    return (
        <Main>
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
        </Main>
    );
}
