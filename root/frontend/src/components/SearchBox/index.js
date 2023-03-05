import React, { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Logo from '../../assets/logo.png';
import MagnifierSmall from '../../assets/magnifier_small.png';

import axios from 'axios';

export function SearchBox() {

    const [products, setProducts] = useState([]);
    const [inputValue, setInputValue] = useState('');


    const searchBoxNavHomeLink = {
        display: "inline-block",
        backgroundImage: `url(${Logo})`,
        width: "50px",
        height: "50px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain"
    };

    const containerStyles = {
        backgroundColor: "#ffe600"
    };

    const handleClick = (e, inputValue) => {
        e.preventDefault();

        async function getProducts(product) {
            try {
                const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${product}`);
                console.log(response);
                setProducts(response.data.results);
            } catch (error) {
                console.error(error);
            }
        }

        getProducts('libro');
    };

    return (
        <Container fluid className="search-box-container" style={containerStyles}>
            <Row>
                <Col>
                    <Container>
                        <Row>
                            <Col sm="auto">
                                <div style={searchBoxNavHomeLink} role="img"></div>
                            </Col>
                            <Col>
                                <Form onSubmit={handleClick} >
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                            placeholder="Nunca dejes de buscar"
                                            aria-label="Nunca dejes de buscar"
                                            aria-describedby="button-search"
                                            onChange={(e) => setInputValue(e.target.value)}
                                        />
                                        <Button type="submit" variant="secondary" id="button-search">
                                            <img src={MagnifierSmall}></img>
                                        </Button>
                                    </InputGroup>
                                </Form>
                            </Col>

                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}