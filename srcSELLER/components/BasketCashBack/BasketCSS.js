import {StyleSheet} from 'react-native';



 const classes = StyleSheet.create({
     wrap:{
         width:'100%',
         height:'100%',

     },
     wrapSecond:{
         justifyContent:'center',
     },
    mainWrap:{
        height:'100%',

        marginTop:'5%',
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        marginTop: '4%'
    },
    textBtn:{
        color: 'rgba(23, 69, 59, 0.8)',
        fontSize:12,
        alignSelf: 'center'
    },

    buttonsWrap2:{
        width: '90%',
        color: 'rgba(23, 69, 59, 0.8)',
        alignSelf: 'center',
        marginBottom: '3%'
        
    },
    pointBtn:{
        width: '45%',
        padding: 15,
        alignItems: 'center',
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
    },
    pointBtn2:{
        width: '50%',
        padding: 15,
        alignSelf: 'center',
        marginTop: '4%',
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
    }
})
export default classes