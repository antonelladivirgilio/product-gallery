import React from 'react';
import { SearchBox } from '../../components/SearchBox';
import { useProducts } from '../../contexts/productsContext';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export function Results() {

    const { products } = useProducts();
    console.log(products);
    return (
        <>
            <SearchBox />
            <Container>
                <Row>
                    <Col>
                        breadcrumbs
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card style={{ width: '100%' }}>
                            <ListGroup variant="flush">

                                {products.map((currentProduct, currentProductIndex) => {
                                    const { thumbnail, title, id } = currentProduct;

                                    return (
                                        <ListGroup.Item key={id}>
                                            <Card border="light">
                                                <Row>
                                                    <Col>
                                                        <Card.Img variant="left" src={thumbnail} alt={title} />
                                                    </Col>
                                                    <Col md={10} sm={12}>
                                                        <Card.Title>Card Title</Card.Title>
                                                        <Card.Text>
                                                            Some quick example text to build on the card title and make up the
                                                            bulk of the card's content.
                                                        </Card.Text>
                                                    </Col>
                                                </Row>
                                            </Card>
                                        </ListGroup.Item>)
                                })}
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}