import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {colors, dimens, font, strings} from '../utils';
import Title from './Title';
import {msg, next} from '../assets';

const Notification = () => {
  return (
    <View style={styles.container}>
      <Title title={strings.default.notification} />
      <TouchableOpacity style={styles.vCard}>
        <Image source={msg} />
        <View>
          <Text style={styles.tName}>{strings.notification.name}</Text>
          <Text style={styles.tMessage}>{strings.notification.message}</Text>
        </View>
        <Image source={next} />
      </TouchableOpacity>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    paddingHorizontal: dimens.xl,
  },
  vCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 90,
    backgroundColor: colors.lightGray,
    marginTop: 10,
    borderRadius: 10,
    paddingHorizontal: dimens.l,
  },
  tName: {
    fontFamily: font.semiBold,
    fontSize: dimens.xs,
    color: colors.blue,
  },
  tMessage: {
    fontFamily: font.light,
    fontSize: 12,
    color: colors.blue,
  },
});
