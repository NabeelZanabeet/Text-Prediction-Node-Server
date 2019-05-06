import express from 'express';
import router from './api/router';

const app = express();
app.use(router);

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});