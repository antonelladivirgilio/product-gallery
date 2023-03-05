import React, { useRef } from 'react';
import { useProducts } from '../../contexts/productsContext';

import { Row, Col, Card, ListGroup, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';

import shippingImg from '../../assets/ic_shipping_small.png';

export function ProductList(props) {
    const { products } = useProducts();
    const shippingTooltipImgRef = useRef();

    return (
        <Row>
            <Col>
                <Card style={{ width: '100%' }}>
                    <ListGroup variant="flush">

                        {products.map((currentProduct, currentProductIndex) => {
                            const { thumbnail, title, id, price, shipping, address } = currentProduct;
                            const { free_shipping } = shipping;
                            const { city_name } = address;

                            return (
                                <ListGroup.Item key={id}>
                                    <Card border="light">
                                        <Row>
                                            <Col>
                                                <Image rounded src={thumbnail} alt={title} />
                                            </Col>
                                            <Col lg={8} sm={12}>
                                                <Card.Title>
                                                    $ {price}
                                                    {
                                                        free_shipping &&
                                                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Este producto tiene envio gratis</Tooltip>}>
                                                            <span className="d-inline-block">
                                                                <Image
                                                                    ref={shippingTooltipImgRef}
                                                                    roundedCircle
                                                                    src={shippingImg} />
                                                            </span>
                                                        </OverlayTrigger>
                                                    }
                                                </Card.Title>
                                                <Card.Text>
                                                    {title}
                                                </Card.Text>
                                            </Col>
                                            <Col lg={2} sm={12}>
                                                {city_name}
                                            </Col>
                                        </Row>
                                    </Card>
                                </ListGroup.Item>)
                        })}
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    )
}