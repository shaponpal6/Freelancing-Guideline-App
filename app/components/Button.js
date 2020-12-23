import React from 'react';
import {TouchableOpacity, StyleSheet, Text, Dimensions} from 'react-native';

const screen = Dimensions.get('window');
const buttonWidth = screen.width / 5;

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 25,
  },
  textSecondary: {
    color: '#060606',
  },
  button: {
    backgroundColor: '#253b59',
    flex: 1,
    width: '100%',
    height: Math.floor(buttonWidth - 10),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Math.floor(buttonWidth),
    margin: 5,
  },
  buttonDouble: {
    width: buttonWidth * 2 - 20,
    flex: 0,
    alignItems: 'center',
    // paddingLeft: 40,
  },
  buttonDoubleHeight: {
    // width: buttonWidth,
    height: buttonWidth * 2 + 20,
    // flex: 0,
    // alignItems: 'flex-start',
    // paddingLeft: 40,
  },
  buttonSecondary: {
    backgroundColor: '#e3e3e3',
  },
  buttonAccent: {
    backgroundColor: '#32baea',
  },
});

export default ({onPress, text, size, theme}) => {
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];

  if (size === 'double') {
    buttonStyles.push(styles.buttonDouble);
  }
  if (size === 'doubleHeight') {
    buttonStyles.push(styles.buttonDoubleHeight);
  }

  if (theme === 'secondary') {
    buttonStyles.push(styles.buttonSecondary);
    textStyles.push(styles.textSecondary);
  } else if (theme === 'accent') {
    buttonStyles.push(styles.buttonAccent);
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};
