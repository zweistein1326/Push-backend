const { MongoClient } = require('mongodb');
 
const uri = "mongodb+srv://zweistein1326:Wasistdenlos1310@cluster0.q97tw.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri);
let database = null;

try {
    client.connect();
    database = client.db('The_Pushup_Challenge')
}
catch (e) {
    console.log(e)
}
finally {
    client.close();
}

module.exports = { database }