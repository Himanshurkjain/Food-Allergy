
import React, { Component, PropTypes } from 'react';
import { ScrollView, Text, View, FlatList, AsyncStorage } from 'react-native';

import colors from '../config/colors';
import styles from "../components/UserDetails/styles";

class MenuDetails extends Component {

    constructor(props) {
        super(props)
        this.state = { allergies: []};
    }

    render() {
        const collection = this.props.navigation.state.params;
        const selectedItems =  AsyncStorage.getItem('@allergies');
        var allergies = [];
        selectedItems
            .then((result) => {
                allergies = result.split(',');
                this.setState({allergies: allergies});
            })
            const  allergyItems = this.state.allergies;


            if(!allergyItems) {
                return "loading ..."
            }

        return (
            <ScrollView style={{ backgroundColor: colors.background }}>
                <View style={styles.headerContainer}>
                    <Text style={styles.name}>{collection.name}</Text>
                    <Text style={styles.actionBody}>Descriptions : {collection.description}</Text>
                    <Text style={styles.actionBody}>Ingredients :</Text>
                       <FlatList
                        style={styles.row}
                        data={collection.ingredients}
                        renderItem={({ item }) =>
                            <Text style={styles.name}>{item}</Text>
                        }
                        keyExtractor={(item) => item}
                        />

                    <FlatList
                        style={{ backgroundColor: colors.background }}
                        data={allergyItems}
                        renderItem={({ allergy }) =>
                            <Text style={styles.actionRow}>{allergy}</Text>
                        }
                        keyExtractor={(allergy) => allergy}
                    />
                </View>
            </ScrollView>
        );
    }
}

MenuDetails.propTypes = {
    navigation: PropTypes.object,
};

export default MenuDetails;
