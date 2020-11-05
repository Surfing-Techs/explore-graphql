const ProductRepository = require('../repositories/ProductRepository');

const ProductService = module.exports;

ProductService.find = (filter) =>
  ProductRepository.find(filter);

ProductService.findById = (id = 0) =>
  ProductRepository.findById(id);
