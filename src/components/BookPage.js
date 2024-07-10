// src/components/BookModal.js
import React from 'react';
import { fetchBooksById } from '../services/api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const BookPage = () => {
    const { id } = useParams();
    const [book, setBook] = useState([]);
    useEffect(() => {
        const fetchBook = async (id) => {
            try {
                const fetchedBook = await fetchBooksById(id);
                setBook(fetchedBook);
            } catch (error) {
                console.error('Failed to fetch book details:', error);
            }
        }
        fetchBook(id);
    }, [id]);

    return (
        <div className="modal fade" id={`book-modal-${book.id}`}>

            <h5 className="modal-title">{book.title}</h5>


            <p>ID: {book.id}</p>
            <p>Title: {book.title}</p>
            <p>Author: {book.author}</p>
            <p>ISBN: {book.isbn}</p>
            <p>PublishedDate: {book.publishedDate}</p>
            <p>Genre: {book.genre}</p>
            <p>Description: {book.description}</p>

        </div>

    );
};

export default BookPage;