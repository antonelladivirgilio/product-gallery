import React, { useRef, useCallback } from 'react';
import { useNavigate } from "react-router-dom";

import { getProductById } from '../../services/products';

import { Container, Row, Col, Card, ListGroup, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useProducts } from '../../contexts/productsContext';
import shippingImg from '../../assets/ic_shipping_small.png';

import { isObjectEmpty } from '../../utilities/isObjectEmpty';

import styles from './productList.module.scss';

export function ProductList({ ...props }) {
    const { products, setProductSelected } = useProducts();
    const shippingTooltipImgRef = useRef();
    const navigate = useNavigate();

    const handleProductClick = useCallback(async (productId) => {
        const response = await getProductById({ id: productId });

        const { item } = response.data;
        setProductSelected(item);
        navigate(`/items/${productId}`);
    }, [products]);

    return (
        <>
            {
                !isObjectEmpty(products) &&
                <Row>
                    <Col>
                        <Card>
                            <ListGroup variant="flush"  >
                                {products.items.map((currentProduct, index) => {
                                    const { picture, title, id, price, free_shipping } = currentProduct;
                                    return (
                                        index < 4 && <ListGroup.Item key={id} bsPrefix={styles.padding_reset}>
                                            <Card border="light" onClick={() => handleProductClick(id)} className={styles.card_container}>
                                                <Container fluid bsPrefix={styles.padding_reset}>
                                                    <Row className={styles.padding_reset}>
                                                        <Col>
                                                            <Image className={styles.card_image} src={picture} alt={title} loading="lazy" />
                                                        </Col>
                                                        <Col lg={9} sm={12}>
                                                            <Card.Title>
                                                                <span className={styles.card_title_price}>$ {price.amount}</span>
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
                                                            <Card.Text bsPrefix={styles.card_description}>
                                                                {title}
                                                            </Card.Text>
                                                        </Col>                                                      
                                                    </Row>
                                                </Container>
                                            </Card>
                                        </ListGroup.Item>
                                    )
                                })}
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            }
        </>)
}