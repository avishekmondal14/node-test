const express = require('express');

const route = require('./routes/route');

const app = express();

app.use(route);

app.listen(process.env.PORT || 3000);