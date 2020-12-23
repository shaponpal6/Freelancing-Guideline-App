import React, {Component} from 'react';
import {Text, StyleSheet, View, Button, TouchableHighlight} from 'react-native';

export default class Navigator extends Component {
  render() {
    return (
      <View style={styles.header}>
        {/* <TouchableHighlight onPress={this.props.onBack.bind(this)}>
          <Text>Back</Text>
        </TouchableHighlight> */}
        <Button title="Back" onPress={this.props.onBack.bind(this)} />
        <Text> Title </Text>
        <Text> info </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '100%',
    height: 40,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#4285f4',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
