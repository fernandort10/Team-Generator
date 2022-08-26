const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/testapp'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/testapp'}),
);

app.listen(process.env.PORT || 8080);