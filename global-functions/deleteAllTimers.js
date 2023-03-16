import React from 'react';

const deleteAllTimers = setGlobalVariableValue => {
  setGlobalVariableValue({ key: 'timers', value: [] });
};

export default deleteAllTimers;
