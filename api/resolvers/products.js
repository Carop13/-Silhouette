const _ = require("lodash");

module.exports = {
  async categories(product, args, { dataSources }) {
    const categories = await dataSources.categoryDataSource.getCategories();

    const returns = categories.filter((category) => {
      return _.filter(product.categories, { id: category.id }).length > 0;
    });

    return returns;
  },
};


