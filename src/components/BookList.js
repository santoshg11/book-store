// src/components/BooksList.js
import React from 'react';
import { Link } from 'react-router-dom';
import { deleteBooksById } from '../services/api';

const BooksList = ({ books, setBooks }) => {

    const deleteBook = (book) => {
        console.log(book);
        deleteBooksById(book.id).then(() => {
            let newList = books.filter((el) => el.id !== book.id);
            setBooks(newList);
        });
    };

    return (
        <div className="container">
            <div className="row">
                {books.map((book) => (
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card">
                            {/* <img src={book.coverImage} className="card-img-top" alt={book.title} /> */}
                            <div className="card-body">
                                <h5 className="card-title">{book.title}</h5>
                                <p className="card-text">{book.description}</p>
                            </div>
                        </div>
                        <Link to={`/book/${book.id}`} className="btn btn-primary">View</Link>
                        <button onClick={() => deleteBook(book)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BooksList;