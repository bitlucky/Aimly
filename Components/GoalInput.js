import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native';
import React, { useState } from 'react';

const GoalInput = ({
  addGoalHandler,
  isModalVisible,
  setModalVisibilityState,
}) => {
  const [inputGoals, setInputGoals] = useState();

  const goalInputHandler = (enteredGoal) => {
    setInputGoals(enteredGoal);
  };

  const onPressHandler = () => {
    addGoalHandler(inputGoals, setInputGoals);
  };

  return (
    <Modal visible={isModalVisible} animationType="slide">
      <View style={styles.inputContainer}>
      <Image style={styles.images} source={require('../assets/images/goal.png')} />
        <TextInput
          style={styles.textInput}
          placeholder="Enter your goal!"
          onChangeText={goalInputHandler}
          value={inputGoals}
        />
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
          <Button
            title="Cancel"
            onPress={() => setModalVisibilityState(false)}
            color="#f31282"
          />
          </View>
          <View style={styles.btn}>
            <Button title="Add your goal" onPress={onPressHandler} color="#5e0acc"/>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  images: {
    width: 100,
    height: 100,
    margin: 20
  },
  inputContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    padding: 16,
    margin: 8,
    width: '100%',
  },
  btnContainer: {
    marginTop: 20,
    flexDirection: 'row',
  },
  btn: {
    width: '40%',
    marginHorizontal: 10,
  },
  goalList: {
    padding: 20,
    height: 300,
    width: '100%',
  }
});

export default GoalInput;
