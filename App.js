import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import AssetExample from './components/AssetExample';

// The code below will display my BioSketch @ UC, and it's amazing!!!!!

export default function App() {
  return (
    <View style={styles.container}>
      <AssetExample />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#e60026',
    padding: 8,
  },
});