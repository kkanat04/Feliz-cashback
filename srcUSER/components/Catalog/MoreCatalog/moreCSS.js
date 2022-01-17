import { StyleSheet } from 'react-native';

const classes = StyleSheet.create({
  wrap: {
    width: '100%',
    height: '100%',
  },
  scroll:{
    height:'72%',
    paddingTop:'10%',
  },
  listItem: {
    alignItems: 'center',
  },
  item: {
    width: '90%',
    height: '18%',
    backgroundColor: '#fff',
    shadowColor: "#000",
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,

  },
  itemText: {
    marginLeft: '6%',
    width: '60%',
  },
  photo: {
    width: '20%',
    borderRadius: 15,
    height: '70%',
    backgroundColor: '#D1DAD8',
    marginLeft: '3%'

  },
  detailsSpan: {
    color: '#FFD600',
    fontSize: 16,
    fontWeight: 'bold',
  },

  detailsItem: {
    width: '80%',
    flexDirection: 'row',
    marginBottom: '10%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,

  },
  detailsSquare: {
    width: 60,
    height: 60,
    backgroundColor: '#D1DAD8',
    marginRight: 20,
    borderRadius: 10,
  },
  detailsCol: {
    width: '70%',
    flexDirection: 'column',
  },
  detailsSpan: {
    color: '#FFD600',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default classes;