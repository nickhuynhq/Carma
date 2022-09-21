import axios from 'axios';
const BASE_URL = `http://localhost:8080`;

export const fetchCars = () => {
    return axios.get(`${BASE_URL}/cars/`);
}

export const fetchCarById = (carId) => {
    return axios.get(`${BASE_URL}/cars/${carId}`);
}

export const fetchCarBySearch = (body) => {
    return axios.get(`${BASE_URL}/cars/search?brand=${body.brand}&make=${body.make}&year=${body.year}`)
}

export const fetchCarByType = (body) => {
    return axios.get(`${BASE_URL}/cars/searchType?type=${body.type}`)
}

// export const addInventoryItem = (item) => {
//     return axios.post(`${BASE_URL}/inventory/add`, item);
// }

// export const editInventoryItem = (item) => {
//     return axios.put(`${BASE_URL}/inventory/${item.id}/edit`, item);
// }

// export const fetchWarehouses = () => {
//     return axios.get(`${BASE_URL}/warehouse/`);
// }

// export const addNewWarehouse = (body) => {
//     return axios.post(`${BASE_URL}/warehouse/add`, body);
// }

// export const editWarehouse = (body, warehouseId) => {
//     return axios.put(`${BASE_URL}/warehouse/${warehouseId}/edit`, body);
// }
