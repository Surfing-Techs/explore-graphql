const UserRepository = require('../repositories/UserRepository');

const UserService = module.exports;

UserService.find = (filter, limit, offset) =>
  UserRepository.find(filter, limit, offset);

UserService.findById = (id = 0) =>
  UserRepository.findById(id);

UserService.create = (user) =>
  UserRepository.create(user);

UserService.delete = (id) =>
  UserRepository.delete(id);
