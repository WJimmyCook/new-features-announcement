import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const WhatsNewScreen = ({currentVersion}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`Whats New in v${currentVersion}?`}</Text>
      <Text style={styles.text}>{'- Added ability to print money'}</Text>
      <Text style={styles.text}>
        {'- Fix bug where phone would occasionally blow up in face'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 26,
    paddingTop: 20,
    fontWeight: '500',
    alignSelf: 'center',
  },
  text: {
    fontSize: 20,
    paddingTop: 20,
  },
});

export default WhatsNewScreen;
