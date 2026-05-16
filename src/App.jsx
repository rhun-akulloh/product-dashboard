import React from 'react';
import ProductList from './components/ProductList';

const products = [
  { id: 1, name: 'Laptop', price: 999.99, inStock: true },
  { id: 2, name: 'Phone', price: 599.99, inStock: false },
  { id: 3, name: 'Tablet', price: 399.99, inStock: true },
  { id: 4, name: 'Headphones', price: 149.99, inStock: false },
  { id: 5, name: 'Smartwatch', price: 299.99, inStock: true },
];

function App() {
  return (
    <div>
      <h1>Product Dashboard</h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;
