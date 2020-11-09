# explore-graphql

//// WORK IN PROGRESS ////

### Project local setup
- Clone the project
- Run `npm i`
- Run `npm run start` to start the app.
- Navigate to [http://localhost:4000/graphql](http://localhost:4000/graphql) and have fun!

Graphql query example:
```
query Products {

  # This is a query by product ID
  p5001: product(id: 5001) {
    ...baseProductsFields,
    description
  },

  # Product list with Pagination!
  products(filter: {category: "Newspapers"}, limit: 15, offset: 0) {
    ...baseProductsFields
  }

}

query Stores {

  # Store list!
  stores {
    name
  }
  
}

# Fragment of Product, to reduce repeated selections of fields
fragment baseProductsFields on Product {
  id,
  name,
  category
}
```

### Project creation steps
mkdir myapp  
cd myapp  
npm init  
npm install express --save  
npm install --save graphql  
npm install --save express-graphql  

