import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import StartGameScreen from './screens/StartGameScreen'

const App = () => {
  return (
    <View style={styles.container}>
      <StartGameScreen/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    padding: 16,
    backgroundColor: '#4e0329',
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 8,
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 2},
    shadowRadius: 16,
    shadowOpacity: 0.25
  }
})

export default App