import { Button, Col, Form, InputGroup, ListGroup, Row } from "react-bootstrap";

import { Main } from "../layouts/Main";

export function Home() {
    return (
        <Main>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <InputGroup>
                        <Form.Control
                            aria-describedby="search-all"
                            aria-label="Photo, post, user"
                            placeholder="Photo, post, user"
                        />
                        <Button variant="outline-primary" id="search-all">
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
