import { useEffect, useState } from "react";
import BooksList from "./BookList";
import { fetchBooks } from "./../services/api";

const HomePage = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        const fetchBookList = async () => {
            try {
                const fetchedBookList = await fetchBooks();
                setBooks(fetchedBookList);
            } catch (error) {
                console.error('Failed to fetch book details:', error);
            }
        }
        fetchBookList();
    }, [books]);

    return (
        <div>
            <header>
                <h1>Online Bookstore HomePage</h1>
            </header>
            <body>
                <BooksList books={books} setBooks={setBooks}>

                </BooksList>
            </body>
        </div>
    );
};

export default HomePage;