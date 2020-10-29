const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const CatalogSchema = require('./components/catalog/schemas/CatalogSchema');
const CatalogService = require('./components/catalog/services/ProductService');

// The root provides a resolver function for each API endpoint
var root = {
  products: ({ filter }) => {
    return CatalogService.find(filter);
  },
  product: ({ id }) => {
    return CatalogService.findById(id);
  }
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: CatalogSchema.schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');