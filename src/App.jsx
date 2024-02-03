import "./App.css";
//import React, { useEffect } from "react";
import { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import NavTabs from "./components/NavTabs";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from './components/Footer';

function App() {

    const [pages] = useState([
        { name : 'About' },
        { name: 'Portfolio' },
        { name: 'Resume' },
        { name: 'Contact' }
    ]);
    const [currentPage, setCurrentPage] = useState(pages[0]);

    useEffect(() => {
        document.title = `${currentPage.name}`
    });

    return (
        <div>
           <Header/>
            <NavTabs 
                pages={pages}
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
};

export default App;