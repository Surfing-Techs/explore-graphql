const _ = require('lodash');
const stores = require('../data/stores.json');

const StoreRepository = module.exports;

StoreRepository.find = () =>
  stores;

StoreRepository.findById = (id) =>
  _.find(stores, { id });
