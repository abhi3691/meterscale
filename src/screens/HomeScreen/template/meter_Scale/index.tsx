import {View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {SimpleRecycler} from 'react-native-simple-recyclerlistview';
import ScreenRatio from '../../../../components/constants/ScreenRatio';
import styles from './styles';
import Picker from '../../orginzation/picker';
import ExtendedScrollView from '../../orginzation/external_scroll';
import SingleMeter from '../../molecules/singlemeter';

const MeterScale = () => {
  const recyclerRef = useRef<SimpleRecycler>(null);

  useEffect(() => {
    loadData();
  }, []);

  const [activeIndex, setAtvieIndex] = useState<number>(0);

  const loadData = () => {
    let data = [...Array(500).fill('').keys()].map(value => value / 10);
    recyclerRef.current?.loadDataFromApi(data);
  };

  const changeIndex = (index: number) => {
    setAtvieIndex(index);
  };

  const rowRenderer = (type: string | number, data: any, index: number) => {
    return (
      <SingleMeter item={data?.item} index={index} activeIndex={activeIndex} />
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.scalecontainer}>
        <SimpleRecycler
          ref={recyclerRef}
          rowRenderer={rowRenderer}
          height={ScreenRatio.height / 1.5}
          width={ScreenRatio.width / 3}
          emptyText="No Weight Found"
          emptyTextStyle={styles.empty}
          onScroll={e => {
            let index = Math.round(e.nativeEvent.contentOffset.y / 15);
            if (index !== -1) {
              changeIndex(index);
            }
          }}
          externalScrollView={ExtendedScrollView}
        />
      </View>
      <Picker />
    </View>
  );
};

export default MeterScale;
