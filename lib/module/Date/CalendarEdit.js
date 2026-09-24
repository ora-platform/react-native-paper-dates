"use strict";

import { Keyboard, StyleSheet, View } from 'react-native';
import DatePickerInputWithoutModal from './DatePickerInputWithoutModal';
import { memo, useCallback, useEffect, useRef } from 'react';
import { useTheme } from 'react-native-paper';
import { sharedStyles } from '../shared/styles';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function CalendarEdit({
  mode,
  state,
  label = '',
  startLabel = 'Start',
  endLabel = 'End',
  collapsed,
  onChange,
  validRange,
  locale,
  inputEnabled,
  withDateFormatInLabel,
  placeholder
}) {
  const theme = useTheme();
  const dateInput = useRef(null);
  const startInput = useRef(null);
  const endInput = useRef(null);
  const inputStyle = {
    backgroundColor: theme.colors.elevation.level3
  };

  // when switching views focus, or un-focus text input
  useEffect(() => {
    // hide open keyboard
    if (collapsed) {
      Keyboard.dismiss();
    }
    const inputsToFocus = [dateInput.current, startInput.current].filter(n => n);
    const inputsToBlur = [dateInput.current, startInput.current, endInput.current].filter(n => n);
    if (collapsed) {
      inputsToBlur.forEach(ip => ip.blur());
    } else {
      inputsToFocus.forEach(ip => ip.focus());
    }
  }, [mode, startInput, endInput, dateInput, collapsed]);
  const onSubmitStartInput = useCallback(() => {
    if (endInput.current) {
      endInput.current.focus();
    }
  }, [endInput]);
  const onSubmitEndInput = useCallback(() => {
    // TODO: close modal and persist range
  }, []);
  const onSubmitInput = useCallback(() => {
    // TODO: close modal and persist range
  }, []);
  return /*#__PURE__*/_jsxs(View, {
    style: styles.root,
    children: [mode === 'single' ? /*#__PURE__*/_jsx(DatePickerInputWithoutModal, {
      inputMode: "start",
      ref: dateInput,
      mode: "outlined",
      label: label,
      value: state.date,
      onChange: date => onChange({
        ...state,
        date
      }),
      onSubmitEditing: onSubmitInput,
      validRange: validRange,
      locale: locale,
      withModal: false,
      autoComplete: 'off',
      inputEnabled: inputEnabled,
      withDateFormatInLabel: withDateFormatInLabel,
      placeholder: placeholder,
      style: inputStyle
    }) : null, mode === 'range' ? /*#__PURE__*/_jsxs(View, {
      style: sharedStyles.flexDirectionRow,
      children: [/*#__PURE__*/_jsx(View, {
        style: sharedStyles.root,
        children: /*#__PURE__*/_jsx(DatePickerInputWithoutModal, {
          inputMode: "start",
          ref: startInput,
          mode: "outlined",
          label: startLabel,
          value: state.startDate,
          onChange: startDate => onChange({
            ...state,
            startDate
          }),
          returnKeyType: 'next',
          onSubmitEditing: onSubmitStartInput,
          validRange: validRange,
          locale: locale,
          withModal: false,
          autoComplete: 'off',
          inputEnabled: inputEnabled,
          withDateFormatInLabel: withDateFormatInLabel,
          placeholder: placeholder,
          style: inputStyle
        })
      }), /*#__PURE__*/_jsx(View, {
        style: styles.separator
      }), /*#__PURE__*/_jsx(View, {
        style: sharedStyles.root,
        children: /*#__PURE__*/_jsx(DatePickerInputWithoutModal, {
          inputMode: "end",
          ref: endInput,
          mode: "outlined",
          label: endLabel,
          value: state.endDate,
          onChange: endDate => onChange({
            ...state,
            endDate
          }),
          onSubmitEditing: onSubmitEndInput,
          validRange: validRange,
          locale: locale,
          withModal: false,
          autoComplete: "off",
          inputEnabled: inputEnabled,
          withDateFormatInLabel: withDateFormatInLabel,
          placeholder: placeholder,
          style: inputStyle
        })
      })]
    }) : null]
  });
}
const styles = StyleSheet.create({
  root: {
    padding: 12
  },
  separator: {
    width: 12
  }
});
export default /*#__PURE__*/memo(CalendarEdit);
//# sourceMappingURL=CalendarEdit.js.map