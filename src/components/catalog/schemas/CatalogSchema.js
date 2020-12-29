const { buildSchema } = require('graphql');

const CatalogSchema = module.exports;

CatalogSchema.schema = buildSchema(`
input FilterInput {
  name: String,
  gender: String,
  company: String
},
type Query {
  users(filter: FilterInput, limit: Int, offset: Int): [User],
  user(id: String): User
},
type Mutation {
  createUser(
    name: String!,
    gender: String,
    company: String,
    email: String
  ): User,
  deleteUser(id: String!): String
}
type User {
  id: String,
  name: String,
  gender: String,
  company: String,
  email: String,
  friends: [Person]
},
type Person {
  id: Int,
  name: String,
  gender: String
}
`);
