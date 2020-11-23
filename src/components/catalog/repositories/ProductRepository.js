const _ = require('lodash');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const CommonRepository = require('./CommonRepository');

const productsFilePath = path.join(__dirname, '..', 'data', 'products.json');

const ProductRepository = module.exports;

ProductRepository.find = async (filter = {}, limit = 20, offset = 0) => {
  const filteredProducts = _.filter(await CommonRepository.loadData(productsFilePath), filter);

  return _.drop(filteredProducts, offset).slice(0, limit);
};

ProductRepository.findById = async (id) => {
  const products = await CommonRepository.loadData(productsFilePath);
  return _.find(products, (o) =>
    o.id === id);
};

ProductRepository.create = async (product) => {
  const products = await CommonRepository.loadData(productsFilePath);
  _.set(product, 'id', uuidv4());
  products.push(product);
  CommonRepository.writeData(productsFilePath, products);

  return product;
};
