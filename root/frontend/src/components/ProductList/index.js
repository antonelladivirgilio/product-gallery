import React, { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { useProducts } from '../../contexts/productsContext';
import { getProductById } from '../../services/products';

import { Row, Col, Card, ListGroup, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';

import shippingImg from '../../assets/ic_shipping_small.png';

export function ProductList(props) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const { products, setProductSelected } = useProducts();
    const shippingTooltipImgRef = useRef();

    const navigate = useNavigate();

    const handleProductClick = (productId) => {

        setLoading(true);

        getProductById({ id: productId })
            .then((response) => {              
                setProductSelected(response);
                navigate(`/items/${productId}`);
            })
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    };

    return (
        <Row>
            <Col>
                <Card style={{ width: '100%' }}>
                    <ListGroup variant="flush">

                        {products.map((currentProduct, _) => {
                            const { thumbnail, title, id, price, shipping, address } = currentProduct;
                            const { free_shipping } = shipping;
                            const { city_name } = address;
                          
                            return (
                                <ListGroup.Item key={id}>
                                    <Card border="light" onClick={() => handleProductClick(id)} style={{ cursor: 'pointer' }}>
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