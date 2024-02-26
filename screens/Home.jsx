import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Home() {
  const Navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TouchableOpacity style={styles.button}>
        <Text>Perfil</Text>
      </TouchableOpacity>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor:"lightgray",
    color: "black",
  borderRadius: 5,
  }
})