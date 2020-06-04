import React, {Component} from 'react';
import {SafeAreaView, StatusBar, Button, Text, View} from 'react-native';
import ListStore from './app/mobx/listStore';
import {observer} from 'mobx-react';
import MainNavigator from './app/MainNavigator';
@observer
class App extends Component {
  render() {
    return <MainNavigator />;
  }
}

export default App;
