import React from 'react';
import { ScreenContainer, withTheme } from '@draftbit/ui';
import { View } from 'react-native';

const TimerScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer scrollable={false} hasSafeArea={false}>
      <View />
    </ScreenContainer>
  );
};

export default withTheme(TimerScreen);
