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

const App = () => {
  useEffect(() => {
    const almacenarAS = async () => {
      const nombre = '';

      await AsyncStorage.setItem('pruebas_as', nombre);
    };

    console.log('Almacenando');
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
    </>
  );
};

const styles = StyleSheet.create({
  contenedor: {},
});

export default App;
