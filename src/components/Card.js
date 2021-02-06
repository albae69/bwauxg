import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, dimens, font} from '../utils';

const Card = ({title, deadline, isDiscount, discount, bgColor, onPress}) => {
  return (
    <TouchableOpacity style={styles.container(bgColor)} onPress={onPress}>
      <View style={styles.vWrapView}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.deadline}>{deadline}</Text>
      </View>
      {isDiscount ? (
        <View style={styles.discount}>
          <Text style={styles.tDiscount}>{discount} OFF</Text>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: (bgColor) => ({
    backgroundColor: bgColor || colors.lightGray,
    height: 120,
    width: 200,
    padding: dimens.s,
    borderRadius: dimens.xs,
    elevation: 2,
  }),
  discount: {
    height: 30,
    width: 100,
    backgroundColor: colors.lightBlue,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: dimens.xs,
    borderBottomLeftRadius: dimens.xs,
    position: 'absolute',
    right: 0,
    elevation: 2,
  },
  tDiscount: {
    fontFamily: font.bold,
    color: colors.white,
    letterSpacing: 1.5,
    fontSize: 10,
  },
  vWrapView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  title: {
    fontFamily: font.semiBold,
    color: colors.white,
    fontSize: dimens.xs,
    width: 100,
  },
  deadline: {
    fontFamily: font.light,
    color: colors.lightGray,
    fontSize: 10,
    letterSpacing: 1.5,
  },
});
