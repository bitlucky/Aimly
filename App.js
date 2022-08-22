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
import GoalList from './Components/GoalList';
import { StatusBar } from 'expo-status-bar';

export default function () {
  const [goals, setGoals] = useState([]);
  const [modalVisibilityState, setModalVisibilityState] = useState(false);

  const addGoalHandler = (inputGoals, setInputGoals) => {
    setGoals((currentGoal) => [
      ...currentGoal,
      { key: goals.length + 1, text: inputGoals },
    ]);
    setInputGoals('');
  };

  const showConfirmDialog = (id) => {
    return Alert.alert(
      'Are you sure?',
      'Are you sure you want to remove this goal?',
      [
        {
          text: 'Yes',
          onPress: () => {
            onDeleteHandler(id);
          },
        },
        {
          text: 'No',
        },
      ]
    );
  };

  const onDeleteHandler = (id) => {
    let goalsCopy = [...goals];
    goalsCopy = goalsCopy.filter(
      (goals) => goals.key.toString() !== id.toString()
    );
    setGoals(goalsCopy);
  };

  return (
    <>
    <StatusBar style='light' />
    <View style={styles.appContainer}>
      <View styles={styles.addNewGoal}>
        <Button
          title="Add New Goal"
          color="#5e0acc"
          onPress={() => setModalVisibilityState(true)}
        />
      </View>
      <GoalInput
        addGoalHandler={addGoalHandler}
        isModalVisible={modalVisibilityState}
        setModalVisibilityState={setModalVisibilityState}
      />
      <GoalList goals={goals} showConfirmDialog={showConfirmDialog} />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  addNewGoal: {
    padding: 20,
  },
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    width: '100%',
    backgroundColor: '#1e085a'
  },
  goalText: {
    color: '#cccccc',
  },
  deleteButton: {
    marginLeft: 50,
  },
});
