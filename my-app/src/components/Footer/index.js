import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




function Footer(){
    const icons = [
        {
            name: "fa-brands fa-linkedin",
            links: "https://www.linkedin.com/in/kevin-korza-344016134/"
        },
        {
            name: "fa-brands fa-github",
            links: "https://github.com/KevinGKorza"
        }
    ]

    return(
        <footer>
            {icons.map(icon =>{
                return <a href={icon.links} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
            })}
        </footer>
    )

}
export default Footer;