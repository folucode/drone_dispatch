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

app.set('port', process.env.PORT);
app.listen(app.get('port'), () => {
  console.log(`app server running on PORT ${app.get('port')}`);
});

module.exports = app;
