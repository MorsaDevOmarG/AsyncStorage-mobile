import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  useColorScheme,
  View,
} from 'react-native';

export default function Async() {
  useEffect(() => {
    const obtenerAS = async () => {
      try {
        const valor = await AsyncStorage.getItem('pruebas_as');

        console.log(valor);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerAS();
  }, []);

  return <Text>Async</Text>;
}
