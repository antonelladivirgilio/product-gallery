const productServices = require("../services/productService");

const getAllProducts = (request, response) => {
    const { query } = request.params;
    const allProducts = productServices.getAllProducts(query);

    response.send({
        status: '200', data: allProducts
    });
};

const getProductById = (request, response) => {
    const { id } = request.params;
    const productById = productServices.getProductById(id);

    response.send({
        status: '200', data: productById
    });
};

module.exports = {
    getAllProducts,
    getProductById
}