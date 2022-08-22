import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  FlatList,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import GoalItem from './Components/GoalItem';
import GoalInput from './Components/GoalInput';

export default function () {
  const [goals, setGoals] = useState([]);

  const addGoalHandler = (inputGoals) => {
    setGoals((currentGoal) => [
      ...currentGoal,
      { key: goals.length + 1, text: inputGoals },
    ]);
  };

  const showConfirmDialog = (id) => {
    return Alert.alert(
      "Are you sure?",
      "Are you sure you want to remove this goal?",
      [
        {
          text: "Yes",
          onPress: () => {
            onDeleteHandler(id)
          },
        },
        {
          text: "No",
        },
      ]
    );
  };

  const onDeleteHandler = (id) => {
    console.log('DELETE');
    let goalsCopy = [...goals];
    goalsCopy = goalsCopy.filter((goals) => goals.key.toString() !== id.toString())
    setGoals(goalsCopy);
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput addGoalHandler={addGoalHandler} />
      <View>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return <GoalItem itemData={itemData} deleteItem={showConfirmDialog}/>;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    width: '90%',
  },
  goalText: {
    color: '#cccccc',
  },
  deleteButton: {
    marginLeft: 50,
  },
});
