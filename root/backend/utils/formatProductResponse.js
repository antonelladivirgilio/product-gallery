const { isObjectEmpty } = require('./isObjectEmpty');

const formatResponse = (response) => {

    if (!response) {
        return;
    }

    const { results, filters } = response;

    let formatedResponse = {
        author: {
            name: "Antonella",
            lastname: "Di Virgilio"
        },
        categories: [],
        items: []
    };

    let item = {
        id: "", // id
        title: "", // title
        price: {
            currency: "", // currency_id
            amount: 0, // price
            decimals: 0
        },
        picture: "", // thumbnail
        condition: "", // condition
        free_shipping: false //shipping -> free_shipping
    };

    let categories = [];
    console.log(filters.length);
    // This is where I can find the categories
    if (filters.length > 0 && filters[0].values.length > 0) {
        categories = [...filters[0].values[0].path_from_root];
    }


    let formatedCategories = {};

    categories.forEach(currentCategory => {
        formatedCategories = {
            ...formatedCategories,
            [currentCategory.id]: { name: currentCategory.name, totalResults: 0 }
        }
    });

    // const formatedCategories = categories.map((currentCategory) => {

    //     return {
    //         [currentCategory.id]: { name: currentCategory.name, totalResults: 0 }
    //     }
    // });
    console.log("categories", categories);
    console.log("formatedCategories", formatedCategories);

    // results.map((currentProduct, _index) => {
    //     currentProduct.category_id == "" ? variable + 1;

    //     return {
    //         [currentProduct.category_id]: 
    //     }
    // });




    // console.log("formatResponse response", response);


};

module.exports = { formatResponse }