/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text, TouchableHighlight,
    View
} from 'react-native';
import ToDoList from "./src/components/ToDoList/ToDoList";
import InputField from "./src/components/InputField/InputField";
import MyModal from "./src/components/Modal/MyModal";


export default class App extends Component {

  state = {
      toDos: [],
      modal: {
          isVisible: false
      }
  };

  addToDo = (toDo) => {
      console.log("debug");
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

  closeModal = () => {
      const modal = {
          isVisible: false
      };
      this.setState({modal: modal});
  };

  showModal = () => {
      const modal = {
          isVisible: true
      };
      this.setState({modal: modal});
  };

  render() {
    const { toDos, modal } = this.state;
    console.log("MODAL", modal);
    return (
      <View style={styles.container}>
          <InputField addToDo={this.addToDo}/>
          <ToDoList toDos={toDos}/>

          <TouchableHighlight
              onPress={() => {
                  this.showModal();
              }}>
              <Text>Show Modal</Text>
          </TouchableHighlight>
          <MyModal isVisible={modal.isVisible} closeModal={this.closeModal}/>
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
  },
    inputContainer: {
        // flex: 1,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
    }
});
