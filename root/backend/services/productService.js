const { response } = require("express");
const axios = require('axios');

const getAllProducts = (query) => {
    const allProducts = [{ hola: query }];
    //  Debe consultar el siguiente endpoint: https://api.mercadolibre.com/sites/MLA/search?q=:query

    try {
        const callGetAllProducts = async (query) => {

            const apiUrl = `https://api.mercadolibre.com/sites/MLA/search?q=${query}`;
            const response = await axios.get(apiUrl).then(res => res.data);
            console.log(`getAllProducts ${response.results}`);
            return response.results;
        }
        callGetAllProducts(query);

    } catch (error) {
        response
            .status(error.status || 500)
            .send({ status: "FAILED", data: { error: error.message || error } })
    }

    return allProducts;
};

const getProductById = (id) => {

    const callProductById = async (id) => {

        const apiProductByIdUrl = `https://api.mercadolibre.com/items/${id}`;
        const apiProductDescriptionUrl = `https://api.mercadolibre.com/items/${id}/description`;

        const promises = [axios.get(apiProductByIdUrl), axios.get(apiProductDescriptionUrl)];
        try {
            await Promise.all(promises)
                .then((results) => {
                    let product = {};

                    results.map((current, _index) => {
                        console.log(`getProductById current ${current.data}`);
                    });
                })
        } catch (error) {
            response
                .status(error.status || 500)
                .send({ status: "FAILED", data: { error: error.message || error } })
        }

        return response;
    }

    callProductById(id);

};

module.exports = {
    getAllProducts,
    getProductById
}