import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';

const screen = Dimensions.get('window');
const buttonWidth = screen.width / 5;

const styles = StyleSheet.create({
  column: {
    flex: 1,
    width: '100%',
    // height: 2 * Math.floor(buttonWidth - 10),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 5,
  },
});

export default ({children}) => <View style={styles.column}>{children}</View>;
