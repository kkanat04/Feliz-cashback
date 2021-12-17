import {StyleSheet} from 'react-native';



 const classes = StyleSheet.create({
     wrap:{
        width: '100%',
        height: '100%' ,
        
     },
    mainWrap:{
        height: '80%',
       justifyContent: 'center',
    //    alignItems: 'center'
    },
   
    mainBlockWrap:{
        width: '90%',
        backgroundColor: 'rgba(23, 69, 59, 0.8)',
        borderRadius: 20,
        alignSelf: 'center',
        marginTop: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 25,
        paddingLeft: 20,
        paddingRight: 20
    },
    blockItemTitle:{
        color: 'rgba(255, 255, 255, 1)',
        fontSize: 15,
        marginBottom: 14,
        marginTop: 6,
        fontWeight: 'bold'
    },
    buttonsWrap:{
        width: '90%',
        color: 'rgba(23, 69, 59, 0.8)',
        justifyContent: 'center',
        alignSelf: 'center',
        // marginTop: '6%'
        marginVertical: '6%'

    },
    textBtn:{
        color: 'rgba(23, 69, 59, 0.8)',
        fontSize:13,
        alignSelf: 'center'
    },

    pointBtn:{
        width: '45%',
        padding: 15,

        alignSelf: 'center',
        borderRadius: 25,
        borderColor: 'rgba(23, 69, 59, 0.5)',
        backgroundColor:'#fff',
    
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    
    blockItem:{
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 13,
        marginBottom: 12,
        marginTop: 4
    }
})
export default classes