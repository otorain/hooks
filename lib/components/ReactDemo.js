"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("./styles/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ReactDemo = function ReactDemo() {
  var handleClick = function handleClick() {
    console.log("click!");
  };

  return /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleClick,
    className: "btn"
  }, "Hello Ian");
};

var _default = ReactDemo;
exports["default"] = _default;