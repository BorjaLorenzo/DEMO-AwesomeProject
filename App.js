import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Dimensions, Platform } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    fontSize: 25
  },
  containerLogin: {
    width: '33%',
    padding: '3%',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: 'powderblue'
  },
  containerLoginMobile: {
    width: '80%',
    display: 'flex',
    alignItems: 'center'
  },
  inputMobile: {
    textAlign: 'center',
    width: '100%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  input: {
    textAlign: 'center',
    width: '100%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  boton: {
    width: '50%',
    marginTop: '5%',
  },
  botonTexto: {
    fontSize: 25
  },
  tituloAzul: {
    color: 'navy'
  },
  h1: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 12,

    borderRadius: 10,
    elevation: 3,
    width:'150%'
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
const { width } = Dimensions.get('window');
const isMobile = width < 768;
const deviceType = isMobile ? 'Mobile' : 'Desktop';
const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [email, setEmail] = useState('');

  const handleRegister = () => {
    // Código para enviar los datos del formulario
  };
  var inputPantalla = () => {
    if (deviceType == "Mobile") {
      return styles.inputMobile
    } else {
      return styles.input
    }
  }
  var containerLoginPantalla = () => {
    if (deviceType == "Mobile") {
      return styles.containerLoginMobile
    } else {
      return styles.containerLogin
    }
  }
  return (
    <View style={styles.container}>
      <View style={containerLoginPantalla()}>
        <Text style={StyleSheet.flatten([styles.tituloAzul, styles.h1])}> INCOES</Text>
        <Text>Ingeniería y Control de estacionamientos</Text>


        <TextInput
          style={inputPantalla()}
          placeholder="Usuario"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={inputPantalla()}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
        />
        <View style={styles.boton}>
          {/* <Button title="Entrar" onPress={handleRegister} style={styles.boton} titleStyle={styles.botonTexto}/> */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RegisterForm;
