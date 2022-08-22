import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';

const GoalItem = ({itemData, deleteItem}) => {
  return (
    <Pressable onPress={() => deleteItem(itemData.item.key)}>
    <View>
      <Text style={styles.goalItem}>{itemData.item.text}</Text>
    </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: '#cccccc',
  },
});

export default GoalItem;
