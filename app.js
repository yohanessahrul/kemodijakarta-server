require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT;
const { dataDocs } = require('./doc_json')

const routerIndex = require('./routes/r_index');


const app = express();

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
  console.log('App listen on PORT ', PORT)
})