import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as CustomCode from '../custom-files/CustomCode';
import addNewTimer from '../global-functions/addNewTimer';
import deleteAllTimers from '../global-functions/deleteAllTimers';
import deleteTimer from '../global-functions/deleteTimer';
import * as Utils from '../utils';
import {
  Button,
  IconButton,
  ScreenContainer,
  Spacer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { FlatList, StyleSheet, View } from 'react-native';

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
            <View style={styles(theme).Viewce4accf0}>
              <IconButton
                onPress={() => {
                  try {
                    deleteTimer(
                      Variables,
                      setGlobalVariableValue,
                      listData?.start
                    );
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles(theme).IconButton298ff576}
                size={32}
                icon={'Ionicons/ios-trash-outline'}
              />
              <View>
                <Touchable
                  onPress={() => {
                    try {
                      navigation.navigate('TimerScreen', {
                        id: listData?.start,
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <Utils.CustomCodeErrorBoundary>
                    <CustomCode.Timer {...listData} />
                  </Utils.CustomCodeErrorBoundary>
                </Touchable>
              </View>
            </View>
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
      <Spacer right={8} left={8} bottom={3} top={3} />
      <Button
        onPress={() => {
          try {
            deleteAllTimers(setGlobalVariableValue);
          } catch (err) {
            console.error(err);
          }
        }}
        style={[
          GlobalStyles.ButtonStyles(theme)['Button'],
          styles(theme).Buttonf5474ac2,
        ]}
        title={'Delete All Timers'}
      />
      <Spacer top={8} right={8} bottom={8} left={8} />
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Buttonf5474ac2: { backgroundColor: theme.colors['Error'] },
    IconButton298ff576: { left: '70%' },
    Viewce4accf0: { alignItems: 'center', flexDirection: 'row' },
    screen: { backgroundColor: theme.colors['Background'] },
  });

export default withTheme(MainScreen);
