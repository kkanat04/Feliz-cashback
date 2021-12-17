import { StyleSheet } from 'react-native';

const classes = StyleSheet.create({
  wrap: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  img: {
    alignSelf: 'center',
    width: '46.5%',
    height: '30.5%',
    resizeMode: 'contain'
  },
  felizImg: {
    width: '100%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  Text: {
    paddingTop: '20%',
  },
  FelizText: {
    textAlign: 'center',
    color: '#456A62',
    fontSize: 25
  },
  enter: {
    width: '75%',
    padding: 13,
    alignSelf: 'center',
    marginTop: '10%',
    borderRadius: 20,
    backgroundColor: '#436860',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,

  },
  reg: {
    width: '75%',
    padding: 13,
    alignSelf: 'center',
    marginTop: '7%',
    borderRadius: 20,
    backgroundColor: '#436860',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,

  },
  hello: {

  }
});
export default classes