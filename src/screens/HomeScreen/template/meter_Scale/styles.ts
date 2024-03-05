import {StyleSheet} from 'react-native';
import ScreenRatio from '../../../../components/constants/ScreenRatio';
import colors from '../../../../components/constants/colors';

const styles = StyleSheet.create({
  container: {
    height: ScreenRatio.height / 1.25,
    width: ScreenRatio.width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    color: colors.red,
    fontWeight: 'bold',
  },

  scalecontainer: {
    height: ScreenRatio.height / 1.3,
    width: ScreenRatio.width / 3,
    paddingVertical: 10,
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: 5,
  },
  empty: {
    color: colors.black,
    fontSize: 14,
  },
});

export default styles;
