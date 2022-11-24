import React, {useState} from "react";
import AboutMe from "../../Pages/aboutme";
import ContactMe from "../../Pages/contactme";
import MyPortfolio from "../../Pages/myportfolio";
import MyResume from "../../Pages/myresume";
import NavTabs from "../../Pages/NavTabs";


export default function PortfolioContainer(props) {
  // console.log(props.currentPage.name);
    const [currentPage, setCurrentPage] = useState('aboutme');

    const renderPage = () => {
      if (currentPage === 'aboutme') {
        return <AboutMe />;
      }
      if (currentPage === 'contactme') {
        return <ContactMe />;
      }
      if (currentPage === 'myportfolio') {
        return <MyPortfolio />;
      }
      if (currentPage === 'myresume') {
        return <MyResume />;
      }
    
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </div>
    );
  }




























// function Page({currentPage}) {
//     const renderPage = () => {
//        if(currentPage.name === "aboutme"){
//         return <AboutMe/>;
//        } else if(currentPage.name === "contactme"){
//         return <ContactMe/>;
//        } else if (currentPage.name === "myportfolio"){
//         return <MyPortfolio/>;
//        } else if (currentPage.name === "myresume"){
//         return <MyResume/>;
//        }
//        return <ContactMe/>;
//     }

//     const handlePageChange = (page) => setCurrentPage(page);

//     return (
//     <section>
//         <NavTabs currentPage={currentPage}handlePageChange={handlePageChange}/>
//         {renderPage()}
//     </section>
//     )
// }

// export default Page;
