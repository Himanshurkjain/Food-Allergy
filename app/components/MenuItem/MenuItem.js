import React, { PropTypes } from 'react';
import { View, Text, Image, TouchableHighlight, Platform } from 'react-native';

import styles from './styles';
import { capitalizeFirstLetter } from '../../helpers/string';
import colors from '../../config/colors';

const MenuItem = ({ menu, onPress }) => {
    const iconName = Platform.OS === 'ios' ? 'ios-arrow-forward' : 'md-arrow-forward';
    const name = `${capitalizeFirstLetter(menu.name)}`;
    return (
        <TouchableHighlight
            onPress={onPress}
            underlayColor={colors.rowUnderlay}
        >
            <View style={styles.row}>
                <View>
                    <Text style={styles.name}>{name}</Text>
                </View>
            </View>
        </TouchableHighlight>
    );
};

MenuItem.propTypes = {
    contact: PropTypes.object,
    onPress: PropTypes.func
};

export default MenuItem;