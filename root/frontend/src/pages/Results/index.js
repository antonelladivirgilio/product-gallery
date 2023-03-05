import React from 'react';
import { SearchBox } from '../../components/SearchBox';
import { ProductList } from '../../components/ProductList';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function Results() {

    return (
        <>
            <SearchBox />
            <Container>
                <Row>
                    <Col>
                        breadcrumbs
                    </Col>
                </Row>
                <ProductList />
            </Container>
        </>
    );
}