// Product.js
import React from 'react';
import { Link } from 'react-router-dom';

function Product({ product, isExpanded, onProductClick }) {
  const handleClick = () => {
    onProductClick(product.id);
  };

  return (
    <div style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
      <Link to={`/product/${product.id}`}>
        <h2>{product.name}</h2>
      </Link>
      <div onClick={handleClick} style={{ cursor: 'pointer' }}>
        <p>{product.description}</p>
        <p>Price: ₹{product.price}</p>
      </div>
      {isExpanded && (
        <div>
          <p>{product.additionalDetails}</p>
        </div>
      )}
    </div>
  );
}

export default Product;
