import "./style.css";
import React, { useEffect } from "react";

function Navbar(props) {
    const {pages = [], setCurrentPage, currentPage } = props;

//using the useEffect Hook to set the document.title to the current page
useEffect(() => {document.title = currentPage.name}, [currentPage])







//Will click current page 
    return <nav><ul className = "container">
        {pages.map((page) =>{
            return <li className = {currentPage.name === page.name ? "active" : ''} key = {page.name}><span onClick={() => setCurrentPage(page)}>{page.name}</span></li>
        })}
        </ul></nav>
}

export default Navbar;