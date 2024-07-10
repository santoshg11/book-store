// services/api.js

import axios from 'axios';

export const fetchBooks = async () => {
    const response = await axios.get('http://localhost:4000/books');
    return response.data;
};

export const fetchBooksById = async (id) => {
    const response = await axios.get(`http://localhost:4000/books/${id}`);
    return response.data;
};

export const deleteBooksById = async (id) => {
    const response = await axios.delete(`http://localhost:4000/books/${id}`);
    return response.data;
};