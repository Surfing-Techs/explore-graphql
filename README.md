# explore-graphql

//// WORK IN PROGRESS ////

### Project local setup
- Clone the project
- Run `npm i`
- Run `npm run start` to start the app.
- Navigate to [http://localhost:4000/graphql](http://localhost:4000/graphql) and have fun!

Graphql query example:
```
query Users {
  # This is a query by user ID
  Aurora: user(id: "f02f4f3b-b295-4940-9b1e-027fdc6b6646") {
    ...baseUsersFields,
    #friends { name, gender }
  },
  Martin: user(id: "cdd81605-c758-41df-9fe7-bd44000f3592") {
    ...baseUsersFields
  },
  
  # User list with Pagination!
  users(filter: {gender: "female"}, limit: 5, offset: 0) {
    ...baseUsersFields,
    company,
    gender,
    email
  }
}

mutation createUser {
  createUser(name: "Matias Agüero", gender: "male") {
    ...baseUsersFields,

  }
}

# Fragment of Product, to reduce repeated selections of fields
fragment baseUsersFields on User {
  id,
  name
}
```

### Project creation steps
mkdir myapp  
cd myapp  
npm init  
npm install express --save  
npm install --save graphql  
npm install --save express-graphql  

