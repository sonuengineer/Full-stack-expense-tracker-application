const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const sequelize = require('./util/database');
const routes = require('./routes/router');

const app = express();

app.use(cors()); 
app.use(bodyParser.json());
app.use(routes);

sequelize.sync()
.then(result => {
    app.listen(3000);
})
.catch(err => console.log(err));




