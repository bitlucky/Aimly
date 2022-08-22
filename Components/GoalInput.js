import { View, TextInput, Button, StyleSheet } from 'react-native';
import React, {useState} from 'react';

const GoalInput = ({addGoalHandler}) => {
  const [inputGoals, setInputGoals] = useState();

  const goalInputHandler = (enteredGoal) => {
    setInputGoals(enteredGoal);
  };

  const onPressHandler = () => {
    addGoalHandler(inputGoals);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your goal!"
        onChangeText={goalInputHandler}
        value={inputGoals}
      />
      <Button title="Add your goal" onPress={onPressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 2,
    borderBottomColor: '#cccccc',
    marginBottom: 24,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    padding: 8,
    marginRight: 8,
    width: '70%',
  },
});

export default GoalInput;
