# explore-graphql

//// WORK IN PROGRESS ////

### Project local setup
- Clone the project
- Run `npm i`
- Run `npm run start` to start the app.
- Navigate to [http://localhost:4000/graphql](http://localhost:4000/graphql) and have fun!

Graphql query example:
```
{
  products(filter: {category: "Beberage"}) {
    name,
    category
  },
  pp2: product(id: 2) {
    id,
    name,
    category
  },
  pp4: product(id: 4) {
    name,
  }
}

```

### Project creation steps
mkdir myapp
cd myapp
npm init
npm install express --save
npm install --save graphql
npm install --save express-graphql

