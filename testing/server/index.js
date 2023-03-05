// Loads environment variables --> Done
require('./loadEnvironment')

const express = require('express');
const app = express();
const port = process.env.PORT;
var {db} = require('./db/conn.js')

app.use(express.json())

// Listening on port 8080 --> Working fine
app.listen(port, ()=>{
console.log(`Listening on port : ${port}`)
});

// Just to verify if the app is running --> Listening and responding
app.get('/', (req,res)=>{
res.send('well well, Express is alive and request is successful')
})

// CRUD operation on MongoDB Atlas
// create collection --> Done
app.post('/create/collection', (req,res)=>{
    let {collection_name} = req.body
    db.createCollection(collection_name)
    res.sendStatus(200)
})
// insert document --> Done
app.post('/insert/document', (req,res)=>{
    let {collection_name, document} = req.body
    db.collection(collection_name).insertOne(document)
    res.sendStatus(200)
})
// read one document --> Done
app.get('/read/document', (req,res)=>{
    let {collection_name, document} = req.body
    db.collection(collection_name).findOne(document).then((result)=>{
        if(result){
            res.status(200).send(result)
            res.end()
        }
        else{
            res.sendStatus(500)
            res.end()
        }
    })
    
})
// update document --> Done
app.put('/update/document', (req,res)=>{
    let {collection_name, query, update} = req.body
    update = {$set: update}
    db.collection(collection_name).updateOne(query, update).then((result)=>{
        if(result){
            res.status(200).send("Updated successfully")
            res.end()
        }
        else{
            res.sendStatus(500)
            res.end()
        }
    })
})
// delete document--> Done
app.delete('/delete/document', (req,res)=>{
    let {collection_name, query} = req.body
    db.collection(collection_name).deleteOne(query).then((result)=>{
        if(result){
            res.status(200).send("Deleted successfully")
            res.end()
        }
        else{
            res.sendStatus(500)
            res.end()
        }
    })
})
// drop collection--> Done
app.delete('/drop/collection', (req,res)=>{
    let {collection_name} = req.body
    db.collection(collection_name).drop().then((result)=>{
        if(result){
            res.status(200).send("Dropped successfully")
            res.end()
        }
        else{
            res.sendStatus(500)
            res.end()
        }
    })
})