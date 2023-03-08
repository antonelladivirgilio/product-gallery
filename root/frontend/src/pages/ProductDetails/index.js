import React, { useRef, useState } from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';

import { useProductsContext } from '../../contexts/productsContext';

import { Container, Row, Col, Card, Button, ListGroup, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { isObjectEmpty } from '../../utilities/isObjectEmpty';

import styles from './productDetails.module.scss';

export function ProductDetails() {

    const { productSelected } = useProductsContext();
    const { description, picture, title, price, condition, sold_quantity } = productSelected;

    const conditionTable = {
        new: 'Nuevo',
        used: 'Usado'
    }  

    return (
        <>
            {
                !isObjectEmpty(productSelected) &&
                <Container>
                    <Breadcrumbs />
                    <Row>
                        <Col>
                            <Card bsPrefix={styles.container}>
                                <Container>
                                    <Row>
                                        <Col md={8} xs={6} >
                                            <Row>
                                                <Col>
                                                    <Image className={styles.card_image} src={picture} alt={title} loading="lazy" />
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col md={4} xs={6} className={styles.right_container}>
                                            <span className={styles.header_subtitle}>
                                                {`${conditionTable[condition]}`}
                                                {sold_quantity > 0 && ` - ${sold_quantity} vendidos`}
                                            </span>
                                            <h1 className={styles.product_title}>{title}</h1>
                                            <p className={styles.product_price}>$ {price.amount}</p>
                                            <div className='d-grid'>
                                                <Button variant="primary" className={styles.product_buy_btn}>Comprar</Button>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={8}>
                                            <h2 className={styles.description_title}>Descripción del producto</h2>
                                            <p className={styles.description_content}>{description ? description : "El vendedor no agregó una descripción"}</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card>
                        </Col>
                    </Row>
                </Container >
            }
        </>
    )
}