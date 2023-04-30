"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _router = require("next/router");
function MyComponent() {
  var router = (0, _router.useRouter)();

  // Use router here...

  return /*#__PURE__*/React.createElement("div", null, router.asPath);
}
var _default = MyComponent;
exports["default"] = _default;