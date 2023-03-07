import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import { useProducts } from '../../contexts/productsContext';

export function Breadcrumbs({...props }) {

    const { products } = useProducts();
    const { categories } = products;

    const showBreadcrumbs = categories && categories.length > 0;

    return (
        <>
            {
                showBreadcrumbs && (
                    < Breadcrumb >
                        {categories.map((category, index) => <Breadcrumb.Item href="#" key={`category_${index}`}>{category}</Breadcrumb.Item>)}
                    </Breadcrumb >
                )
            }
        </>

    )
}