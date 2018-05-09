import React from "react";
import PropTypes from "prop-types";
import {StyleSheet, View} from "react-native";
import ToDoItem from "../ToDoItem/ToDoItem";


const toDoList = props => {
    const { toDos } = props;
    const showToDos = toDos.map((toDo, i) => {
        return <ToDoItem key={i} toDo={toDo}/>
    });
    return <View>{showToDos}</View>
};


const styles = StyleSheet.create({

});



toDoList.propTypes = {
  toDos: PropTypes.array
};

export default toDoList;