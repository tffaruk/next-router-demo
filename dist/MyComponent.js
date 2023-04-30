"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _router = require("next/router");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function MyComponent() {
  var router = (0, _router.useRouter)();

  // Use router here...

  return /*#__PURE__*/_react["default"].createElement("div", null, router.asPath);
}
var _default = MyComponent;
exports["default"] = _default;