const _ = require("lodash");

module.exports = {
  async products(category, args, { dataSources }) {
    const products = await dataSources.productDataSource.getProducts(args);

    const returns = products.filter((product) => {
      return _.filter(category.products, { id: product.id }).length > 0;
    });

    return returns;
  },
};
