// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/" element={<ProductList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
