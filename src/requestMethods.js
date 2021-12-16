import axios from "axios";

const BASE_URL = "http://localhost:3001/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTg5YzM1YWI3MzM3ZmM3NDljODQ1MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzOTAyMDc3MiwiZXhwIjoxNjM5Mjc5OTcyfQ.CFnwxkrVTYusN1_doGA8WM92ACUQnTV-RdT9kKajuU4"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
})