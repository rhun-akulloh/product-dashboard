import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ProductCard from '../components/ProductCard';

const inStockProduct = { id: 1, name: 'Laptop', price: 999.99, inStock: true };
const outOfStockProduct = { id: 2, name: 'Phone', price: 599.99, inStock: false };

describe('ProductCard', () => {
  test('renders product name', () => {
    render(<ProductCard product={inStockProduct} />);
    expect(screen.getByText('Laptop')).toBeInTheDocument();
  });

  test('renders product price', () => {
    render(<ProductCard product={inStockProduct} />);
    expect(screen.getByText('$999.99')).toBeInTheDocument();
  });

  test('shows "In Stock" chip when product is in stock', () => {
    render(<ProductCard product={inStockProduct} />);
    expect(screen.getByText('In Stock')).toBeInTheDocument();
  });

  test('shows "Out of Stock" chip when product is not in stock', () => {
    render(<ProductCard product={outOfStockProduct} />);
    expect(screen.getByText('Out of Stock')).toBeInTheDocument();
  });

  test('applies outOfStock style class when product is out of stock', () => {
    const { container } = render(<ProductCard product={outOfStockProduct} />);
    const card = container.firstChild;
    expect(card.className).toMatch(/outOfStock/);
  });
});
