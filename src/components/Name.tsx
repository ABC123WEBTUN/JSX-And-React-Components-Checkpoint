import React from 'react';
import product from '../product';

const Name = () => {
  return (
    <h3 className="product-name text-primary fw-bold mb-3">
      {product.name}
    </h3>
  );
};

export default Name;