// src/store.js
import { writable, derived } from 'svelte/store';

export const categories = writable([
  // Sample data
  { id: 1, name: 'Category 1' },
  { id: 2, name: 'Category 2' },
  // Add more categories as needed
]);

export const products = writable([
  // Sample data
  {
    id: 1,
    name: 'Product 1',
    price: 10.99,
    description: 'Lorem ipsum dolor sit amet.',
    image: 'product1.jpg',
    categoryId: 1,
  },
  {
    id: 2,
    name: 'Product 2',
    price: 19.99,
    description: 'Consectetur adipiscing elit.',
    image: 'product2.jpg',
    categoryId: 2,
  },
]);

export const offers = writable([
    // Sample data
    { id: 1, name: 'Offer 1', products: {1:1} },
    { id: 2, name: 'Offer 2', products: {1:1, 2:1} },
  ]);
