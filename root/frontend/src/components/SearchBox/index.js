import React, { useState } from 'react';

import { useNavigate } from "react-router-dom";

import { Container, Row, Col, Form, Image, InputGroup, Button } from 'react-bootstrap';

import { useProducts } from '../../contexts/productsContext';
import { getProducts } from '../../services/products';

import Logo from '../../assets/logo.png';
import MagnifierSmall from '../../assets/magnifier_small.png';

import styles from './searchBox.module.scss';

export function SearchBox() {

    const [inputValue, setInputValue] = useState('');
    const [isCallingService, setIsCallingService] = useState(false);
    const { _, setProducts } = useProducts();
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (inputValue) {

            setIsCallingService(true);
            try {
                const response = await getProducts({ product: inputValue });
                const { categories, items } = response.data;
                setProducts({ categories, items });
                setIsCallingService(false);
                navigate('/items?search=');
            } catch (error) {
                setIsCallingService(false);
            }
        }
    };

    const handleLogoClick = () => navigate('/');

    return (
        <Row className={styles.container_styles}>
            <Col>
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
                                        className={styles.input}
                                    />
                                    <Button type="submit" disabled={isCallingService} variant="light" id="button-search">
                                        <Image rounded src={MagnifierSmall} alt='lupa' loading="lazy" />
                                    </Button>
                                </InputGroup>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </Row>
    );
}