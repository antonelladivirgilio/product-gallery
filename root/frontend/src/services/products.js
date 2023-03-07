import axios from 'axios';

export const getProducts = async({product}) => {

    const apiUrl = `${process.env.REACT_APP_BASE_URL}/items?q=${product}`;
   
    const response = await axios.get(apiUrl).then(res => res.data);

    return response.results;
}

export const getProductById = async({id}) => {
    const apiUrl = `${process.env.REACT_APP_BASE_URL}/items/${id}`;

    const response = await axios.get(apiUrl).then(res => res.data);
    return response;
}

export const getDescriptionByProductId = async({id}) => {

    const apiUrl = `https://api.mercadolibre.com/items/${id}/description`;
    const response = await axios.get(apiUrl).then(res => res.data);
    return response;
}