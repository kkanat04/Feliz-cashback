import { StyleSheet } from 'react-native';

const classes = StyleSheet.create({
  wrap: {
    width: '100%',
    height: '100%',
  },
  block: {
    width: '90%',
    height: '70%',
    borderRadius: 20,
    backgroundColor: '#456A62',
    alignSelf: 'center',
    // flexDirection: 'column',

    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: '6%',
    paddingTop: 50
  },
  profile: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '85%'
  },
  btn: {
    width: '35%',
    textAlign: 'center',
    padding: 7,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginTop: '8%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    marginLeft: '10%'
  },
  info: {
    flexDirection: 'row',
    marginTop: '5%',
    alignSelf:'flex-end'
  }
});

export default classes;
