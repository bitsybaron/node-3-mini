require('dotenv').config();
const express = require("express");
const massive = require('massive');

const app = express();
const ctrl = require('./controller')

const { SERVER_PORT, CONNECTION_STRING } = process.env;
massive({
  connectionString:  CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false
  }
}).then(db => {
  app.set("db", db)
  console.log('db connected')
}).catch(err => console.log(err));
app.use(express.json());

app.get('/api/airplanes', ctrl.getAirplanes)
app.get('/api/airplane/:plane_id', ctrl.getAirplaneById)
app.post('/api/airplane', ctrl.addAirplane)

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}`);
});

