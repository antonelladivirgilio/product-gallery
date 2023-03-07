import React from 'react';
import { ProductList } from '../../components/ProductList';
import { Breadcrumbs } from '../../components/Breadcrumbs';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function Results() {

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Breadcrumbs />
                    </Col>
                </Row>
                <ProductList />
            </Container>
        </>
    );
}