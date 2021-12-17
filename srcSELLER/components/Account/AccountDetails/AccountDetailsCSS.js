import {StyleSheet} from 'react-native';



 const classes = StyleSheet.create({
     wrap:{
         height:'100%',
         width:'100%'

     },
    // mainWrap:{
    //     height:'10%'
    // },
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
    ScrollView:{
        paddingBottom: '5%'
    },

    detailsWrap:{
        marginBottom: '5%'
    },
    
    blockItem:{
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 13,
        marginBottom: 12,
        marginTop: 4
    },
   
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(23, 69, 59, 0.2)',
        borderRadius: 20,
        paddingLeft: 20,
        width: '90%',
        marginTop: '5%',
        marginBottom: '5%',
        alignSelf: 'center',
        paddingRight: 25,
    },

    input: {
        flex: 1,
        fontSize: 20,
        width: '85%',
        alignSelf: 'center',
        borderWidth: 0.1,
        shadowOffset: {
            width: 4,
            height: 10,
        },
        shadowColor: "rgba(23, 69, 59, 0.1)",
        margin: 10
    },
    searchIcon: {
        
        fontSize: 25,
        color: 'rgba(23, 69, 59, 0.8)'
    },
    textCell:{
        fontSize: 17,
        color: 'rgba(23, 69, 59, 0.8)',
        marginLeft: 30
    },
    detailsWrap3:{
        paddingBottom: '10%',
    }
})
export default classes