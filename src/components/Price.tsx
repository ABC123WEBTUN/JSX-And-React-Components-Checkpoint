import React from 'react';
import product from '../product';

const Price = () => {
  return (
    <h4 className="product-price text-success fw-bold mb-3">
      ${product.price}
    </h4>
  );
};

export default Price;