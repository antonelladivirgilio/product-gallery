import { useCallback, useState, useEffect } from 'react';
import { ProductList } from '../../components/ProductList';
import { Breadcrumbs } from '../../components/Breadcrumbs';

import { useLocation } from "react-router-dom";

import { useCategoryContext } from '../../contexts/categoryContext';
import { getProducts } from '../../services/products';

import { Container, Row, Col } from 'react-bootstrap';

export function Results() {

    const { state } = useLocation();
    const [products, setProducts] = useState({
        categories: [],
        items: []
    });

    const { categories, setCategories } = useCategoryContext();

    const getResults = useCallback(async (query) => {

        if (query) {
            // setDisableButton(true);
            try {
                const { response, cancelGetProducts } = await getProducts({ product: query });

                const { categories, items } = response.data;
                setProducts({ categories, items });
                setCategories(categories);
                // setDisableButton(false);

                return cancelGetProducts.abort();
            } catch (error) {
                // setDisableButton(false);
            }
        }
    }, [setCategories]);

    useEffect(() => {
        getResults(state);
    }, [getResults, state]);

    return (
        <Container>
            <Row>
                <Col>
                    <Breadcrumbs categories={categories} />
                </Col>
            </Row>
            <ProductList products={products.items} />
        </Container>
    );
}