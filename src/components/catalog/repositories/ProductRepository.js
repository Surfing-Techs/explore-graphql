const _ = require('lodash');
const products = require('../data/products.json');

const ProductRepository = module.exports;

ProductRepository.find = (filter = {}, limit = 20, offset = 0) => {
  const filteredProducts = _.filter(products, filter);

  return _.drop(filteredProducts, offset).slice(0, limit);
};

ProductRepository.findById = (id) =>
  _.find(products, (o) =>
    o.id === id);
