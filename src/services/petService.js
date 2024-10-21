import axios from 'axios'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/pets`;

export const index = async () => {
    return axios.get(BASE_URL)
}

export const show = async (petId) => {
    return axios.get(`${BASE_URL}/${petId}`)
}

export const create = async (formData) => {
    return axios.post(BASE_URL, formData)
}

export const update = async (petId, formData) => {
    return axios.put(`${BASE_URL}/${petId}`, formData)
}

export const deletePet = async (petId) => {
    return axios.delete(`${BASE_URL}/${petId}`)
}