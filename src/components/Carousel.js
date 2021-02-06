import React from 'react';
import {StyleSheet, ScrollView, Dimensions} from 'react-native';
import {dimens} from '../utils';

const Carousel = ({children}) => {
  const {width} = Dimensions.get('window');
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      snapToAlignment="start"
      decelerationRate="fast"
      snapToInterval={width - 200}
      contentInset={{right: dimens.xl}}>
      {children}
    </ScrollView>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: dimens.xl,
  },
});
