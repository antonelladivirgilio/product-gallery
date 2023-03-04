import React from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Logo from '../../assets/logo.png';
import MagnifierSmall from '../../assets/magnifier_small.png';

export function SearchBox() {

    const searchBoxNavHomeLink = {
        backgroundImage: `url(${Logo})`,
        width: "200px",
        height: "50px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain"
    };

    const containerStyles = {
        backgroundColor: "#ffe600"
    };

    const handleClick = () => {
        alert("click");
    };

    return (
        <Container fluid className="search-box-container" style={containerStyles}>
            <Row className="justify-content-md-center">
                <Col md={10} sm={12}>
                    <Row>
                        <Col sm={2}>
                            <div style={searchBoxNavHomeLink} role="img"></div>
                        </Col>
                        <Col sm={10}>
                            <Form>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        placeholder="Nunca dejes de buscar"
                                        aria-label="Nunca dejes de buscar"
                                        aria-describedby="button-search"
                                    />
                                    <Button variant="secondary" id="button-search" onClick={handleClick}>
                                        <img src={MagnifierSmall}></img>
                                    </Button>
                                </InputGroup>
                            </Form>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}