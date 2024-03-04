import {StyleSheet} from 'react-native';
import ScreenRatio from '../../../../components/constants/ScreenRatio';
import colors from '../../../../components/constants/colors';

const styles = StyleSheet.create({
  container: {
    width: ScreenRatio.width / 3,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: ScreenRatio.height / 50,
  },
  title: {
    width: ScreenRatio.width / 10,
  },
  line: {
    height: 1,
    width: ScreenRatio.width / 10,
    backgroundColor: colors.black,
  },
  subline: {
    height: 0.5,
    width: ScreenRatio.width / 20,
    backgroundColor: colors.black,
  },
});

export default styles;
