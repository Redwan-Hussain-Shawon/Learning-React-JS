import React from 'react'
import product from './Product';
import ProductCard from './ProductCard';

export default function ProductList() {
  return (
    <div className="row">
      {product.map((item, index) => (
        <div className="col-md-3 mb-4" key={index}>
         <ProductCard product={item} />
        </div>
      ))}
    </div>
  );
}
