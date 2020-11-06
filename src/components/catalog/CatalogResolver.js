const ProductService = require('./services/ProductService');
const StoreService = require('./services/StoreService');

const CatalogResolver = module.exports;

// The root provides a resolver function for each API endpoint
CatalogResolver.root = {
  products: ({ filter }) =>
    ProductService.find(filter),
  product: ({ id }) =>
    ProductService.findById(id),
  stores: () =>
    StoreService.find(),
  store: ({ id }) =>
    StoreService.findById(id),
};
