import { StyleSheet } from 'react-native';

const classes = StyleSheet.create({
    wrap: {
        width: '100%',
        height: '100%',
    },
    basketWrap:{
        height: '80%',
        alignItems:'center',
        justifyContent:'center'
    },
    basketWrapInput:{
        borderColor:'rgba(23, 69, 59, 0.5)',
        borderWidth:0.8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        paddingLeft:30,
        paddingRight:10,
        paddingVertical:15,
        width:'90%',
        marginTop:'10%',
        marginBottom:'5%',
        alignSelf:'center',
        backgroundColor:'#fff',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    basketInput: {
        flex: 1,
        paddingLeft: 15,
        fontSize: 20,
        width: '85%',
        alignSelf: 'center',
    },
    basketText:{
        color:'rgba(23, 69, 59, 0.8)',
        fontSize:14,
    }
});

export default classes;
