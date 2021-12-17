import { StyleSheet } from 'react-native';

const classes = StyleSheet.create({
  wrap: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  qBlock: {
    width: '90%',
    borderRadius: 2,
    height: '60%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,

  },
  qCode: {
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center'
  }
});

export default classes;
