import { FlatList, View, Text } from 'react-native';
import GoalItem from './GoalItem';
import React from 'react';

const GoalList = ({ goals, showConfirmDialog }) => {
  return (
    <View>
      <FlatList
        data={goals}
        renderItem={(itemData) => {
          return (
            <GoalItem itemData={itemData} deleteItem={showConfirmDialog} />
          );
        }}
      />
    </View>
  );
};

export default GoalList;
