import { StyleSheet } from 'react-native';

const classes = StyleSheet.create({
  wrap: {
    width: '100%',
    height: '100%',
  },
  input: {
    flex:1,
    fontSize:20,
    width: '85%',
    alignSelf: 'center',

    // borderColor: 'rgba(23, 69, 59, 0.5)',
    borderWidth: 0.1,
    shadowOffset: {
        width: 4,
        height: 10,
    },

    shadowColor: "rgba(23, 69, 59, 0.1)",

    margin:10
},
  searchSection: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(23, 69, 59, 0.2)',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 30,
    marginTop: '10%',
    paddingLeft: 15,
  },
  searchIcon: {
    height: 25,
    width: 25,
    padding: 10,
    margin: 15,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
});

export default classes;
