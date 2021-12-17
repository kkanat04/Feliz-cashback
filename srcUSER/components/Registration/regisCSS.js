import { StyleSheet } from 'react-native';

const classes = StyleSheet.create({
    wrap: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    Registration: {
        width: '80%',
        paddingBottom: 20,
        borderRadius: 20,
        backgroundColor: '#17453BCC',
        alignSelf: 'center',
    },
    reg: {
        height: '75%',
        justifyContent: 'center',
    },
    feliz: {
        paddingTop: '13%'
    },
    textFeliz: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
    },
    Reg: {
        paddingTop: '8%'
    },
    textReg: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 22,
    },
    input: {
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        textAlign: 'center',
        color: '#fff',
        paddingTop: 25,
        width: '80%',
        alignSelf: 'center',
        fontSize: 16,
    },
    RegInput: {
        marginTop: '3%'
    },
    btn: {
        width: '60%',
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