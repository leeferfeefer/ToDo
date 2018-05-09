import React, {Component} from "react";
import PropTypes from "prop-types";
import {StyleSheet, TextInput, View} from "react-native";


export default class InputField extends Component {

    state = {
      fieldValue: ""
    };

    onChange = (e) => {
        this.setState({fieldValue: e});
    };

    onSubmit = () => {
        const { addToDo } = this.props;
        const { fieldValue } = this.state;
        addToDo(fieldValue);
        this.setState({fieldValue: ""});
    };

    render() {
        const { fieldValue } = this.state;
        return <TextInput
            style={styles.inputField}
            autoCorrect={false}
            placeholder="Enter a todo"
            returnKeyType="done"
            value={fieldValue}
            onChangeText={this.onChange}
            onSubmitEditing={this.onSubmit}
        />
    }
}


const styles = StyleSheet.create({
    inputField: {

    }
});

InputField.propTypes = {
    addToDo: PropTypes.func
};
