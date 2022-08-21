import { View, Text, TextInput, StyleSheet, Button, ScrollView } from 'react-native'
import React, { useState } from 'react'

export default function () {
  const [inputGoals, setInputGoals] = useState()
  const [goals, setGoals] = useState([])

  const goalInputHandler = (enteredGoal) => {
    setInputGoals(enteredGoal);
  }

  const addGoalHandler = () => {
    setGoals(currentGoal => [...currentGoal, { id: goals.length + 1, goal: inputGoals}]);
  }
  console.log(goals);

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your goal!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add your goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalContainer}>
        <ScrollView>
          {goals.map((goal) => (
            <View key={goal.id}>
              <Text style={styles.goalItem}>
                {goal.goal}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    width: '90%'
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 2,
    borderBottomColor: '#cccccc',
    marginBottom: 24
  },
  textInput:{
    borderWidth: 1,
    borderColor: '#cccccc',
    padding: 8,
    marginRight: 8,
    width: '70%'
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: '#cccccc'
  },
  goalText: {
    color: '#cccccc'
  },
  deleteButton: {
    marginLeft: 50
  }
})