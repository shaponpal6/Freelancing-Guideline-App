/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  Alert,
  TouchableHighlight,
} from 'react-native';

import CategoryScreen from './app/screens/CategoryScreen';
import Navigator from './app/screens/Navigator';
import ContentPageScreen from './app/screens/ContentPageScreen';
import ListScreen from './app/screens/ListScreen';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 'category',
      pageContext: {},
    };
  }
  doNavigation(page, data = {}) {
    console.log('click contentPage :>> ');
    Alert.alert('Hello', 'Hiiiiiiiiiiiiii');
    this.setState((previousState, currentProps) => {
      return {
        ...previousState,
        page: page,
        pageContext: data,
      };
    });
  }
  onBackButtonClick() {
    // console.log('click contentPage :>> ');
    // Alert.alert('Hello', 'Hiiiiiiiiiiiiii');
    // alert('hi');
    this.setState((previousState, currentProps) => {
      // condition here
      let targetPage = '';
      switch (previousState.page) {
        case 'category':
          targetPage = '';
          break;
        case 'listPage':
          targetPage = 'category';
          break;
        case 'contentPage':
          targetPage = 'listPage';
          break;
        default:
          targetPage = '';
      }
      if (targetPage !== '') {
        return {
          ...previousState,
          page: targetPage,
        };
      }
    });
  }
  incrementInteger() {
    // console.log('click contentPage :>> ');
    // Alert.alert('Hello', 'Hiiiiiiiiiiiiii');
    this.setState((previousState, currentProps) => {
      // condition here
      let targetPage = 'category';
      return {
        ...previousState,
        page: targetPage,
      };
    });
  }
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <Navigator onBack={this.onBackButtonClick.bind(this)} />
          <View onPress={this.incrementInteger.bind(this)}>
            <Text>Click Here</Text>
          </View>
          <TouchableHighlight
            onPress={this.incrementInteger.bind(this)}
            underlayColor="#f1c40f">
            <Text style={{padding: 20}}>Click ........</Text>
          </TouchableHighlight>
          {this.state.page === 'category' && (
            <CategoryScreen doNavigation={this.doNavigation.bind(this)} />
          )}
          {this.state.page === 'listPage' && (
            <ListScreen doNavigation={this.doNavigation.bind(this)} />
          )}
          {this.state.page === 'contentPage' && (
            <ContentPageScreen doNavigation={this.doNavigation.bind(this)} />
          )}
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({});
