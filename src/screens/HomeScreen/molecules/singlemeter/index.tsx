import {View, Text} from 'react-native';
import React, {FC} from 'react';
import styles from './styles';

interface props {
  item: any;
  index: number;
}

const SingleMeter: FC<props> = ({index, item}) => {
  const isCmValue = index % 10 === 0;

  return (
    <View style={styles.container}>
      <View style={[isCmValue ? styles.line : styles.subline]} />
      {isCmValue && <Text style={styles.title}>{item}</Text>}
    </View>
  );
};

export default SingleMeter;
