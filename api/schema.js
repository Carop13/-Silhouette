const { gql } = require("apollo-server");

module.exports = gql`
  type Product {
    id: ID!
    name: String
    description: String
    shortDescription: String
    price: String
    image: String
    categories: [Category]
  }

  type Category {
    id: ID!
    title: String!
    description: String
    products: [Product]
  }

  type Query {
    categories(
      id: ID
      title: String
      description: String
    ): [Category]
    categoryById(id: ID): Category
    products: [Product]
    productById(id: ID): Product
  }
`;
