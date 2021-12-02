import React from 'react';
import { View,Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return <View style={styles.container}> <Text >Hello Siva</Text></View>
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    fontSize: 30,
    justifyContent:'center',
    alignItems:"center",
    color:"orange"
    
  },
});

export default HomeScreen;