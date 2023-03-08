import React, { useState } from 'react';

import { useNavigate } from "react-router-dom";

import { Container, Row, Col, Form, Image, InputGroup, Button } from 'react-bootstrap';

import { useProducts } from '../../contexts/productsContext';
import { getProducts } from '../../services/products';

import Logo from '../../assets/logo.png';
import MagnifierSmall from '../../assets/magnifier_small.png';

export function SearchBox() {

    const [inputValue, setInputValue] = useState('');
    const { _, setProducts } = useProducts();
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (inputValue) {

            const response = await getProducts({ product: inputValue });
            const { categories, items } = response.data;
            setProducts({ categories, items });

            navigate('/items?search=');
        }
    };

    const handleLogoClick = () => navigate('/');

    return (
        <Container>
            <Row>
                <Col sm="auto">
                    <Image onClick={handleLogoClick} rounded src={Logo} alt='Logo de MercadoLibre' loading="lazy" />
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
                                <Image rounded src={MagnifierSmall} alt='lupa' loading="lazy" />
                            </Button>
                        </InputGroup>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}