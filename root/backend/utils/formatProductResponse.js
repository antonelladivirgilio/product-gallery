const { isObjectEmpty } = require('./isObjectEmpty');

const shapeTheAnswerAllProducts = (response) => {

    if (!response) {
        return;
    }

    const { results, filters } = response;
    let categories = [];

    if (filters.length > 0) {
        categories = filters[0].values[0].path_from_root.map(category => category.name)
    }

    let items = results.map((item) => {
        const { id, title, currency_id, price, thumbnail, condition, shipping } = item;

        let formattedItem = {
            id,
            title,
            condition,
            picture: thumbnail,
            free_shipping: shipping.free_shipping,
            "price": {
                currency: currency_id,
                amount: price,
                decimals: 0
            }
        };

        return formattedItem;
    });

    let formatedResponse = {
        author: {
            name: "Antonella",
            lastname: "Di Virgilio"
        },
        categories,
        items
    };

    return formatedResponse;
};

const shapeTheAnswerProduct = (response) => {

};

module.exports = { shapeTheAnswerAllProducts, shapeTheAnswerProduct }