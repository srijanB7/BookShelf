import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { BookProvider } from "./context/BookContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BookProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </BookProvider>
    </React.StrictMode>
);
