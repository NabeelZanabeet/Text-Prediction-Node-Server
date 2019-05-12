'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _router = require('./api/router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var allowCrossDomain = function allowCrossDomain(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};

app.use(allowCrossDomain);
app.use(_router2.default);
app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});
//# sourceMappingURL=index.js.map