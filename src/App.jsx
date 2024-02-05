//import React from 'react';
import { useState } from 'react';
//import './App.css';
import NavTabs from './components/NavTabs';
import Header from "./components/Header";
import About from './components/About';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
//import PortfolioContainer from "./components/PortfolioContainer";

function App() {
  const [pages] = useState([
        { name : 'About' },
        { name: 'Portfolio' },
        { name: 'Resume' },
        { name: 'Contact' }
    ]);
  
  const [currentPage, setCurrentPage] = useState(pages[0]);
    
  //const renderPage = () => {
    //switch(currentPage) {
      //case "About":
       // return <About />;
      //case "Portfolio":
       // return <Portfolio />;
      //case "Contact":
     //   return <Contact />;
      //case "Resume":
     //   return <Resume />;
    //  default: 
     //   return <About />;
   // }
 // };
 //<main className="mx-3">{renderPage()}</main>
  return (
    <div className = "portfolio-app">
      <Header  />
      
      <NavTabs pages={pages}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
      />
       <main>
                {currentPage.name === 'About' && <About />}
                {currentPage.name === 'Portfolio' && <Portfolio />}
                {currentPage.name === 'Resume' && <Resume />}
                {currentPage.name === 'Contact' && <Contact />}
            </main>
      
      <Footer />
    </div>
    
  );
}

export default App;

//import "./App.css";
//import PortfolioContainer from "./components/PortfolioContainer";
//import NavTabs from './components/NavTabs';
//import Header from "./components/Header";
//import Footer from './components/Footer';
//import { useState } from "react";

// Function that renders components with useState
//const App = () => {
  //const [currentPage, setCurrentPage] = useState("About");
  //return (
    //<div>
      //<Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      //<NavTabs />
      //<PortfolioContainer
        //currentPage={currentPage}
        //setCurrentPage={setCurrentPage}
      ///>
      //<Footer />
    //</div>
 // );
//};

//export default App;
