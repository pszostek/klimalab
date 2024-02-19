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
    id: '78c64449-0a82-460a-9704-978f6426527a',
    manufacturer: 'AUX',
    name: 'J-SMART 3.6',
    price: 2600,
    description: 'Lorem ipsum dolor sit amet.',
    image_url: 'https://www.tmlab.pl/SGC/P/JSmart.jpg',
    categoryId: 1,
  }, 
  
  {
    id: 'db119ba8-26a1-4828-93cd-2daadc853362',
    manufacturer: 'HiSense',
    name: 'Energy SE 2.6',
    price: 2600,
    description: 'Lorem ipsum dolor sit amet.',
    image_url: 'https://www.tmlab.pl/SGC/P/EnergySE.jpg',
    categoryId: 1,
  },  {
    id: '4f00c936-8dd0-4614-a95f-8877c1b8958c',
    manufacturer: 'HiSense',
    name: 'Energy SE 3.5',
    price: 3750,
    description: 'Lorem ipsum dolor sit amet.',
    image_url: 'https://www.tmlab.pl/SGC/P/EnergySE.jpg',
    categoryId: 1,
  },  {
    id: 'cbc70de2-7fc7-44f6-aad8-90e02132ae4a',
    manufacturer: 'HiSense',
    name: 'WINGS 3.5',
    price: 3750,
    description: 'Lorem ipsum dolor sit amet.',
    image_url: 'https://www.tmlab.pl/SGC/P/HWings.jpg',
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

export const newOffer = writable({
  id: null,
  products: [],
})

export const offers = writable([
  // Sample data
  {
    id: 'd730dd29-e0ce-44ab-a7f2-a871e8a5fcb3',
    shortcode: 'kowalski_425bt',
    name: 'Oferta startowa',
    client_id: '1d58843a-7730-41db-889b-1f7c9c6458d3',
    products: [{ id: '49f9284f-04f5-4d46-8a81-e67c4675a40a', quantity: 1 }],
    creation_timestamp: 1707111277000,
    modification_timestamp: 1707511418000,
  },
  {
    id: 'f8d00f44-89cb-4748-93fe-d6c7b6032247',
    shortcode: 'opara_dasff3',
    name: 'Oferta startowa',
    client_id: '77aebcac-595f-48f5-9db7-e5b1c050ead9',
    products:
      [{
        id: '49f9284f-04f5-4d46-8a81-e67c4675a40a',
        quantity: 1
      }, {
        id: '6849875a-6f08-4e37-85db-129213ab99b7',
        quantity: 1
      }],
    creation_timestamp: 1707311277000,
    modification_timestamp: 1707511418000,
  },
]);

export const clients = writable([
  {
    id: '1d58843a-7730-41db-889b-1f7c9c6458d3',
    name: "Marian",
    surname: "Kowalski",
    address: "Wspólna 6, Słupno",
    image_url: '',
  },
  {
    id: '77aebcac-595f-48f5-9db7-e5b1c050ead9',
    name: "Karol",
    surname: "Opara",
    address: "Grzybowska 85/97, Warszawa",
    image_url: '',
  },
  {
    id: '63007832-2539-452a-ab04-69ad8185d5ad',
    name: "Paweł",
    surname: "Szostek",
    address: "Lezajska 2/1, Warszawa",
    image_url: '',
  },
]);
