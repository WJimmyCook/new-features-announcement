import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MainScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Pretty Good App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    fontSize: 32,
    paddingTop: 20,
    fontWeight: '600',
  },
});

export default MainScreen;
