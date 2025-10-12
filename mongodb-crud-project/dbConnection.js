const { MongoClient } = require('mongodb');

let dbConectionURL = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(dbConectionURL);


let dbConnection = async() => {
   await client.connect();
   let db = client.db("mongoDB_crud");
   return db
}

module.exports = { dbConnection }