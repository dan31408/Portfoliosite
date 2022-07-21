import Header from './components/Header';
import Footer from './components/Footer';
import PortfolioList from './features/portfolio/PortfolioList';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <PortfolioList />
      <Footer />
    </div>
  );
}

export default App;
