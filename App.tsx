/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Linking,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import MainNavigation from './src/navigations/MainNavigation';

function App(): React.JSX.Element {
  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <MainNavigation/>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    width: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 28,
  },
});

export default App;
