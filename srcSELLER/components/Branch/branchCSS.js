import {StyleSheet} from 'react-native';

const classes = StyleSheet.create({
    wrap: {
        width: '100%',
        height: '100%',
    },
    branchWrap: {
        height: '50%',
        marginTop: '15%',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    branchMainText: {
        color: 'rgba(23, 69, 59, 0.8)',
        fontSize: 26,
        fontWeight: 'bold'
    },
    branchItems: {
        backgroundColor: 'rgba(23, 69, 59, 0.8)',
        width: '80%',
        paddingVertical: 38,
        borderRadius: 20,
    },
    branchText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff'
    },
});

export default classes;
