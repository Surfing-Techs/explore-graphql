const StoreRepository = require('./../repositories/StoreRepository')

const StoreService = module.exports;

StoreService.find = () => StoreRepository.find();

StoreService.findById = id => StoreRepository.findById(id);