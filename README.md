# Proyecto Async Storage

- Creación del proyecto:
  - `npx react-native init miProyecto --version 0.70`

## Tecnologiías

1. React Native
1. Asyn Storage:
   - Tener datos persistentes en la App.
   - `npm install @react-native-async-storage/async-storage`
   - Sistema de almacenamiento de tipo llave-valor (key-value) que es global a la App.
   - Similar a LocalStorage.
   - En iOS puede almacenar los valores en diccionarios o en archivos, mientras que en Android, utilizará SQLite o RocksDB.

### Métodos

- **setItem**: Almacena un elemento.
- **getItem**: Obtiene un elemento.
- **removeItem**: Elimina un elemento.
- **clear**: Elimina todo el contenido almacenado.
