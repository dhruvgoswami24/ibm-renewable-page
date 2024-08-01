import React from 'react';
import ProductList from './components/ProductList';
import './App.css';

const App = () => {
  return (
    <div className="app">
        <header className="header">
        <h1 className="header-title">Renewable Energy Directory</h1>
      </header>
      <ProductList />
    </div>
  );
};

export default App;