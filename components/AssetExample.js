import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

// The code below will display my BioSketch @ UC, and it's amazing!!!!!

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>WELCOME TO THE UNIVERSITY of the CUMBERLANDS</Text>
      <Text style={styles.subheading}>Course ID: MSCS 533</Text>
      <View style={styles.whiteBox}>
        <Text style={styles.bio}>
          Prafulla Pradhan is a skilled Software Developer with expertise in Java, cloud integration, and DevOps, currently pursuing an MS in Computer Science and known for his work in secure API development and data-driven projects.
        </Text>
        <Image
          source={require('../assets/Prafulla.PNG')}
          style={styles.image}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#e60026',
  },
  whiteBox: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    aspectRatio: 1, 
  },
  image: {
    width: 150,
    height: 168,
    borderRadius: 75,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: 'black',
  },
  subheading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  bio: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    marginBottom: 10, 
  },
});