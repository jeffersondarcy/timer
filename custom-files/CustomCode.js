// Compiled from CustomCode.ts

const _jsxFileName = '';
import React, { useEffect, useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Touchable } from '@draftbit/ui';

import * as GlobalVariableContext from '../config/GlobalVariableContext';

export const Timer = ({ start }) => {
  const [duration, setDuration] = useState(getMiliSeconds(start));
  useEffect(() => {
    const interval = setInterval(() => {
      setDuration(getMiliSeconds(start));
    }, 1);
    return () => clearInterval(interval);
  });
  return React.createElement(
    Text,
    { __self: this, __source: { fileName: _jsxFileName, lineNumber: 19 } },
    getFormatedDuration(duration)
  );
};

const getMiliSeconds = timestamp => new Date().getTime() - timestamp;

const getFormatedDuration = durationInMilliseconds => {
  const date = new Date(durationInMilliseconds);
  const hours = String(date.getUTCHours()).padStart(2, '0');
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  const seconds = String(date.getUTCSeconds()).padStart(2, '0');
  const milliseconds = String(date.getUTCMilliseconds()).padStart(3, '0');
  return `${hours}:${minutes}:${seconds}:${milliseconds}`;
};

export const ShowContext = () => {
  const variables = GlobalVariableContext.useValues();
  return React.createElement(
    Text,
    { __self: this, __source: { fileName: _jsxFileName, lineNumber: 35 } },
    JSON.stringify(variables)
  );
};

const getNewTimers = timers => {
  const newTimer = { start: new Date().getTime() };
  if (typeof timers === 'undefined' || timers === null) return [newTimer];

  return [...timers, newTimer];
};
export const CreateNewTimer = ({ children }) => {
  console.log(children);
  const { timers } = GlobalVariableContext.useValues();
  const setGlobalVariable = GlobalVariableContext.useSetValue();

  const handlePress = () => {
    setGlobalVariable({ key: 'timers', value: getNewTimers(timers) });
  };

  //return <View>{children}</View>
  return React.createElement(
    Touchable,
    {
      onPress: handlePress,
      __self: this,
      __source: { fileName: _jsxFileName, lineNumber: 54 },
    },
    children
  );
  //return <Touchable onClick={handleClick}>{children}</Touchable>
  //return <Touchable onPress={handlePress}><Text>{JSON.stringify(children)}</Text></Touchable>
};

const styles = StyleSheet.create({
  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.5,
  },
});
