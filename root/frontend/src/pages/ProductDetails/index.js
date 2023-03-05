import React, { useRef, useState } from 'react';
import { SearchBox } from '../../components/SearchBox';
import { Breadcrumbs } from '../../components/Breadcrumbs';

import { useProducts } from '../../contexts/productsContext';

import { Container, Row, Col, Card, Button, ListGroup, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';

export function ProductDetails() {

    const { productSelected } = useProducts();
    const { details, product } = productSelected;

    const condition = {
        new: 'Nuevo'
    }

    // agregar decodeuri por los espacios
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
                                    <Card.Img variant="top" src={product.secure_thumbnail} />
                                    <Card.Body>
                                        <Card.Title>Descripción del producto</Card.Title>
                                        <Card.Text>
                                            {decodeURI(details.plain_text)}
                                        </Card.Text>
                                    </Card.Body>
                                </Col>
                                <Col>
                                    <Card.Text>
                                        {`${condition[product.condition]} - ${product.sold_quantity} vendidos`}
                                    </Card.Text>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Title>{product.price}</Card.Title>
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