import axios from 'axios';
// const BASE_URL = `http://localhost:8080`;
const BASE_URL = `https://carma-island-api.herokuapp.com`;

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

export const logInUser = (body) => {
    return axios.post(`${BASE_URL}/users/login`, body)
}

export const editUser = (body) => {
    return axios.put(`${BASE_URL}/users/edit`, body, {
        headers: {
            Authorization: `Bearer ${localStorage.token}`
        }
    })
}

export const fetchUserVehicleList = () => {
    return axios.get(`${BASE_URL}/saved-vehicles/`,{
        headers: {
            Authorization: `Bearer ${localStorage.token}`
        }
    })
}

export const deleteUserVehicle = (body) => {
    console.log(body)
    return axios.delete(`${BASE_URL}/saved-vehicles/delete`, {
        headers: {
            Authorization: `Bearer ${localStorage.token}`
        },
        data: body
    })
}

export const addUserVehicle = (body) => {
    return axios.post(`${BASE_URL}/saved-vehicles/add`, body, {
        headers: {
            Authorization: `Bearer ${localStorage.token}`
        }
    })
}

