import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {
  Card,
  Carousel,
  Header,
  Search,
  Notification,
  MyTeam,
  ProjectDetail,
} from '../components';
import data from '../data';
import {dimens} from '../utils';

const Dashboard = () => {
  const [visible, setVisible] = useState(false);

  const datas = data;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={{
        paddingBottom: dimens.xl,
      }}>
      <ProjectDetail
        data={datas}
        visible={visible}
        onClose={() => setVisible(false)}
      />
      <Header />
      <Search />
      <Carousel>
        {datas.data.card.map((item) => (
          <View key={item.id} style={styles.vWrap}>
            <Card
              onPress={() => setVisible(true)}
              title={item.title}
              deadline={item.deadline}
              bgColor={item.bgColor}
              isDiscount={item.isDiscount}
              discount={item.discount}
            />
          </View>
        ))}
      </Carousel>
      <Notification />
      <MyTeam data={datas} />
    </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  vWrap: {
    paddingLeft: dimens.l,
    margin: 0,
  },
});
