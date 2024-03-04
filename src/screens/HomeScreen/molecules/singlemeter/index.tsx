import {View, Text} from 'react-native';
import React, {FC} from 'react';
import styles from './styles';

interface props {
  item: any;
  index: number;
  activeIndex: number;
}

const SingleMeter: FC<props> = ({activeIndex, index, item}) => {
  const isCmValue = index % 10 === 0;

  return (
    <View style={styles.container}>
      <View style={[isCmValue ? styles.line : styles.subline]} />
      {isCmValue && (
        <Text
          style={[
            styles.title,
            {color: activeIndex === index ? 'red' : 'gray'},
          ]}>
          {item}
        </Text>
      )}
    </View>
  );
};

export default SingleMeter;
