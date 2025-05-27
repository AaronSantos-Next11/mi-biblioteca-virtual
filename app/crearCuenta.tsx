import React from 'react'
import { useState } from "react";
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import { navigate } from "expo-router/build/global-state/routing";
import { useRouter } from "expo-router";

export default function crearCuenta() {

  const router = useRouter();
  const [user, setUser] = useState(''); // El estado del input "user" será un string
  const [pw, setPw] = useState('') // El estado del input "password" será un string

  const login = () => {
    if (user == "" || pw == "" ) {
      alert("Por favor de llenar los campos vacios")
    } else {
      if (user.toLocaleLowerCase() == "admin" && pw == "123") {
        alert("Bienvenido super admin");
        router.push('/(tabs)/home');
      } else {
        alert("User y password incorrectos")
      }
    }
  }

  return (

  <ScrollView>
    <View style={styles.contendorPrincipal}>


      <View style={{ marginTop: 10 }}>
      <Text style={styles.titulo}>Ingrese sus datos</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}> Nombre (s): </Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese su nombre (s) "
            placeholderTextColor="#999"
          />
        </View>
      
        <View style={styles.inputGroup}>
          <Text style={styles.label}> Apellidos: </Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese sus apellido"
            placeholderTextColor="#999"
            secureTextEntry={false}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}> Nombre de usuario: </Text>
          <TextInput
            style={styles.input}
            onChangeText={setUser}
            placeholder="Ingrese su nombre de usuario"
            placeholderTextColor="#999"
            secureTextEntry={false}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}> Email: </Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese su correo electrónico"
            placeholderTextColor="#999"
            secureTextEntry={false}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}> Número de teléfono: </Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese su número de teléfono"
            placeholderTextColor="#999"
            secureTextEntry={true}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}> Contraseña: </Text>
          <TextInput
            style={styles.input}
            onChangeText={setPw}
            placeholder="Ingrese su contraseña"
            placeholderTextColor="#999"
            secureTextEntry={true}
          />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 15, marginBottom: 58 }}>
          <View style={styles.contenedorbutton}>
            <TouchableOpacity onPress={()=>navigate('/')} style={styles.button1}>
              <Text style={{ color: '#122990', textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>
                Volver al inicio
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.contenedorbutton}>
              <TouchableOpacity onPress={ ()=> login() } style={styles.button2}>
                <Text style={{ color: '#DDA853', textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>
                  Crear cuenta
                </Text>
              </TouchableOpacity>
          </View>
        </View>

      </View>

    </View>
  </ScrollView>
  )
}

const styles = StyleSheet.create({
  contendorPrincipal: {
    flex: 1,
    backgroundColor: 'rgba(89, 113, 222, 0.3)',
    // marginTop: 1,
    paddingHorizontal: 20,
    // marginTop: 50
  },
  titulo: {
    fontSize: 34,
    fontWeight: '500',
    color: '#122990',
    marginBottom: 20,
  },
    inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 17,
    marginLeft: 10,
    marginBottom: 5,
    color: '#122990',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#fff',
    fontSize: 15,
    margin: 5,
    marginBottom: 2,
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#122990',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3.84,
    elevation: 2,
  },
  contenedorbutton: {
    // marginTop: 10,
    padding: 10,
  },
  button1: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 30,
    width: 160,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  button2: {
    backgroundColor: '#201658',
    padding: 14,
    borderRadius: 30,
    width: 160,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
})