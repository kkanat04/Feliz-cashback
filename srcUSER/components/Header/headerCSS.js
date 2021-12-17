import { StyleSheet } from 'react-native';

const classes = StyleSheet.create({
  wrap: {
    width: '100%',
    height: '15%',
    backgroundColor: 'white',
    flexDirection: 'row',
    backgroundColor: 'background: rgba(23, 69, 59, 0.8)',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  content: {
    width: '100%',
    height: '80%',
    flexDirection: 'row',
    paddingHorizontal: '5%',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'flex-end',
  },
  firstText: {
    fontSize: 26,
    color: 'white',
  },
  img: {
    width: 50,
    height: 50,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coin: {
    width: 25,
    height: 20,
    marginLeft: 5,
  },
  sumText: {
    color: 'gold',
    fontSize: 26,
    fontWeight: 'bold',
  },
});

export default classes;
