import React from 'react';
import { View, AsyncStorage } from 'react-native';
import styles from "../../screens/styles";
import CheckBox from 'react-native-checkbox';

var selectedAllergies = [];

class Record extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isChecked: false};
        this.onChange = this.onChange.bind(this);

    }



  onChange(checked, item) {
        if(checked) {
            selectedAllergies.push(item.name);
        } else {
            var index = selectedAllergies.indexOf(item.name);
            selectedAllergies.splice(index,  index+1);
        }
        AsyncStorage.setItem('@allergies', selectedAllergies.toString());
        this.setState((prev) => ({isChecked:!prev.isChecked}));
    }

    render() {
        return( <View style={styles.row}>

            <CheckBox
                label={this.props.item.name}
                checked={this.state.isChecked}
                onChange={(checked) => this.onChange(!checked, this.props.item)}
            />

        </View>);
    }
}

export default Record;