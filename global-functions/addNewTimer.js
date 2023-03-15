import React from 'react';

const addNewTimer = (Variables, setGlobalVariableValue) => {
  console.log(Variables);
  setGlobalVariableValue({
    key: 'timers',
    value: [
      ...Variables.timers,
      {
        start: new Date().getTime(),
      },
    ],
  });
  /*
const newTimer = {start: new Date().getTime()}
const {timers} = Variables
let newTimers
if (typeof timers === 'undefined' || timers === null) newTimers = [newTimer]
else newTimers = [...timers, newTimer]
setGlobalVariableValue({key: 'timers', value: newTimers})
*/
};

export default addNewTimer;
