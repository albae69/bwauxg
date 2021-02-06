import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {colors, dimens, font} from '../utils';

const Title = ({title}) => {
  return <Text style={styles.tTitle}>{title}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  tTitle: {
    fontFamily: font.semiBold,
    color: colors.blue,
    fontSize: dimens.s,
    marginTop: dimens.l,
  },
});
