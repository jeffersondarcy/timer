import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as CustomCode from '../custom-files/CustomCode';
import addNewTimer from '../global-functions/addNewTimer';
import * as Utils from '../utils';
import { Button, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const MainScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const isFocused = useIsFocused();
  React.useEffect(() => {
    try {
      if (!isFocused) {
        return;
      }
      addNewTimer(Variables, setGlobalVariableValue);
      console.log(Constants['timers']);
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);

  return (
    <ScreenContainer
      style={styles(theme).screen}
      scrollable={false}
      hasSafeArea={false}
    >
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
              <View>
                <Utils.CustomCodeErrorBoundary>
                  <CustomCode.Timer {...listData} />
                </Utils.CustomCodeErrorBoundary>
              </View>
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
      <Button
        onPress={() => {
          try {
            addNewTimer(Variables, setGlobalVariableValue);
          } catch (err) {
            console.error(err);
          }
        }}
        style={GlobalStyles.ButtonStyles(theme)['Button']}
        title={'Start New Timer'}
      />
      <Utils.CustomCodeErrorBoundary>
        <></>
      </Utils.CustomCodeErrorBoundary>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    screen: { backgroundColor: theme.colors['Background'] },
  });

export default withTheme(MainScreen);
