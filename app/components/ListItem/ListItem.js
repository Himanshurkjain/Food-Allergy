import React, { PropTypes } from 'react';
import { View, Text, Image, TouchableHighlight, Platform } from 'react-native';

import styles from './styles';
import { capitalizeFirstLetter } from '../../helpers/string';
import colors from '../../config/colors';

const ListItem = ({ restaurant, onPress }) => {
    const iconName = Platform.OS === 'ios' ? 'ios-arrow-forward' : 'md-arrow-forward';
    const name = `${capitalizeFirstLetter(restaurant.collection.title)}`;
    return (
        <TouchableHighlight
            onPress={onPress}
            underlayColor={colors.rowUnderlay}
        >
            <View style={styles.row}>
                <Image
                    style={styles.avatar}
                    source={{ uri: restaurant.collection.image_url }}
                />
                <View>
                    <Text style={styles.name}>{name}</Text>
                </View>
            </View>
        </TouchableHighlight>
    );
};

ListItem.propTypes = {
    contact: PropTypes.object,
    onPress: PropTypes.func,
};

export default ListItem;