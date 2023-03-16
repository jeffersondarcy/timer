import React from 'react';
import * as CustomCode from '../custom-files/CustomCode';
import * as Utils from '../utils';
import { ScreenContainer, withTheme } from '@draftbit/ui';
import { View } from 'react-native';

const TimerScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer scrollable={false} hasSafeArea={false}>
      <View>
        <Utils.CustomCodeErrorBoundary>
          <CustomCode.Timer start={props.route?.params?.id} />
        </Utils.CustomCodeErrorBoundary>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(TimerScreen);
