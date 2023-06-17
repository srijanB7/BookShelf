import { createContext, useState } from "react";
import { books } from "../data/getBooks";

export const BookContext = createContext();

export const BookProvider = ({children}) => {
    const [allBooks, setAllBooks] = useState(books);
    const changeStatus = (id, value) => {
        setAllBooks(prev => prev.map(book => {
            if(book.id === id) 
                return {...book, status: value};
            return book;
        }))
    }

    return (
        <BookContext.Provider value={{ allBooks, setAllBooks, changeStatus }}>
            {children}
        </BookContext.Provider>
    )
}

