const express = require('express');
const { resolve } = require('path');
const app = express()
const port = 3001
const exec = require('child_process').exec;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/autocomplete/:word', (req, res) => {

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