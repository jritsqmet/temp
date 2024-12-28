import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'

export default function Pagina4Screen() {

    const [kelvin, setkelvin] = useState(0)
    const [celcius, setcelcius] = useState(0)
    const [farh, setfarh] = useState(0)


    function calcular(){
        setcelcius( kelvin- 273.15)
        setfarh( ((kelvin- 273.15)* 1.8 ) +32 )
        Alert.alert('Solución', "La temperatura en °C es "+ celcius +"\nLa temperatura el °F es "+ farh)
    }

  return (
    <View>
      <Text>Calculadora</Text>
      <TextInput
      placeholder='Ingresar Kelvin'
         style={styles.input}
         onChangeText={(texto)=> setkelvin(+texto)}
      />
      <Button title='Calcular' onPress={  () =>calcular()}/>
    </View>
  )
}

const styles = StyleSheet.create({
    input:{
        backgroundColor:'#6666'
    }
})