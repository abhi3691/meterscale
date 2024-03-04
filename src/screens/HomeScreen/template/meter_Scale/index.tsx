import {View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {SimpleRecycler} from 'react-native-simple-recyclerlistview';
import SingleWeight from '../../molecules/singlemeter';
import ScreenRatio from '../../../../components/constants/ScreenRatio';
import styles from './styles';

const MeterScale = () => {
  const recyclerRef = useRef<SimpleRecycler>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    let data = [...Array(1000).fill('').keys()].map(value => value / 10);
    recyclerRef.current?.loadDataFromApi(data);
  };

  const rowRenderer = (type: string | number, data: any, index: number) => {
    return <SingleWeight item={data?.item} index={index} />;
  };
  return (
    <View style={styles.container}>
      <SimpleRecycler
        ref={recyclerRef}
        rowRenderer={rowRenderer}
        height={ScreenRatio.height / 1.5}
        width={ScreenRatio.width / 3}
        forceNonDeterministicRendering={true}
        emptyText="No Weight Found"
        emptyTextStyle={styles.empty}
      />
    </View>
  );
};

export default MeterScale;
