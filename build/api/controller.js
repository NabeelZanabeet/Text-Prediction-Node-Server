'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Data = require('../../db/Data.json');

var _Data2 = _interopRequireDefault(_Data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var findClosest = function findClosest(cursor, elements, orderedArray) {
  if (elements.length === 0) {
    return orderedArray;
  }
  var closestNum = elements.reduce(function (prev, curr) {
    return Math.abs(curr.position - cursor) < Math.abs(prev.position - cursor) ? curr : prev;
  });
  var filtered = elements.filter(function (el) {
    return el !== closestNum;
  });
  orderedArray.push(closestNum);
  return findClosest(cursor, filtered, orderedArray);
};

var PredictionController = function () {
  function PredictionController() {
    _classCallCheck(this, PredictionController);
  }

  _createClass(PredictionController, [{
    key: 'mainPage',
    value: function mainPage(req, res) {
      res.send('hello');
    }
  }, {
    key: 'mainResponse',
    value: function mainResponse(req, res) {
      var text = req.params.text;
      var cursorPosition = req.params.cursorPosition;
      var lineNum = req.params.lineNum;
      var hints = _Data2.default.data[text];
      if (hints) {
        var orderedArray = [];
        hints = findClosest(cursorPosition * lineNum, hints, orderedArray);
        res.send(hints);
      } else {
        res.send('false');
      }
    }
  }]);

  return PredictionController;
}();

var predictionController = new PredictionController();
exports.default = predictionController;
//# sourceMappingURL=controller.js.map