require("dotenv").config();
const { ApolloServer } = require("apollo-server-express");
const CategoryDataSource = require("./datasources/categories");
const ProductDataSource = require("./datasources/products");

const typeDefs = require("./schema.js");
const resolvers = require("./resolvers/index");
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();

const dataSources = () => ({
  categoryDataSource: new CategoryDataSource(),
  productDataSource: new ProductDataSource(),
});

app.use(cookieParser());

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources
});

server.applyMiddleware({ app });

app.listen(process.env.PORT || 4000, () => {
  console.log(`graphQL running at port 4000`);
});
