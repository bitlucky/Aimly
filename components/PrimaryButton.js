import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';

const PrimaryButton = ({ title, color }) => {
  const onPressHandler = () => console.log('pressed');
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable style={styles.buttonInnerContainer} onPress={onPressHandler} android_ripple={{ color: '#640233' }}>
        <Text style={styles.buttonText}>{title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    overflow: 'hidden',
    margin: 4,
  },
  buttonInnerContainer: {
    backgroundColor: '#72063c',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default PrimaryButton;
