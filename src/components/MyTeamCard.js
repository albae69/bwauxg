import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {colors, dimens, font} from '../utils';

const MyTeamCard = ({circle, title, description, img, img2, bgColor}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.vCircle(bgColor)}>
        <Text style={styles.tString}>{circle}</Text>
      </View>
      <View style={styles.vWrap}>
        <Text style={styles.tTitle}>{title}</Text>
        <Text style={styles.tDescription}>{description}</Text>
      </View>
      <View style={styles.vWrapImage}>
        <Image source={img} style={styles.img} />
        <Image source={img2} style={[styles.img, styles.imgSecond]} />
      </View>
    </TouchableOpacity>
  );
};

export default MyTeamCard;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  vCircle: (bgColor) => ({
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: bgColor || colors.lightBlue,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  tString: {
    fontFamily: font.semiBold,
    color: colors.white,
    fontSize: dimens.s,
  },
  vWrap: {
    position: 'absolute',
    left: 60,
  },
  vWrapImage: {
    flexDirection: 'row',
    position: 'relative',
  },
  img: {
    height: 40,
    width: 40,
  },
  imgSecond: {
    position: 'relative',
    marginLeft: -5,
  },
  tTitle: {
    fontFamily: font.semiBold,
    color: colors.blue,
    fontSize: dimens.xs,
  },
  tDescription: {
    fontFamily: font.light,
    color: colors.blue,
    fontSize: 12,
    marginTop: -5,
  },
});
