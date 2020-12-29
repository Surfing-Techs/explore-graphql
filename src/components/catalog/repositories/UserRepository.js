const _ = require('lodash');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const CommonRepository = require('./CommonRepository');

const filePath = path.join(__dirname, '..', 'data', 'users.json');

const UserRepository = module.exports;

UserRepository.find = async (filter = {}, limit = 20, offset = 0) => {
  const filteredUsers = _.filter(await CommonRepository.loadData(filePath), filter);

  return _.drop(filteredUsers, offset).slice(0, limit);
};

UserRepository.findById = async (id) => {
  const users = await CommonRepository.loadData(filePath);
  return _.find(users, (o) =>
    o.id === id);
};

UserRepository.create = async (user) => {
  const users = await CommonRepository.loadData(filePath);
  _.set(user, 'id', uuidv4());
  users.push(user);
  CommonRepository.writeData(filePath, users);

  return user;
};

UserRepository.delete = async ({ id }) => {
  if (!id) return 'Invalid ID value.';

  const users = await CommonRepository.loadData(filePath);
  const usersToSave = _.remove(users, (n) =>
    n.id !== id);
  CommonRepository.writeData(filePath, usersToSave);

  return `User #${id} deleted.`;
};
