import { StyleSheet } from 'react-native';

import colors from '../config/colors';

export default StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 8,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    name: {
        fontSize: 50,
        fontWeight: '500',
        color: colors.primaryText,
        alignContent: 'center'
    },
    email: {
        fontSize: 13,
        color: colors.subtleText,
    },
    separator: {},
    chevronContainer: {
        justifyContent: 'flex-end',
        flexGrow: 1,
    },
    chevron: {
        alignSelf: 'flex-end',
    }
});
