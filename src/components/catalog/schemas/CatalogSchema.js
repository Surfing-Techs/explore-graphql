const { buildSchema } = require('graphql');

const CatalogSchema = module.exports;

CatalogSchema.schema = buildSchema(`
input FilterInput {
  name: String
  category: String
}
type Query {
  products(filter: FilterInput): [Product],
  stores: [Store],
  product(id: Int): Product,
  store(id: Int): Store
},
type Product {
  id: Int,
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