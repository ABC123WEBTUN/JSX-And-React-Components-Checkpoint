import React from 'react';
import product from '../product';

const Image = () => {
  return (
    <img 
      src={product.image} 
      alt={product.name}
      className="product-image img-fluid rounded mb-3"
      style={{ 
        width: '100%', 
        height: '250px', 
        objectFit: 'cover',
        transition: 'transform 0.3s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
    />
  );
};

export default Image;