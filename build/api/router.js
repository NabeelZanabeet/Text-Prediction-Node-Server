'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _controller = require('./controller');

var _controller2 = _interopRequireDefault(_controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/api/:text/:cursorPosition/:lineNum', _controller2.default.mainResponse);
router.get('/', _controller2.default.mainPage);

exports.default = router;
//# sourceMappingURL=router.js.map