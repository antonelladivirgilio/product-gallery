const getAllProducts = (query) => {
    const allProducts = [{ hola: query}];
    //  Debe consultar el siguiente endpoint: https://api.mercadolibre.com/sites/MLA/search?q=:query

    return allProducts;
};

const getProductById = (id) => {
    const product = [{ product: id }];
    // Debe consultar los siguientes endpoints:
    // https://api.mercadolibre.com/items/:id
    // https://api.mercadolibre.com/items/:id​/description

    return product;
};

module.exports = {
    getAllProducts,
    getProductById
}