const { DataSource } = require("apollo-datasource");
const lodashId = require("lodash-id");

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("./data/categories.json");
const db = low(adapter);
db._.mixin(lodashId);

class CategoryDataSource extends DataSource {
    constructor() {
        super();
    }

    initialize(config) {
        this.db = db.get("categories");
    }

    getCategories(args) {
        return this.db.filter(args).value();
    }

    getCategoryById(id) {
        return this.db.getById(id).value();
    }
}

module.exports = CategoryDataSource;
