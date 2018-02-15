/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Record from '../components/Record';
import { allergies } from '../config/data';
import colors from "../config/colors"

class Me extends Component {
    constructor(props) {
        super(props)
        this.state = { isChecked: false };
    }
  render() {
    return (

        <FlatList
            style={{ backgroundColor: colors.background }}
            data={allergies}
            renderItem={({item}) =>
                <Record item={item} />
            }
            keyExtractor={(item) => item.id}
        ></FlatList>

    );
  }
}

export default Me;
