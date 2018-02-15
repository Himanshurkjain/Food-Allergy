/* eslint-disable react/prefer-stateless-function */

import React, { Component, PropTypes } from 'react';
import { ScrollView } from 'react-native';

import { Header, Info } from '../components/UserDetails';
import colors from '../config/colors';

class Details extends Component {
  render() {
    const collection = this.props.navigation.state.params.collection;
    return (
      <ScrollView style={{ backgroundColor: colors.background }}>
        <Header {...collection} />
        <Info/>
      </ScrollView>
    );
  }
}

Details.propTypes = {
  navigation: PropTypes.object,
};

export default Details;
