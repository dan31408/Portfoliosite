import Header from './components/Header';
import Footer from './components/Footer';
import PortfolioDirectoryPage from './pages/PortfolioDirectoryPage';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <PortfolioDirectoryPage />
      <Footer />
    </div>
  );
}

export default App;
