import './style.css';
import React from "react";

function Header(props){
    return (<header className='header'>
        <h1>Kevin Korza's Portfolio</h1>
        {/* <img src="https://images.unsplash.com/photo-1578070181910-f1e514afdd08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2433&q=80"/> */}
        {props.children}
    </header>);
}

export default Header;