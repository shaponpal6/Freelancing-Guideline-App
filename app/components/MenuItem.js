import React from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Alert,
  TouchableHighlight,
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const screen = Dimensions.get('window');
const buttonWidth = screen.width / 5;

const styles = StyleSheet.create({
  column: {
    backgroundColor: '#123232',
    flex: 1,
    width: '100%',
    // height: 2 * Math.floor(buttonWidth - 10),
    color: Colors.black,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 5,
  },
  menuContainer: {
    backgroundColor: '#4285f4',
    margin: 10,
    borderRadius: 10,
    paddingHorizontal: 24,
    padding: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuTitle: {
    fontSize: 32,
    fontWeight: '800',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  },
  menuDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#fff',
  },
});

function MenuItem({data, onPress}) {
  const doPageView = () => {
    // Alert.alert('item', <Text>JSON.stringify(data)</Text>);
    return onPress('contentPage', data);
  };
  return (
    <TouchableHighlight onPress={doPageView} underlayColor="#f1c40f">
      <View style={styles.menuContainer}>
        <Text style={styles.menuTitle}>{data.name ?? 'No Menu'}</Text>
        {/* <Text style={styles.menuDescription}>{data.desc ?? 'No desc'}</Text> */}
      </View>
    </TouchableHighlight>
  );
}

export default MenuItem;
