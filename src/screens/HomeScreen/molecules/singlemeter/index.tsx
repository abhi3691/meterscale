import {View, Text} from 'react-native';
import React, {FC} from 'react';
import styles from './styles';
import colors from '../../../../components/constants/colors';

interface props {
  item: any;
  index: number;
  activeIndex: number;
}

const SingleMeter: FC<props> = ({activeIndex, index, item}) => {
  const isCmValue = index % 10 === 0;
  const is5mm = index % 5 === 0;

  return (
    <View style={styles.container}>
      <View
        style={[
          isCmValue ? styles.line : is5mm ? styles.mmLine : styles.subline,
        ]}
      />
      <View>
        {isCmValue && (
          <Text
            style={[
              styles.title,
              {color: activeIndex === index ? colors.red : colors.gray},
            ]}>
            {item}
          </Text>
        )}
      </View>
    </View>
  );
};

export default SingleMeter;
