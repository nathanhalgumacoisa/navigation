import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'

export default function Home() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TouchableOpacity style={styles.button} onpress={() => navigation.navigate("Profile")}>
        <Text>Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onpress={() => navigation.navigate("Contact")}>
        <Text>Contact</Text>
      </TouchableOpacity>
    </View>

  )
}

