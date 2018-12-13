require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT;
const cors = require('cors');
const { dataDocs } = require('./doc_json');
const routerIndex = require('./routes/r_index');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/kemodijakartadb', { useFindAndModify: false , useNewUrlParser: true })
  .then(() => {
    console.log('Database connected');
  })
  .catch((err) => {
    console.log('Not connected');
  })

const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
  res.status(200).json({
    msg: 'Hello World !',
    data: dataDocs
  });
});

app.use('/api', routerIndex);

app.listen(PORT, () => {
  console.log('App listen on PORT ', PORT);
})