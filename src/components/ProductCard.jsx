import React from 'react';
import { Card, CardContent, Typography, Chip } from '@mui/material';
import styles from '../styles/ProductCard.module.css';

function ProductCard({ product }) {
  const { name, price, inStock } = product;

  return (
    <Card className={`${styles.card} ${!inStock ? styles.outOfStock : ''}`}>
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body1">${price.toFixed(2)}</Typography>
        <Chip
          label={inStock ? 'In Stock' : 'Out of Stock'}
          color={inStock ? 'success' : 'error'}
          size="small"
          sx={{ mt: 1 }}
        />
      </CardContent>
    </Card>
  );
}

export default ProductCard;
