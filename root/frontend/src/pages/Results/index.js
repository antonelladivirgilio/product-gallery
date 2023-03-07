import React from 'react';
import { ProductList } from '../../components/ProductList';
import { Breadcrumbs } from '../../components/Breadcrumbs';

import { useProducts } from '../../contexts/productsContext';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function Results() {

    const { products, setProductSelected } = useProducts();

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Breadcrumbs />
                    </Col>
                </Row>
                <ProductList products={products.items} />
            </Container>
        </>
    );
}