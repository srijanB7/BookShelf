import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import { BookCard } from "../components/bookcard/BookCard";
import { Link } from "react-router-dom";

export const Home = () => {
    const { allBooks } = useContext(BookContext);
    const readingBooks = allBooks.filter((book) => book.status === "Reading");
    const unreadBooks = allBooks.filter((book) => book.status === "Unread");
    const readBooks = allBooks.filter((book) => book.status === "Read");
    return (
        <div className="home-container">
            <h1>Books</h1>
            <Link to="/search">Search</Link>
            <div className="home-content">
                <div className="category">
                    <h2>Currently Reading</h2>
                    <div className="category-content">
                        {readingBooks.length > 0 ? (
                            readingBooks.map((book) => (
                                <BookCard key={book.id} {...book} />
                            ))
                        ) : (
                            <p>No Books Found</p>
                        )}
                    </div>
                </div>
                <div className="category">
                    <h2>Unread</h2>
                    <div className="category-content">
                        {unreadBooks.length > 0 ? (
                            unreadBooks.map((book) => (
                                <BookCard key={book.id} {...book} />
                            ))
                        ) : (
                            <p>No Books Found</p>
                        )}
                    </div>
                </div>
                <div className="category">
                    <h2>Read</h2>
                    <div className="category-content">
                        {readBooks.length > 0 ? (
                            readBooks.map((book) => (
                                <BookCard key={book.id} {...book} />
                            ))
                        ) : (
                            <p>No Books Found</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
