import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as CustomCode from '../custom-files/CustomCode';
import * as Utils from '../utils';
import {
  IconButton,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { FlatList, StyleSheet, View } from 'react-native';

const MainScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer
      style={styles(theme).screen}
      scrollable={false}
      hasSafeArea={false}
    >
      <Utils.CustomCodeErrorBoundary>
        <CustomCode.CreateNewTimer />
      </Utils.CustomCodeErrorBoundary>
      <Utils.CustomCodeErrorBoundary>
        <CustomCode.ShowContext />
      </Utils.CustomCodeErrorBoundary>
      <FlatList
        data={Constants['timers']}
        listKey={'XApNsKG1'}
        keyExtractor={listData =>
          listData?.id || listData?.uuid || JSON.stringify(listData)
        }
        renderItem={({ item }) => {
          const listData = item;
          return (
            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('TimerScreen', { id: listData?.start });
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <View />
            </Touchable>
          );
        }}
        style={GlobalStyles.FlatListStyles(theme)['List']}
        contentContainerStyle={GlobalStyles.FlatListStyles(theme)['List']}
        numColumns={1}
        onEndReachedThreshold={0.5}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
      />
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    IconButtona0f497c1: { bottom: '10%', position: 'absolute', right: '50%' },
    screen: { backgroundColor: theme.colors['Background'] },
  });

export default withTheme(MainScreen);
