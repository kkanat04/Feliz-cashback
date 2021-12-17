import { StyleSheet } from 'react-native';

const classes = StyleSheet.create({
  wrap: {
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(23, 69, 59, 0.8)',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  imgStyle: {
    width: 30,
    height: 30
  },
  imgStyleOpacity: {
    opacity: 0.3,
    width: 30,
    height: 30
  }
});

export default classes;
