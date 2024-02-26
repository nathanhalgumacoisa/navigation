import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'

export default function Home() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      
      <TouchableOpacity style={styles.button} onpress={() => navigation.navigate.home}>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onpress={() => navigation.navigate.profile}>
        <Text>Perfil</Text>
      </TouchableOpacity>
      <Text>Home</Text>
    </View>

  )
}
