import React, { Component, PropTypes } from 'react';
import { ScrollView ,FlatList } from 'react-native';

import { Header } from '../components/UserDetails';
import colors from '../config/colors';
import {menu} from "../config/data";
import MenuItem from "../components/MenuItem/MenuItem"

class Details extends Component {

    handleRowPress = (item) => {
        this.props.navigation.navigate('MenuDetails', item);
    };


  render() {
    const collection = this.props.navigation.state.params.collection;
    return (
      <ScrollView style={{ backgroundColor: colors.background }}>
        <Header {...collection} />
          <FlatList
              style={{ backgroundColor: colors.background }}
              data={menu}
              renderItem={({ item }) =>
                  <MenuItem menu={item} onPress={() => this.handleRowPress(item)} />
              }
              keyExtractor={(item) => item.id}
          />
      </ScrollView>
    );
  }
}

Details.propTypes = {
  navigation: PropTypes.object,
};

export default Details;
