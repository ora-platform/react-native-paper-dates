"use strict";

import { Animated } from 'react-native';
import { Divider } from 'react-native-paper';
import { useHeaderBackgroundColor } from '../shared/utils';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function DatePickerModalHeaderBackground({
  children
}) {
  const backgroundColor = useHeaderBackgroundColor();
  const insets = useSafeAreaInsets();
  return /*#__PURE__*/_jsxs(Animated.View, {
    style: {
      backgroundColor,
      paddingLeft: insets.left,
      paddingRight: insets.right
    },
    children: [children, /*#__PURE__*/_jsx(Divider, {})]
  });
}
//# sourceMappingURL=DatePickerModalHeaderBackground.js.map