const express = require('express');
require('dotenv').config();

const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const authJwt = require('./helpers/jwt');
const errorHandler = require('./helpers/error-handler');

const port = process.env.PORT;
const host = process.env.HOST;

app.use(express.json());
app.use(cors());
app.options('*', cors());
app.use(authJwt());

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
app.use(morgan('tiny'));

app.use('/public/uploads', express.static(__dirname + '/public/uploads'));
app.use(errorHandler);

const categoriesRoute = require('./routes/categories');
const productRoute = require('./routes/products');
const userRoute = require('./routes/users');
const orderRoute = require('./routes/orders');

app.use('/products', productRoute);
app.use('/categories', categoriesRoute);
app.use('/users', userRoute);
app.use('/orders', orderRoute);

app.listen(port, host, () => {
  console.log(`server berjalan di http://${host}:${port}`);
});

// Connecting to the database
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(() => {
  console.log("Successfully connected to the database");
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});
