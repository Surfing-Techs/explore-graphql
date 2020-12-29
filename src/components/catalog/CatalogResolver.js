const UserService = require('./services/UserService');

const CatalogResolver = module.exports;

// The root provides a resolver function for each API endpoint
CatalogResolver.root = {

  // Queries
  users: ({ filter, limit, offset }) =>
    UserService.find(filter, limit, offset),
  user: ({ id }) =>
    UserService.findById(id),

  // Mutations
  createUser: (user) =>
    UserService.create(user),
  deleteUser: (id) =>
    UserService.delete(id),
};
