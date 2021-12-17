import {StyleSheet} from 'react-native';

const classes = StyleSheet.create({
        searchSection: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(23, 69, 59, 0.2)',
            borderRadius: 20,
            paddingLeft: 30,
            width: '90%',
            marginTop: '10%',
            marginBottom: '10%',
            alignSelf: 'center'
        },

        input: {
            flex: 1,
            paddingLeft: 15,
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
            height: 25,
            width: 25,
            padding: 10,
            zIndex: 20,

        },
    }
)
export default classes