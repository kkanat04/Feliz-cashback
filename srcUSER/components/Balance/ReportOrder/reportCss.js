import { StyleSheet } from 'react-native';

const classes = StyleSheet.create({
  block: {
    width: '95%',
    alignSelf: 'center',
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'silver',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
    paddingHorizontal: '7%',
    backgroundColor: 'white',
    shadowOffset: {
      width: 3,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  leftText: {
    fontSize: 18,
    color: 'rgba(23, 69, 59, 1)',
  },
  price: {
    fontSize: 18,
    color: 'rgba(23, 69, 59, 1)',
    fontWeight: 'bold',
  },
});

export default classes;
