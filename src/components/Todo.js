import React, { Component } from "react";
import {
  AppRegistry,
  Text,
  View,
  FlatList,
  TextInput,
} from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import styles from '../styles/todo';
import { TouchableOpacity } from "react-native-gesture-handler";

const viewPadding = 10;

export default class TodoList extends Component {
  state = {
    tasks: [],
    text: ""
  };

  changeTextHandler = text => {
    this.setState({ text: text });
  };

  addTask = () => {
    let notEmpty = this.state.text.trim().length > 0;

    if (notEmpty) {
      this.setState(
        prevState => {
          let { tasks, text } = prevState;
          return {
            tasks: tasks.concat({ key: tasks.length, text: text }),
            text: ""
          };
        },
        () => Tasks.save(this.state.tasks)
      );
    }
  };

  deleteTask = i => {
    this.setState(
      prevState => {
        let tasks = prevState.tasks.slice();

        tasks.splice(i, 1);

        return { tasks: tasks };
      },
      () => Tasks.save(this.state.tasks)
    );
  };

  componentDidMount() {
    Tasks.all(tasks => this.setState({ tasks: tasks || [] }));
  }

  render() {
    return (
      <View
        style={[styles.container, { paddingBottom: this.state.viewPadding }]}
      >
        <Text style={styles.text}>To do list</Text>
        <FlatList
          style={styles.list}
          data={this.state.tasks}
          renderItem={({ item, index }) =>
              <View style={styles.listItemCont}>
                <Text style={styles.listItem}>
                  {item.text}
                </Text>
                <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => this.deleteTask(index)}>
                  <Text style={styles.buttonText}>X</Text>
                  </TouchableOpacity>
              </View>
            </View>}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={this.changeTextHandler}
          onSubmitEditing={this.addTask}
          value={this.state.text}
          placeholder="Add Tasks"
          returnKeyType="done"
          returnKeyLabel="done"
        />
      </View>
    );
  }
}

let Tasks = {
  convertToArrayOfObject(tasks, callback) {
    return callback(
      tasks ? tasks.split("||").map((task, i) => ({ key: i, text: task })) : []
    );
  },
  convertToStringWithSeparators(tasks) {
    return tasks.map(task => task.text).join("||");
  },
  all(callback) {
    return AsyncStorage.getItem("TASKS", (err, tasks) =>
      this.convertToArrayOfObject(tasks, callback)
    );
  },
  save(tasks) {
    AsyncStorage.setItem("TASKS", this.convertToStringWithSeparators(tasks));
  }
};

AppRegistry.registerComponent("TodoList", () => TodoList);