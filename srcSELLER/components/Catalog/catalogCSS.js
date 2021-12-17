import {StyleSheet} from 'react-native';
const classes = StyleSheet.create({

    wrap: {
        width: '100%',
        height: '100%',
    },

    itemsWrap: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent:'center',
        width: '95%',
        height:'100%',
        alignSelf: 'center',
        marginBottom:'10%',
    },

    itemsList: {
        width: '40%',
        height:'15%',
        justifyContent:'center',
        alignItems:'center',
        marginBottom: '10%',
        marginHorizontal:'5%',
        borderRadius: 20,
        backgroundColor:'#fff',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,


    }
});

export default classes;
