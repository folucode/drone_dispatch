const express = require('express');
const db = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./config/routes');

const app = express();

db();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/v1/', routes);

app.use((req, res) => {
  return res.status(404).json({ success: false, message: 'Not found' });
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port", this.address().port);
});

module.exports = app;
