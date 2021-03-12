const path = require('product');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const Routes = require('./src/routes/routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',Routes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'view', '404.html'));
});

app.listen(3000);