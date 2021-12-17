import {StyleSheet} from 'react-native';


const classes = StyleSheet.create({
    wrap: {
        width: '100%',
        height: '100%',
    },
    detailsRow: {
        marginBottom: '10%',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        // height: '20%',
        alignSelf: 'center',
    },

    detailsItem: {
        width: '70%',
        flexDirection: 'row',
        padding: 20,
        backgroundColor: 'rgba(23, 69, 59, 0.8)',
        borderRadius: 20,
        marginHorizontal: '5%',



    },
    detailsSquare: {
        width: 60,
        height: 60,
        backgroundColor: '#fff',
        marginRight: 20,
        borderRadius: 10,
    },
    detailsCol: {
        width: '70%',
        flexDirection: 'column',
        justifyContent: 'space-between'

    },
    detailsSpan: {
        color: '#FFD600',
        fontSize: 16,
        fontWeight: 'bold',
    },
    detailsIcons: {
        width: '20%',
        height: 100,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    detailsIconsSquare: {
        width: 45,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: '5%',
        borderRadius: 20,
        backgroundColor: '#fff',
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
