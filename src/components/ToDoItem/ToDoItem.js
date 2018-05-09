import React from "react";
import PropTypes from "prop-types";
import {StyleSheet, Text} from "react-native";
import toDoList from "../ToDoList/ToDoList";


// functional way of writing a stateless component

const toDoItem = props => {
    const { toDo } = props;
    return <Text>{toDo}</Text>
};


const styles = StyleSheet.create({

});



toDoItem.propTypes = {
    toDo: PropTypes.string
};

export default toDoItem;
