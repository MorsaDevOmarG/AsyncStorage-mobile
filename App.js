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
import AsyncStorage from '@react-native-async-storage/async-storage';
import Async from './src/components/Async';

const App = () => {
  useEffect(() => {
    const almacenarAS = async () => {
      // const nombre = 'storage';
      const nombre = [1, 2, 3];

      // await AsyncStorage.setItem('pruebas_as', nombre);
      await AsyncStorage.setItem('pruebas_as', JSON.stringify(nombre));
      console.log('Almacenando');
    };

    almacenarAS();
  }, []);

  return (
    <>
      <View style={styles.contenedor}>
        <TextInput />

        <Button title="Guardar" color="#333" />

        <TouchableHighlight>
          <Text>Eliminar Nombre &times;</Text>
        </TouchableHighlight>
      </View>
      <Async />
    </>
  );
};

const styles = StyleSheet.create({
  contenedor: {},
});

export default App;
