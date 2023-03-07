import React, { useRef, useState } from 'react';
import { SearchBox } from '../../components/SearchBox';
import { Breadcrumbs } from '../../components/Breadcrumbs';

import { useProducts } from '../../contexts/productsContext';

import { Container, Row, Col, Card, Button, ListGroup, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';

export function ProductDetails() {

    const { productSelected } = useProducts();
    const { description, picture, title, price, condition, sold_quantity } = productSelected;

    const conditionTable = {
        new: 'Nuevo'
    }

    return (
        <>
            <SearchBox />
            <Container>
                <Breadcrumbs />
                <Row>
                    <Col>
                        <Card style={{ width: '100%' }}>
                            <Row>
                                <Col md={8} >
                                    <Card.Img variant="top" src={picture} />
                                    <Card.Body>
                                        <Card.Title>Descripción del producto</Card.Title>
                                        <Card.Text>
                                            {decodeURI(description)}
                                        </Card.Text>
                                    </Card.Body>
                                </Col>
                                <Col>
                                    <Card.Text>
                                        {`${conditionTable[condition]} - ${sold_quantity} vendidos`}
                                    </Card.Text>
                                    <Card.Title>{title}</Card.Title>
                                    <Card.Title>{price.amount}</Card.Title>
                                    <Button variant="primary">Comprar</Button>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container >
        </>
    )
}