// src/store.js
import { writable, derived } from 'svelte/store';

export const categories = writable([
  // Sample data
  { id: 1, name: 'Klimatyzatory' },
  { id: 2, name: 'Pompy ciepła' },
  { id: 3, name: 'Panele słoneczne' },
  // Add more categories as needed
]);

export const products = writable([
  // Sample data
  {
    id: '49f9284f-04f5-4d46-8a81-e67c4675a40a',
    manufacturer: 'Bosch',
    name: 'CoolStar 1.6 kW',
    price: 3750,
    description: 'Lorem ipsum dolor sit amet.',
    image_url: 'https://www.klimaanlagen-heizungen.de/media/image/60/68/b7/BOSCH-Climate-5000-Deckenkassette-Logo.jpg',
    categoryId: 1,
  },
  {
    id: '6849875a-6f08-4e37-85db-129213ab99b7',
    manufacturer: 'Baretta',
    name: 'Monoblok HYDRO UNIT M 008 Monoblok R32',
    price: 14000,
    description: 'Consectetur adipiscing elit.',
    image_url: 'https://image.ceneostatic.pl/data/products/134375152/i-beretta-monoblok-hydro-unit-m-008-monoblok-r32-20191952.jpg',
    categoryId: 2,
  },
]);

export const offers = writable([
  // Sample data
  {
    id: 'd730dd29-e0ce-44ab-a7f2-a871e8a5fcb3',
    shortcode: 'kowalski_425bt',
    name: 'Oferta startowa',
    client_surname: 'Kowalski',
    client_name: 'Marian',
    products: [{ id: '49f9284f-04f5-4d46-8a81-e67c4675a40a', quantity: 1 }],
    creation_timestamp: 1707111277,
    modification_timestamp: 1707511418,
  },
  {
    id: 'f8d00f44-89cb-4748-93fe-d6c7b6032247',
    shortcode: 'opara_dasff3',
    name: 'Oferta startowa',
    client_surname: 'Opara',
    client_name: 'Karol',
    products:
      [{
        id: '49f9284f-04f5-4d46-8a81-e67c4675a40a',
        quantity: 1
      }, {
        id: '6849875a-6f08-4e37-85db-129213ab99b7',
        quantity: 1
      }],
    creation_timestamp: 1707311277,
    modification_timestamp: 1707511418,
  },
]);

export const clients = writable([
  {
    id: '1d58843a-7730-41db-889b-1f7c9c6458d3',
    name: "Marian",
    surname: "Kowalski",
    address: "Wspólna 6, Słupno",
  },
  {
    id: '77aebcac-595f-48f5-9db7-e5b1c050ead9',
    name: "Karol",
    surname: "Opera",
    address: "Lezajska 2/1, Warszawa",
  },
]);
