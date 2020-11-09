const ProductRepository = require('../repositories/ProductRepository');

const ProductService = module.exports;

ProductService.find = (filter, limit, offset) =>
  ProductRepository.find(filter, limit, offset);

ProductService.findById = (id = 0) =>
  ProductRepository.findById(id);
