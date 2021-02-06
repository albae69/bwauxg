import React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, dimens, font} from '../utils';
import {next, ProfilePicture} from '../assets';

const List = ({label, value, isImage}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.tLabel}>{label}</Text>
      <View style={styles.vWrap}>
        <Text style={styles.tValue}>{value}</Text>
        {isImage ? (
          <Image
            source={ProfilePicture}
            style={{height: 30, width: 30, marginLeft: dimens.xs}}
          />
        ) : null}
        <Image source={next} style={styles.img} />
      </View>
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#BFBFBF',
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  vWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    marginHorizontal: dimens.s,
  },
  tLabel: {
    marginLeft: dimens.s,
    color: colors.blue,
    fontFamily: font.bold,
    fontSize: dimens.xs,
  },
  tValue: {
    color: colors.blue,
    fontFamily: font.medium,
    fontSize: dimens.xs,
  },
});
