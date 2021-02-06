import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {cross, dot, Image1, Image2, Image3} from '../assets';
import {colors, dimens, font, strings} from '../utils';
import {List} from '../components';
import Title from './Title';
import Carousel from './Carousel';

const ProjectDetail = (props) => {
  const arrayOfimages = [
    {
      id: 1,
      source: Image1,
    },
    {
      id: 2,
      source: Image2,
    },
    {
      id: 3,
      source: Image3,
    },
  ];

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.container}>
        <View style={styles.vWrap}>
          <TouchableOpacity
            style={styles.vCircle}
            onPress={() => props.onClose()}>
            <Image source={cross} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={dot} />
          </TouchableOpacity>
        </View>
        <ScrollView
          style={styles.vWrapOnProgress}
          contentContainerStyle={{paddingBottom: 50}}
          showsVerticalScrollIndicator={false}>
          <Text style={styles.tOProgress}>
            {strings.project_detail.on_progress}
          </Text>
          <Text style={styles.tTitle}>{strings.project_detail.title}</Text>
          <Text style={styles.tDescription}>
            {strings.project_detail.description}
          </Text>
          <View style={styles.vWrapList}>
            {props.data.data.projectdetail.map((item) => (
              <View key={item.id}>
                <List {...item} />
              </View>
            ))}
          </View>
          <Title title="Attachments" />
          <Carousel>
            {arrayOfimages.map((item) => (
              <View key={item.id} style={styles.vAttachments}>
                <Image source={item.source} />
              </View>
            ))}
          </Carousel>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default ProjectDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightBlue,
  },
  vCircle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  vWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: dimens.xl,
  },
  vWrapOnProgress: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: dimens.xl,
  },
  tOProgress: {
    fontFamily: font.medium,
    color: colors.blue,
    fontSize: dimens.s,
  },
  tTitle: {
    fontFamily: font.bold,
    color: colors.blue,
    fontSize: dimens.l,
  },
  tDescription: {
    fontFamily: font.light,
    color: colors.gray,
    fontSize: dimens.xs,
    textAlign: 'left',
  },
  vWrapList: {
    marginTop: dimens.xl,
  },
  vAttachments: {
    marginRight: dimens.l,
    flex: 1,
  },
});
