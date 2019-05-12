import express from 'express';
import router from './api/router';

const app = express();

const allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};

app.use(allowCrossDomain);
app.use(router);
app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});