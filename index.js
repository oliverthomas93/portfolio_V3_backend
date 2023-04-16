import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import * as dotenv from 'dotenv'
dotenv.config();
var app = express();
var port = process.env.PORT || 3030;

const url = 'https://api.github.com/user/starred';

app.use(cors({
    origin: 'http://localhost:5173' 
}));

app.get('/getrepos', async function (req,res) {
    
    fetch(url, {
        headers: {'Authorization': process.env.BEARER_TOKEN}
    })
    .then(res => res.json())
    .then(data =>{
        res.send(data)
    })

    console.log(`Request from ${req.hostname}`)
} )

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
