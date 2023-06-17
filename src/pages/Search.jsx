import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BookContext } from "../context/BookContext";
import { BookCard } from "../components/bookcard/BookCard";

export const Search = () => {
    const { allBooks } = useContext(BookContext);
    const [searchValue, setSearchValue] = useState("");
    function handleSearch(event) {
        const searchTitle = event.target.value.toLowerCase();
        setSearchValue(searchTitle);
    }
    const searchedBooks =
        searchValue === ""
            ? []
            : allBooks.filter((book) =>
                  book.title.toLowerCase().includes(searchValue.toLowerCase())
              );

    

    return (
        <div className="search-container">
            <Link to="/">Home</Link>
            <input type="text" onChange={handleSearch} className="search-box" />
            <div className="search-content">
                {searchedBooks.length > 0 ? (
                    searchedBooks.map((book) => (
                        <BookCard key={book.id} {...book} />
                    ))
                ) : (
                    <p>{searchValue === "" ? `Search Here` : `No results Found`}</p>
                )}
            </div>
        </div>
    );
};
