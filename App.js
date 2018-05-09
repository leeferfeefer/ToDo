/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ToDoList from "./src/components/ToDoList/ToDoList";
import InputField from "./src/components/InputField/InputField";


export default class App extends Component {

  state = {
      toDos: []
  };


  addToDo = (toDo) => {
      if (toDo !== "") {
          this.setState(prevState => {
              return {
                  toDos: prevState.toDos.concat(toDo)
              }
          })
      } else {
          alert("You must enter a valid todo!");
      }
  };

  render() {
    const { toDos } = this.state;
    return (
      <View style={styles.container}>
          <InputField addToDo={this.addToDo}/>
          <ToDoList toDos={toDos}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
