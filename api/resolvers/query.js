const _ = require("lodash");

module.exports = {
  categories: (parent, args, { dataSources }, info) => {
    const allCategories = dataSources.categoryDataSource.getCategories(args);
    return allCategories;
  },
  categoryById: (parent, { id }, { dataSources }, info) => {
    const allCategories = dataSources.categoryDataSource.getCategoryById(id);
    return allCategories;
  },
  products: async (parent, args, { dataSources }, info) => {
    const allProducts = await dataSources.productDataSource.getProducts(args);
    return allProducts;
  },
  productById: async (parent, { id }, { dataSources }, info) => {
    const product = await dataSources.productDataSource.getProductById(id);
    return product;
  }
};
