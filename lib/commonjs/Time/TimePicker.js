"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
var _timeUtils = require("./timeUtils");
var _AnalogClock = _interopRequireDefault(require("./AnalogClock"));
var _TimeInputs = _interopRequireDefault(require("./TimeInputs"));
var _DisplayModeContext = require("../contexts/DisplayModeContext");
var _react = require("react");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function TimePicker({
  hours,
  minutes,
  onFocusInput,
  focused,
  inputType,
  onChange,
  locale,
  use24HourClock,
  inputFontSize
}) {
  const dimensions = (0, _reactNative.useWindowDimensions)();
  const isLandscape = dimensions.width > dimensions.height;
  const [displayMode, setDisplayMode] = (0, _react.useState)(undefined);

  // method to check whether we have 24 hours in clock or 12
  const is24Hour = (0, _react.useMemo)(() => {
    if (use24HourClock !== undefined) {
      return use24HourClock;
    }
    const formatter = new Intl.DateTimeFormat(locale, {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'UTC'
    });
    const formatted = formatter.format(new Date(Date.UTC(2020, 1, 1, 23)));
    return formatted.includes('23');
  }, [locale, use24HourClock]);

  // Initialize display Mode according the hours value
  (0, _react.useEffect)(() => {
    if (hours >= 12) {
      setDisplayMode('PM');
    } else {
      setDisplayMode('AM');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onInnerChange = (0, _react.useCallback)(params => {
    params.hours = (0, _timeUtils.toHourOutputFormat)(params.hours, hours, is24Hour);
    onChange(params);
  }, [onChange, hours, is24Hour]);
  const inputsWidth = 96 * 2 + 24 + (is24Hour || isLandscape && inputType === _timeUtils.inputTypes.picker ? 0 : 12 + 52);
  const clockWidth = inputType === _timeUtils.inputTypes.picker ? _timeUtils.circleSize + (isLandscape ? 64 : 0) : 0;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_DisplayModeContext.DisplayModeContext.Provider, {
    value: {
      mode: displayMode,
      setMode: setDisplayMode
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: isLandscape ? [styles.rootLandscape, {
        width: inputsWidth + clockWidth
      }] : styles.rootPortrait,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_TimeInputs.default, {
        inputType: inputType,
        inputFontSize: inputFontSize,
        hours: hours,
        minutes: minutes,
        is24Hour: is24Hour,
        onChange: onChange,
        onFocusInput: onFocusInput,
        focused: focused,
        locale: locale
      }), inputType === _timeUtils.inputTypes.picker ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        style: [styles.clockContainer, isLandscape && styles.clockContainerLandscape],
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_AnalogClock.default, {
          hours: (0, _timeUtils.toHourInputFormat)(hours, is24Hour),
          minutes: minutes,
          focused: focused,
          is24Hour: is24Hour,
          onChange: onInnerChange
        })
      }) : null]
    })
  });
}
const styles = _reactNative.StyleSheet.create({
  clockContainer: {
    paddingTop: 36,
    paddingLeft: 12,
    paddingRight: 12
  },
  clockContainerLandscape: {
    paddingTop: 0,
    paddingLeft: 64,
    paddingRight: 0
  },
  rootLandscape: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  rootPortrait: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});
var _default = exports.default = /*#__PURE__*/(0, _react.memo)(TimePicker);
//# sourceMappingURL=TimePicker.js.map