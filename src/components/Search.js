import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image, View} from 'react-native';
import {search} from '../assets';
import {colors, dimens, font, strings} from '../utils';

const Search = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnSearch}>
        <Image source={search} />
        <Text style={styles.tSearch}>{strings.default.search}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: dimens.l,
  },
  btnSearch: {
    height: 50,
    backgroundColor: colors.lightGray,
    paddingLeft: dimens.s,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tSearch: {
    fontFamily: font.light,
    color: colors.gray,
    marginLeft: dimens.s,
  },
});
