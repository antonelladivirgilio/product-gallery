import React, { useState, useCallback } from 'react';

import { useNavigate } from "react-router-dom";

import { Container, Row, Col, Form, Image, InputGroup, Button } from 'react-bootstrap';

import { useProductsContext } from '../../contexts/productsContext';
import { getProducts } from '../../services/products';

import Logo from '../../assets/logo.png';
import MagnifierSmall from '../../assets/magnifier_small.png';

import styles from './searchBox.module.scss';

export function SearchBox() {

    const [inputValue, setInputValue] = useState('');
    const [disableButton, setDisableButton] = useState(false);
    const { _, setProducts } = useProductsContext();
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (inputValue) {

            setDisableButton(true);
            try {
                const response = await getProducts({ product: inputValue });
                const { categories, items } = response.data;
                setProducts({ categories, items });
                setDisableButton(false);
                navigate('/items?search=');
            } catch (error) {
                setDisableButton(false);
            }
        }
    };

    const handleLogoClick = useCallback(() => navigate('/'), []);

    return (
        <Row className={styles.container_styles}>
            <Col>
                <Container>
                    <Row>
                        <Col md="1" sm="2" xs="3">
                            <Image onClick={handleLogoClick} className={styles.nav_logo} src={Logo} alt='Logo de MercadoLibre' loading="lazy" />
                        </Col>
                        <Col>
                            <Form onSubmit={handleSubmit} >
                                <InputGroup >
                                    <Form.Control
                                        placeholder="Nunca dejes de buscar"
                                        aria-label="Nunca dejes de buscar"
                                        aria-describedby="button-search"
                                        onChange={handleInputChange}
                                        className={styles.form_input}
                                    />
                                    <Button type="submit" disabled={disableButton} className={styles.form_button} variant="light" id="button-search">
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