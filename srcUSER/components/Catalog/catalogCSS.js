import { StyleSheet } from 'react-native';
const classes = StyleSheet.create({

  wrap: {
    width: '100%',
    height: '100%',
  },
  itemsWrap: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: '95%',
    height: '100%',
    alignSelf: 'center',

  },
  itemsList: {
    backgroundColor: '#fff',
    display: 'flex',
    width: '40%',
    marginTop: '15%',
    marginHorizontal: '5%',
    borderRadius: 20,
    shadowColor: "#000",
    alignItems: 'center',
    justifyContent: 'center',
    height: '13%',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  }
});

export default classes;