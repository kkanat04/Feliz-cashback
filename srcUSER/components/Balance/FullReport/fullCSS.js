import { StyleSheet } from 'react-native';

const classes = StyleSheet.create({
  wrap: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  block: {
    width: '95%',
    height: '85%',
    alignSelf: 'center',
    backgroundColor: ' rgba(23, 69, 59, 0.8)',
    borderRadius: 20,
    position: 'relative',
  },
  date: {
    fontSize: 20,
    color: ' rgba(23, 69, 59, 0.8)',
    alignSelf: 'center',
    fontWeight: '600',
  },
  dateView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    marginVertical: 10,
  },
  scroll: {
    width: '100%',
    borderRadius: 20,
    paddingVertical: '3%',
  },
  total: {
    width: '100%',
    height: 70,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '8%',
    alignItems: 'center',
    marginBottom: '2.8%',
  },
  totalLeft: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default classes;
