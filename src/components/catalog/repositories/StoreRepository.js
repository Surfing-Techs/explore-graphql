var _ = require('lodash');
const StoreRepository = module.exports;

const stores = [
  { id: 1, name: 'Mercadona Gran Vía', city: 'Barcelona', enabled: true },
  { id: 2, name: 'Mercadona Arenas', city: 'Barcelona', enabled: true },
  { id: 3, name: 'Consum Urgel', city: 'Barcelona', enabled: true },
  { id: 4, name: 'Consum Gracia', city: 'Barcelona', enabled: false },
  { id: 5, name: 'Carrefour Glories', city: 'Barcelona', enabled: true },
];

StoreRepository.find = () => stores;

StoreRepository.findById = id => _.find(stores, { 'id': id });