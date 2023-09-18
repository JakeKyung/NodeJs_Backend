const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://cokolavel:password@cluster0.8q6z1wt.mongodb.net/board";

module.exports = function (callback) {
    return MongoClient.connect(uri, callback)
}