import React, {useEffect, useState} from 'react';
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

const App = () => {
  const [intputText, guardarInputText] = useState('');
  const [nombreStorage, guardarNombreStorage] = useState('');

  useEffect(() => {
    obtenerDatosStorage();
  }, []);

  const guardarDatos = async () => {
    console.log('Guardando datos', intputText);

    try {
      await AsyncStorage.setItem('nombre', intputText);
    } catch (error) {
      console.log('Error al guardar los datos', error);
    }
  };

  const obtenerDatosStorage = async () => {
    try {
      const nombre = await AsyncStorage.getItem('nombre');
      console.log('Datos obtenidos', nombre);

      guardarNombreStorage(nombre);
    } catch (error) {
      console.log('Error al obtener los datos', error);
    }
  };

  return (
    <>
      <View style={styles.contenedor}>
        <Text>Hola {nombreStorage}</Text>

        <TextInput
          placeholder="Ingrese su nombre"
          style={styles.input}
          onChangeText={texto => guardarInputText(texto)}
        />

        <Button title="Guardar" color="#333" onPress={guardarDatos} />

        <TouchableHighlight style={styles.btnEliminar}>
          <Text style={styles.textoEliminar}>Eliminar Nombre &times;</Text>
        </TouchableHighlight>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    borderColor: '#666',
    borderBottomWidth: 1,
    width: 300,
    height: 40,
  },
  btnEliminar: {
    marginTop: 20,
    backgroundColor: 'red',
    padding: 10,
  },
  textoEliminar: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    width: 300,
  },
});

export default App;
