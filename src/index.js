const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const CatalogSchema = require('./components/catalog/schemas/CatalogSchema');
const CatalogResolver = require('./components/catalog/CatalogResolver');

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: CatalogSchema.schema,
  rootValue: CatalogResolver.root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');