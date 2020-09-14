const express = require('express');
const { resolve } = require('path');
const app = express()
const port = 3001
const exec = require('child_process').exec;
const cors = require('cors'); // to allow cross access origin policy

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/autocomplete/', (req, res) => {
    // null response
    res.send([]);
})

app.get('/autocomplete/:word', (req, res) => {

    // utilizing grep as a fast function that can limit its output
    // modify the `-m` flag to change the length of the return list
    exec(('grep -m 10 ^' + String(req.params.word) + ' ./res/words.txt'), (err, stdout, stderr) => {
        if (err) { console.log(err); }
        else {
            res.send((stdout ? stdout : stderr).split('\n'));
        }
    });
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})