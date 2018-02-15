import React, { PropTypes } from 'react';
import { View } from 'react-native';
import moment from 'moment';

import styles from './styles';
import Row from './Row';

const Info = () => (
  <View style={styles.infoContainer}>
    <Row
      label="city"
      body="just 1 item"
    />
    <Row
      label="birthday"
    />
    <Row
      label="registered"
    />
    <Row
      label="username"
    />
  </View>
);

Info.propTypes = {
  location: PropTypes.object,
  login: PropTypes.object,
  dob: PropTypes.string,
  registered: PropTypes.string,
};

export default Info;
