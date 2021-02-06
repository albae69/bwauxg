import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {font, colors, strings, dimens} from '../utils';
import {ProfilePicture} from '../assets/';

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.date}>{strings.header.date}</Text>
        <Text style={styles.greet}>Hi,{strings.header.name}</Text>
      </View>
      <TouchableOpacity>
        <Image source={ProfilePicture} style={styles.img} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: dimens.xl,
    paddingHorizontal: dimens.l,
  },

  date: {
    fontFamily: font.light,
    color: colors.gray,
    fontSize: dimens.xs,
    margin: 0,
  },
  greet: {
    fontFamily: font.medium,
    color: colors.blue,
    fontSize: dimens.l,
  },
  img: {
    height: 40,
    width: 40,
  },
});
