//importing
import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Page from "./components/Page";





//importing Components 



function App() {
  const [pages] = useState([
    {
      name: "About Me"
    },
    {
      name: "My Portfolio"
    },
    {
      name: "My Resume"
    },
    {
      name: "Contact Me"
    }

  ])

  //Data for above pages
  const [currentPage, setCurrentPage] = useState(pages[0])

  return (
  <div>
    <Header>
     
    </Header>
    <main>
      <Page currentPage={currentPage}></Page>
    </main>
    <Footer />
  </div>
  )
}

export default App;
