"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DatePickerModalHeaderBackground;
var _reactNative = require("react-native");
var _reactNativePaper = require("react-native-paper");
var _utils = require("../shared/utils");
var _reactNativeSafeAreaContext = require("react-native-safe-area-context");
var _jsxRuntime = require("react/jsx-runtime");
function DatePickerModalHeaderBackground({
  children
}) {
  const backgroundColor = (0, _utils.useHeaderBackgroundColor)();
  const insets = (0, _reactNativeSafeAreaContext.useSafeAreaInsets)();
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.Animated.View, {
    style: {
      backgroundColor,
      paddingLeft: insets.left,
      paddingRight: insets.right
    },
    children: [children, /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativePaper.Divider, {})]
  });
}
//# sourceMappingURL=DatePickerModalHeaderBackground.js.map