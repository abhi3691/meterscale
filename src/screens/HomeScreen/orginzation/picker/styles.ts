import {StyleSheet} from 'react-native';
import ScreenRatio from '../../../../components/constants/ScreenRatio';
import colors from '../../../../components/constants/colors';

const styles = StyleSheet.create({
  container: {
    height: 5,
    backgroundColor: colors.red,
    width: ScreenRatio.width / 5,
    position: 'absolute',
    left: ScreenRatio.width / 3,
    borderRadius: 10,
  },
});
export default styles;
