import {StyleSheet} from 'react-native';

const classes = StyleSheet.create({
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
    }
)
export default classes