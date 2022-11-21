import React from "react";

function Navbar(props) {
    const {pages = [], setCurrentPage, currentPage } = props;










    return <nav><ul>
        {pages.map((pages) =>{
            return <li>{pages.name}</li>
        } )}
        </ul></nav>
}

export default Navbar;