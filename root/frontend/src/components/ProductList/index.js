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
                        <Card bsPrefix={styles.container}>
                            <ol>
                                {products.items.map((currentProduct, index) => {
                                    const { picture, title, id, price, free_shipping } = currentProduct;

                                    return (
                                        index < 4 &&
                                        <li onClick={() => handleProductClick(id)} key={id} className={styles.container_product}>
                                            <Container fluid>
                                                <Row>
                                                    <Col lg={3} md={4} xs={6}>
                                                        <Image className={styles.card_image} src={picture} alt={title} loading="lazy" />
                                                    </Col>
                                                    <Col>
                                                        <Row>
                                                            <Col>
                                                                <span className={styles.card_price}>$ {price.amount}</span>
                                                                {
                                                                    free_shipping &&
                                                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Este producto tiene envio gratis</Tooltip>}>
                                                                        <span className={`${styles.card_free_shipping_image} d-inline-block`}>
                                                                            <Image
                                                                                ref={shippingTooltipImgRef}
                                                                                src={shippingImg} />
                                                                        </span>
                                                                    </OverlayTrigger>
                                                                }
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col>
                                                                <span className={styles.card_description}>{title}</span>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </li>
                                    )
                                })}
                            </ol>
                        </Card>
                    </Col>
                </Row>
            }
        </>)
}