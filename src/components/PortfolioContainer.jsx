import { useState } from 'react';
//import { NavTabs } from "react-router-dom";
//import Home from './pages/Home';
import NavTabs from './NavTabs';
import About from './About';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';
import './App.css';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
    return <Portfolio />;
   }
    if (currentPage === 'Resume') {
     return <Resume />;
   } 
   if (currentPage === 'Contact') {
  return <Contact />}
   };

  const handlePageChange = (page) => setCurrentPage(page);

 return (
  <div >
    
    <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
   
      <main className="app-items" >{renderPage()}</main>
    </div>
 );
}
