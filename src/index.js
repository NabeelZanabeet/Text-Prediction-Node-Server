import express from 'express';
import router from './api/router';

const app = express();
const PORT = process.env.PORT || 8000

const allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};

app.use(allowCrossDomain);
app.use(router);

app.get('/h', (req, res) => {
  res.status(200).json({ message: 'Welcome to Node.js & Express' });
});

app.listen(PORT, () => {
  console.log('Example app listening on port 8000!')
});