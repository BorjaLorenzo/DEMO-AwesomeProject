import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import { isMobile } from 'react-device-detect';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputMobile: {
    textAlign: 'center',
    width: '50%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color:'red'
  },
  input: {
    textAlign: 'center',
    width: '15%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color:'green'
  },
  button: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  tituloAzul: {
    color: 'navy'
  }
});

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [email, setEmail] = useState('');

  const handleRegister = () => {
    // Código para enviar los datos del formulario
  };
  const estiloPantalla = () => {
    if (isMobile) {
      return styles.input
    } else {
      return styles.inputMobile
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.tituloAzul}>INCOES</Text>
      <Text>Ingeniería y Control de estacionamientos</Text>


      <TextInput
        style={estiloPantalla()}
        placeholder="Usuario"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={estiloPantalla()}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
      />
      {/* <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      /> */}
      <Button title="Entrar" onPress={handleRegister} />
    </View>
  );
};

export default RegisterForm;
