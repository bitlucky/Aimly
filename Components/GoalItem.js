import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';

const GoalItem = ({ itemData, deleteItem }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#dddddd' }}
        onPress={() => deleteItem(itemData.item.key)}
      >
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    padding: 8,
    color: '#cccccc',
  },
});

export default GoalItem;
