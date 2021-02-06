import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {dimens, strings, colors} from '../utils';
import MyTeamCard from './MyTeamCard';
import Title from './Title';
import {ProfilePicture1, ProfilePicture2} from '../assets';

const MyTeam = (props) => {
  return (
    <View style={styles.container}>
      <Title title={strings.default.myTeam} />
      {props.data.data.myteam.map((item) => (
        <View key={item.id}>
          <MyTeamCard
            {...item}
            circle={item.title.substring(0, 1)}
            bgColor={item.bgColor}
            img={ProfilePicture2}
            img2={ProfilePicture1}
          />
        </View>
      ))}
    </View>
  );
};

export default MyTeam;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: dimens.xl,
  },
});
