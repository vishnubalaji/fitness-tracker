require('../loadEnvironment')

console.log("Connecting to MongoDB...")
const {MongoClient} = require('mongodb')
const passwd = process.env.MONGO_PASSWD
const uri = `mongodb+srv://vishnubalaji:${passwd}@fitness-tracker-cluster.jbb1p4e.mongodb.net/?retryWrites=true&w=majority`
const client = new MongoClient(uri)
client.connect()
console.log("Connected")
let db = client.db('fitness-tracker-test')

module.exports = {db};