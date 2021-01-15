const { DataSource } = require("apollo-datasource");
const lodashId = require("lodash-id");

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const { groupBy } = require("lodash");

const adapter = new FileSync("./data/products.json");
const db = low(adapter);
db._.mixin(lodashId);

class ProductDataSource extends DataSource {
    constructor() {
        super();
    }

    initialize(config) {
        this.db = db;
    }

    async getProductById(id) {
        return this.db.get("products").getById(id).value();
    }

    async getProducts(args) {
        const data = this.db.get("products").filter(args).value();
        return data;
    }
}

module.exports = ProductDataSource;
