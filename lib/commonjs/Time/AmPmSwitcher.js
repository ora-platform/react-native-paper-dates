"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AmPmSwitcher;
var _reactNative = require("react-native");
var _reactNativePaper = require("react-native-paper");
var _react = require("react");
var _timeUtils = require("./timeUtils");
var _DisplayModeContext = require("../contexts/DisplayModeContext");
var _styles = require("../shared/styles");
var _jsxRuntime = require("react/jsx-runtime");
function AmPmSwitcher({
  onChange,
  hours,
  inputType,
  direction = 'vertical'
}) {
  const theme = (0, _reactNativePaper.useTheme)();
  const {
    setMode,
    mode
  } = (0, _react.useContext)(_DisplayModeContext.DisplayModeContext);
  const backgroundColor = theme.colors.outline;
  const isHorizontal = direction === 'horizontal';
  const isAM = mode === 'AM';
  const height = isHorizontal ? 38 : inputType === _timeUtils.inputTypes.keyboard ? 72 : 80;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: [isHorizontal ? styles.rootHorizontal : styles.rootVertical,
    // eslint-disable-next-line react-native/no-inline-styles
    {
      borderColor: backgroundColor,
      borderRadius: theme.roundness * 2,
      height,
      marginBottom: !isHorizontal && inputType === _timeUtils.inputTypes.keyboard ? 16 : 0
    }],
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(SwitchButton, {
      label: "AM",
      onPress: () => {
        setMode('AM');
        if (hours - 12 >= 0) {
          onChange(hours - 12);
        }
      },
      selected: isAM,
      disabled: isAM
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
      style: [isHorizontal ? styles.separatorHorizontal : styles.separatorVertical, {
        backgroundColor
      }]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(SwitchButton, {
      label: "PM",
      onPress: () => {
        setMode('PM');
        if (hours + 12 <= 24) {
          onChange(hours + 12);
        }
      },
      selected: !isAM,
      disabled: !isAM
    })]
  });
}
function SwitchButton({
  label,
  onPress,
  selected,
  disabled
}) {
  const theme = (0, _reactNativePaper.useTheme)();
  const {
    backgroundColor,
    color
  } = (0, _timeUtils.useSwitchColors)(selected);
  const textFont = theme.fonts.titleMedium;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativePaper.TouchableRipple, {
    onPress: onPress,
    style: _styles.sharedStyles.root,
    accessibilityLabel: label
    // @ts-ignore old React Native versions
    ,
    accessibilityTraits: disabled ? ['button', 'disabled'] : 'button'
    // @ts-ignore old React Native versions
    ,
    accessibilityComponentType: "button",
    accessibilityRole: "button",
    accessibilityState: {
      disabled
    },
    disabled: disabled,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
      style: [styles.switchButtonInner, {
        backgroundColor
      }],
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativePaper.Text, {
        maxFontSizeMultiplier: 1.5,
        selectable: false,
        style: [{
          ...textFont,
          color: color
        }],
        children: label
      })
    })
  });
}
const styles = _reactNative.StyleSheet.create({
  rootVertical: {
    width: 52,
    borderWidth: 1,
    overflow: 'hidden'
  },
  rootHorizontal: {
    width: 216,
    flexDirection: 'row',
    borderWidth: 1,
    overflow: 'hidden'
  },
  separatorVertical: {
    height: 1,
    width: 52
  },
  separatorHorizontal: {
    width: 1,
    alignSelf: 'stretch'
  },
  switchButtonInner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
//# sourceMappingURL=AmPmSwitcher.js.map