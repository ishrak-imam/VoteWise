import {StyleSheet} from 'react-native';

export const standardPadding = 8;

const globalStyles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  paddedContainer: {
    padding: standardPadding * 2,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  spaceAroundContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  spaceBetweenRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowAlignCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  alignCenter: {
    alignItems: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  textCenter: {
    textAlign: 'center',
  },
  textJustify: {
    textAlign: 'justify',
  },
});

export default globalStyles;
