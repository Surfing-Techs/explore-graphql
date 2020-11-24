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
  NewYorkTimes: product(id: "709bc9d0-453d-4aa1-87b2-a72e622f8387") {
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

mutation createProduct {
  createProduct(name: "El País", category: "Newspapers") {
    ...baseProductsFields
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

