import React from 'react';

const addNewTimer = (Variables, setGlobalVariableValue) => {
  const newTimers = Variables?.timers || [];
  setGlobalVariableValue({
    key: 'timers',
    value: [
      ...newTimers,
      {
        start: new Date().getTime(),
      },
    ],
  });
};

export default addNewTimer;
