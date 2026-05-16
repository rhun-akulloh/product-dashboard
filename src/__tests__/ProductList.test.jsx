import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductList from '../components/ProductList';

const products = [
  { id: 1, name: 'Laptop', price: 999.99, inStock: true },
  { id: 2, name: 'Phone', price: 599.99, inStock: false },
  { id: 3, name: 'Tablet', price: 399.99, inStock: true },
];

describe('ProductList', () => {
  test('renders all products', () => {
    render(<ProductList products={products} />);
    expect(screen.getByText('Laptop')).toBeInTheDocument();
    expect(screen.getByText('Phone')).toBeInTheDocument();
    expect(screen.getByText('Tablet')).toBeInTheDocument();
  });

  test('shows "No products available" when product list is empty', () => {
    render(<ProductList products={[]} />);
    expect(screen.getByText('No products available')).toBeInTheDocument();
  });

  test('renders the filter button', () => {
    render(<ProductList products={products} />);
    expect(screen.getByRole('button', { name: /show in stock only/i })).toBeInTheDocument();
  });

  test('filters to in-stock products when filter button is clicked', () => {
    render(<ProductList products={products} />);
    fireEvent.click(screen.getByRole('button', { name: /show in stock only/i }));
    expect(screen.getByText('Laptop')).toBeInTheDocument();
    expect(screen.getByText('Tablet')).toBeInTheDocument();
    expect(screen.queryByText('Phone')).not.toBeInTheDocument();
  });

  test('shows all products when filter is toggled off', () => {
    render(<ProductList products={products} />);
    fireEvent.click(screen.getByRole('button', { name: /show in stock only/i }));
    fireEvent.click(screen.getByRole('button', { name: /show all/i }));
    expect(screen.getByText('Phone')).toBeInTheDocument();
  });

  test('shows "No products available" when all products are out of stock and filtered', () => {
    const allOutOfStock = products.map((p) => ({ ...p, inStock: false }));
    render(<ProductList products={allOutOfStock} />);
    fireEvent.click(screen.getByRole('button', { name: /show in stock only/i }));
    expect(screen.getByText('No products available')).toBeInTheDocument();
  });
});
