import React, { PropTypes } from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';
import { capitalizeFirstLetter } from '../../helpers/string';

const Header = ({ image_url, title }) => (
  <View style={styles.headerContainer}>
    <Image
      source={{ uri: image_url }}
      style={styles.image}
    />
    <Text style={styles.name}>
      {capitalizeFirstLetter(title)}
    </Text>
  </View>
);

Header.propTypes = {
  picture: PropTypes.object,
  name: PropTypes.object,
};

export default Header;
