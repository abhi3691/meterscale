import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import MeterScale from './template/meter_Scale';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <MeterScale />
    </View>
  );
};

export default HomeScreen;
