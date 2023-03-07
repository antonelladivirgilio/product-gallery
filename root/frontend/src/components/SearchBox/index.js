import React, { useEffect, useState } from 'react';

import { useNavigate } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useProducts } from '../../contexts/productsContext';
import { getProducts, getProductById } from '../../services/products';

import Logo from '../../assets/logo.png';
import MagnifierSmall from '../../assets/magnifier_small.png';

import axios from 'axios';

export function SearchBox() {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [inputValue, setInputValue] = useState('');
    const { _, setProducts } = useProducts();
    const navigate = useNavigate();

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const response = await getProducts({ product: inputValue });
        const { categories, items } = response.data;
        setProducts({ categories, items });
        navigate('/items?search=');
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
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
                                <Form onSubmit={handleSubmit} >
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                            placeholder="Nunca dejes de buscar"
                                            aria-label="Nunca dejes de buscar"
                                            aria-describedby="button-search"
                                            onChange={handleInputChange}
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