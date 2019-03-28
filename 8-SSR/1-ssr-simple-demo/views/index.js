"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.html = void 0;

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _App = _interopRequireDefault(require("./components/App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var html = (0, _server.renderToString)(_react.default.createElement(_App.default, null));
exports.html = html;