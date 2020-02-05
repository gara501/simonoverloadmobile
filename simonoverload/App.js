import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Game from './components/game';
import Loader from './components/loader';

export default function App() {
  return (
    <View style={styles.container}>     
      <Loader />
      <Game />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
