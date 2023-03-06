const getAllProducts = (request, response) => {
    //  Debe consultar el siguiente endpoint: https://api.mercadolibre.com/sites/MLA/search?q=:query
    const { query } = request.params;

    response.send(`"get all products" ${query}`);
};

const getProductById = (request, response) => {
    const { id } = request.params;
    // Debe consultar los siguientes endpoints:
    // https://api.mercadolibre.com/items/:id
    // https://api.mercadolibre.com/items/:id​/description
    response.send(`"get product by id" ${id}`);
};

module.exports = {
    getAllProducts,
    getProductById
}