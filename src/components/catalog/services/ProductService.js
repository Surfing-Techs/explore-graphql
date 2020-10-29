const ProductRepository = require('./../repositories/ProductRepository')

const ProductService = module.exports;

ProductService.find = filter => {
  return ProductRepository.find(filter);
};

ProductService.findById = (id = 0) => {
  return ProductRepository.findById(id);
};