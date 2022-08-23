import { View, TextInput, StyleSheet, Text, Pressable } from 'react-native';
import React from 'react';
import PrimaryButton from '../components/PrimaryButton';

const StartGameScreen = () => {
  return (
    <View>
      <TextInput
        style={styles.inputContainer}
        keyboardType="decimal-pad"
        maxLength={2}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.primaryButtonContainer}>
        <View style={styles.primaryButton}>
          <PrimaryButton title="Reset" color="#5e0acc" />
        </View>
        <View style={styles.primaryButton}>
          <PrimaryButton title="Confirm" color="#5e0acc" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    height: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  primaryButtonContainer: {
    flexDirection: 'row',
  },
});

export default StartGameScreen;
