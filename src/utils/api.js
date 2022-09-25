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

export const signUpUser = (body) => {
    return axios.post(`${BASE_URL}/users/register`, body)
}

