const { response } = require("express");
const axios = require('axios');
const {shapeTheAnswer} = require("../utils/formatProductResponse");

const getAllProducts = async (query) => {

    const apiUrl = `https://api.mercadolibre.com/sites/MLA/search?q=${query}`;

    const response = await axios.get(apiUrl).then(res => res.data);
    
    const shapedAnswer = shapeTheAnswer(response);
    return shapedAnswer;
};

const getProductById = async (id) => {

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


};

module.exports = {
    getAllProducts,
    getProductById
}