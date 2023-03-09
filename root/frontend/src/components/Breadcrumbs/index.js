import React from 'react';

import { useProductsContext } from '../../contexts/productsContext';
import { isObjectEmpty } from '../../utilities/isObjectEmpty';

import breadcrumbChevron from '../../assets/breadcrumb_chevron.png';

import styles from './breadcrumbs.module.scss';

export function Breadcrumbs() {

    const { products } = useProductsContext();
    const { categories } = products;

    const showBreadcrumbs = categories && categories.length > 0;
    const showChevron = categories.length - 1;

    return (
        <>
            {
                !isObjectEmpty(products) && showBreadcrumbs && (
                    <ol className={styles.container_breadcrumbs}>
                        {
                            categories.map((category, index) => {

                                return (
                                    <li key={`category_${index}`} className={styles.breadcrumb_item}>
                                        <a href="#">{category}</a>
                                        {index !== showChevron && <img className={styles.breadcrumb_chevron} src={breadcrumbChevron} />}
                                    </li>
                                )
                            })
                        }
                    </ol>
                )
            }
        </>

    )
}