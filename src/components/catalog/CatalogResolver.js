const ProductService = require('./services/ProductService');
const StoreService = require('./services/StoreService');

const CatalogResolver = module.exports;

// The root provides a resolver function for each API endpoint
CatalogResolver.root = {

  // Queries
  products: ({ filter, limit, offset }) =>
    ProductService.find(filter, limit, offset),
  product: ({ id }) =>
    ProductService.findById(id),
  stores: () =>
    StoreService.find(),
  store: ({ id }) =>
    StoreService.findById(id),

  // Mutations
  createProduct: (product) =>
    ProductService.create(product),

};
