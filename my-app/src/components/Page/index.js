import React from "react";
import AboutMe from "../../Pages/aboutme";
import ContactMe from "../../Pages/contactme";
import MyPortfolio from "../../Pages/myportfolio";
import MyResume from "../../Pages/myresume";


function Pages({currentPage}) {
    const renderPage = () => {
       if(currentPage.name === "aboutme"){
        return <AboutMe/>;
       } else if(currentPage.name === "contactme"){
        return <ContactMe/>;
       } else if (currentPage.name === "myportfolio"){
        return <MyPortfolio/>;
       } else if (currentPage.name === "myresume"){
        return <MyResume/>;
       }
       return <ContactMe/>;
    }

    return (
    <section>
        {renderPage()}
    </section>
    );
}

export default Pages;
