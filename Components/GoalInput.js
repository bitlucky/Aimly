import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';
import React, { useState } from 'react';
import GoalList from './GoalList';

const GoalInput = ({
  addGoalHandler,
  isModalVisible,
  setModalVisibilityState,
  goals,
  showConfirmDialog,
}) => {
  const [inputGoals, setInputGoals] = useState();

  const goalInputHandler = (enteredGoal) => {
    setInputGoals(enteredGoal);
  };

  const onPressHandler = () => {
    addGoalHandler(inputGoals);
  };

  return (
    <Modal visible={isModalVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your goal!"
          onChangeText={goalInputHandler}
          value={inputGoals}
        />
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <Button title="Add your goal" onPress={onPressHandler} />
          </View>
          <Button
            title="Cancel"
            onPress={() => setModalVisibilityState(false)}
          />
        </View>
      </View>
      <GoalList goals={goals} showConfirmDialog={showConfirmDialog} />
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
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
  btnContainer: {
    marginTop: 20,
    flexDirection: 'row',
  },
  btn: {
    width: '40%',
    marginHorizontal: 10,
  },
});

export default GoalInput;
