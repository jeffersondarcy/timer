import React from 'react';

const deleteTimer = (Variables, setGlobalVariableValue, id) => {
  setGlobalVariableValue({
    key: 'timers',
    value: [...Variables.timers.filter(({ start }) => start !== id)],
  });
};

export default deleteTimer;
