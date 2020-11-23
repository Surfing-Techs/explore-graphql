const { buildSchema } = require('graphql');

const CatalogSchema = module.exports;

CatalogSchema.schema = buildSchema(`
input FilterInput {
  name: String
  category: String
}
input CreateProductInput {
  name: String!
  description: String
  category: String
  brand: String
}
input CreateStoreInput {
  name: String!
}
type Query {
  products(filter: FilterInput, limit: Int, offset: Int): [Product],
  stores: [Store],
  product(id: String): Product,
  store(id: Int): Store
},
type Mutation {
  createProduct(
    name: String!,
    description: String,
    category: String,
    brand: String
  ): Product
},
type Product {
  id: String,
  name: String,
  description: String,
  category: String,
  brand: String
},
type Store {
  id: Int,
  name: String,
  address: String,
  city: String,
  enabled: Boolean,
}
`);
