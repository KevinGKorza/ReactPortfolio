//importing
import React, {useState} from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";




//importing Components 



function App() {
  return <div>
  <Header>
    <Navbar/>
  </Header>
  <main>
    hello there!
  </main>
  <Footer/>
  </div>
}

export default App;
