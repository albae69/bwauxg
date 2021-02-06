import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {font, dimens, colors} from '../utils';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>albae69</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: font.bold,
    fontSize: dimens.sm,
    color: 'black',
  },
});
