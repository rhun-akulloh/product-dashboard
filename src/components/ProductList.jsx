import React, { useState } from 'react';
import { Button } from '@mui/material';
import ProductCard from './ProductCard';

function ProductList({ products }) {
  const [showInStockOnly, setShowInStockOnly] = useState(false);

  const filteredProducts = showInStockOnly
    ? products.filter((p) => p.inStock)
    : products;

  return (
    <>
      <Button
        variant="contained"
        onClick={() => setShowInStockOnly((prev) => !prev)}
        sx={{ mb: 2 }}
      >
        {showInStockOnly ? 'Show All' : 'Show In Stock Only'}
      </Button>
      {filteredProducts.length === 0 ? (
        <p>No products available</p>
      ) : (
        <div>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
}

export default ProductList;
