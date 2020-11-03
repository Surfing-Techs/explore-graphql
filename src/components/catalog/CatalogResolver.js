const ProductService = require('./services/ProductService');
const StoreService = require('./services/StoreService');

const CatalogResolver = module.exports;

// The root provides a resolver function for each API endpoint
CatalogResolver.root = {
  products: ({ filter }) => {
    return ProductService.find(filter);
  },
  product: ({ id }) => {
    return ProductService.findById(id);
  },
  stores: () => StoreService.find(),
  store: ({ id }) => StoreService.findById(id)
};