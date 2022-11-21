import "./style.css";
import React from "react";

function Navbar(props) {
    const {pages = [], setCurrentPage, currentPage } = props;









//Will click current page 
    return <nav><ul className = "container">
        {pages.map((pages) =>{
            return <li className = {currentPage.name === pages.name && "active"} key = {pages.name}><span onClick={() => setCurrentPage(pages)}>{pages.name}</span></li>
        })}
        </ul></nav>
}

export default Navbar;