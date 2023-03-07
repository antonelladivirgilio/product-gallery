import React, { useRef } from 'react';
import { useNavigate } from "react-router-dom";

import { getProductById } from '../../services/products';

import { Row, Col, Card, ListGroup, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useProducts } from '../../contexts/productsContext';
import shippingImg from '../../assets/ic_shipping_small.png';

export function ProductList({ products, ...props }) {
    const { setProductSelected } = useProducts();
    const shippingTooltipImgRef = useRef();
    const navigate = useNavigate();

    const handleProductClick = async (productId) => {
        const response = await getProductById({ id: productId });

        const { item } = response.data;
        setProductSelected(item);
        navigate(`/items/${productId}`);
    };

    return (
        <Row>
            <Col>
                <Card >
                    <ListGroup variant="flush">
                        {products.map((currentProduct) => {
                            const { picture, title, id, price, free_shipping } = currentProduct;
                            // const { city_name } = address;

                            return (
                                <ListGroup.Item key={id}>
                                    <Card border="light" onClick={() => handleProductClick(id)} style={{ cursor: 'pointer' }}>
                                        <Row>
                                            <Col>
                                                <Image rounded src={picture} alt={title} />
                                            </Col>
                                            <Col lg={8} sm={12}>
                                                <Card.Title>
                                                    $ {price.amount}
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
                                                {/* {city_name} */}
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