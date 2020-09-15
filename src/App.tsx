import React from 'react';
import {
  Platform,
  KeyboardAvoidingView,
  StyleSheet,
  StatusBar,
} from 'react-native';

import 'react-native-gesture-handler';

import Routes from './routes';

import {NavigationContainer} from '@react-navigation/native';

// console.disableYellowBox = true;

const Styles = StyleSheet.create({
  Container: {
    position: 'relative',
    flex: 1,
    backgroundColor: '#232123',
  },
});

const App = () => {
  return (
    <NavigationContainer>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={Styles.Container}>
        <StatusBar
          backgroundColor="#232123"
          animated
          barStyle="light-content"
        />
        <Routes />
      </KeyboardAvoidingView>
    </NavigationContainer>
  );
};

export default App;
