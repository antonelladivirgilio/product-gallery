import React from 'react';
import { SearchBox } from '../../components/SearchBox';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

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
                <Row>
                    <Col>
                        <Card style={{ width: '100%' }}>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <Card>
                                        <Card.Img src="holder.js/100px270" alt="Card image" />
                                    </Card>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Card>
                                        <Card.Img src="holder.js/100px270" alt="Card image" />
                                    </Card>
                                </ListGroup.Item>                               
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}