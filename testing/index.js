const express = require('express');
const app = express();
const port = 5000;

app.use(express.json())

app.listen(port, ()=>{
console.log(`Listening on port : ${port}`)
});

app.get('/', (req,res)=>{
res.send('well well, request is successful')
})
