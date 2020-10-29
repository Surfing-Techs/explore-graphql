var _ = require('lodash');
const ProductRepository = module.exports;

const products = [
  { id: 1, name: 'Coca Cola', description: 'Coca Cola 500cc', category: 'Beberage', brand: 'Coca Cola' },
  { id: 2, name: 'Coca Cola Zero', description: 'Coca Cola Zero 1000cc', category: 'Beberage', brand: 'Coca Cola' },
  { id: 3, name: 'Oreo', description: 'Oreo Cookies', category: 'Cookies', brand: 'Bagley' },
  { id: 4, name: 'Heinneken beer', description: 'Heinneken Beer, can 350cc', category: 'Alcoholic Beberage', brand: 'Heinneken' },
];

ProductRepository.find = (filter = {}) => _.filter(products, filter);

ProductRepository.findById = id => _.find(products, function(o) { return o.id === id; });