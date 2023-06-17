import React, { useContext, useState } from "react";
import "./BookCard.css";
import { BookContext } from "../../context/BookContext";

export const BookCard = ({ id, title, author, image, status }) => {
    const { changeStatus } = useContext(BookContext);
    function handleChange(e) {
        setSelectedValue(e.target.value);
        changeStatus(id, e.target.value);
    }
    const [selectedValue, setSelectedValue] = useState(status);

    return (
        <div className="card-container">
            <div className="top">
                <img src={image} alt="book" />
            </div>
            <div className="bottom">
                <div className="text">
                    <p>{title}</p>
                    <p>{author}</p>
                </div>
                <select
                    onChange={handleChange}
                    value={selectedValue}
                    className="select"
                >
                    <option>Reading</option>
                    <option>Unread</option>
                    <option>Read</option>
                    <option>None</option>
                </select>
            </div>
        </div>
    );
};
