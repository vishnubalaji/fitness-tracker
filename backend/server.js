const express = require('express'); 
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config()

const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

// Bringing up Express app
const app = express();
app.use(cors())
app.use(express.json())

console.log("Express Backend is up and running...")

// Connecting to MongoDB Atlas
mongoose.set('strictQuery', true)
mongoose.connect(uri, {useNewUrlParser: true});
const connection = mongoose.connection
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

app.listen(port, ()=>{
    console.log(`listening on ${port}`)
})

app.get('/', (req, res) => {
    res.send(`Welcome to the Express home page<br>
    Routes included are, /users and /exercises`)
    
})

// const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

// app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);