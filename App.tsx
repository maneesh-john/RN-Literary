import React from 'react';
import { View, SafeAreaView, StyleSheet, StatusBar } from 'react-native';

import AppProvider from './src/contexts/AppContext';
import Naviagtion from './src/navigation/Navigation';

const App = () => {

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <SafeAreaView />
      <AppProvider>
        <Naviagtion />
      </AppProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
