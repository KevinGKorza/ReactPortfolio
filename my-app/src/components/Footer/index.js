import React from 'react';




function Footer(){
    const icons = [
        {
            name: "fa-brands fa-linkedin",
            links: "https://www.linkedin.com/in/kevin-korza-344016134/"
        },
        {
            name: "fa-brands fa-github",
            links: "https://github.com/KevinGKorza"
        },
        {
            name: "fa-brands fa-twitter",
            links: "https://twitter.com/KevinGKorza"
        },
        {
            name: "fa-brands fa-youtube",
            links: "https://www.youtube.com/channel/UCel29nlgQ7z0QlD3VPWL56g"
        }
    ]

    const Footer = {
        height: "20px",
        backgroundColor: "darkblue",
        alightItems: "center", 
        display: "grid", 
        justifyContent: "center",
        
         

    }
   
    const SocialMediaLinks = {
        color: "white",  
    }

    return(
        <footer style={Footer}>
            <section>
            {icons.map(icon =>{
                return <a href={icon.links} key={icon.name} target="_blank" rel="noopener noreferrer" style={SocialMediaLinks}><i className={icon.name}></i></a>
            })}
            </section>
        </footer>
    )

}
export default Footer;