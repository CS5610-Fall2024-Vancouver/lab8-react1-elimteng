import React from "react";
import './Header.css';

function Header({ toggleFormVisibility, showForm }) {
    return (
        <header>
            <h1 className='com-head'>My Task App</h1>
            <button onClick={toggleFormVisibility}>
                {showForm ? "Close" : "Add Task"}
            </button>
        </header>
    );
}

export default Header;