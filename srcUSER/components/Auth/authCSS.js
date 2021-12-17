import { StyleSheet } from 'react-native';

const classes = StyleSheet.create({
    wrap: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    Registration: {
        width: '80%',
        paddingVertical: 40,
        marginTop: '15%',
        borderRadius: 20,
        backgroundColor: '#17453BCC',
        alignSelf: 'center',
    },
    feliz: {
    },
    textFeliz: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
    },
    Reg: {
        paddingTop: '10%'
    },
    textReg: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 23,
    },
    input: {
        borderBottomColor: '#6E8B84',
        borderBottomWidth: 1,
        textAlign: 'center',
        color: '#fff',
        paddingTop: 20,
        width: '80%',
        alignSelf: 'center',
        fontSize: 16,
    },
    RegInput: {
        marginTop: '7%'
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

    }

});

export default classes;