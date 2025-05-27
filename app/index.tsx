import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ImageBackground
} from "react-native";

// import { useState } from "react";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ImageBackground
        source={require('../assets/images/firts-backg-presentation.jpg')}
        style={styles.background}
        resizeMode="cover"
      >
        {/* Capa de difuminado (overlay) */}
        <View style={styles.overlay}>
          <View style={styles.content}>
            <TouchableOpacity
              onPress={() => router.push('/crearCuenta')}
              style={styles.button1}
            >
              <Text style={styles.text2}>Iniciar sesión</Text>
            </TouchableOpacity>

            <Text style={styles.titulo}>Bienvenido a Dumblee</Text>
            <Text style={styles.slogan1}>La mejor alternativa a Amazon Kindle</Text>
          </View>

          <View style={{
            marginTop: '55%'
          }}>

            <Text style={styles.slogan2}>
              Descubre miles de libros gratuitos y premium al alcance de tu mano.
            </Text>

            <TouchableOpacity
              onPress={() => router.push('/crearCuenta')}
              style={styles.button2}
            >
              <Text style={styles.text1}>Registrate</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push('/crearCuenta')}
              style={styles.button3}
            >
              <Text style={styles.text2}>Comienza a leer</Text>
            </TouchableOpacity>
          </View>

        </View>

      </ImageBackground>
    </ScrollView>
  );
}

// Estilos
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    // backgroundColor: 'rgba(249 232 201 / 0.42)',
    backgroundColor: 'rgba(45, 49, 67, 0.38)', // Difuminado oscuro
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  content: {
    marginTop: '20%',
    width: '100%',
  },
  titulo: {
    fontSize: 59,
    textAlign: 'center',
    fontWeight: '700',
    fontStyle: 'italic',
    color: '#DDA853',
    marginBottom: 10,
  },
  slogan1: {
    fontSize: 22,
    fontWeight: '800',
    color: "#DDA853",
    textAlign: 'center',
    marginBottom: 5,
    marginTop: 8,
  },
  slogan2: {
    color: "#DDA853",
    fontWeight: '700',
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: 17,
    marginBottom: 40,
  },
  button1: {
    alignSelf: 'flex-end',
    marginBottom: 30,
    backgroundColor: '#98ABEE',
    padding: 15,
    borderRadius: 30,
    width: 160,
    shadowColor: '#f9e8ca',
  },
  button2: {
    alignSelf: 'center',
    marginBottom: 30,
    backgroundColor: '#201658',
    padding: 15,
    borderRadius: 30,
    width: 340,
  },
  button3: {
    alignSelf: 'center',
    marginBottom: 30,
    backgroundColor: '#98ABEE',
    padding: 15,
    borderRadius: 30,
    width: 340,
  },
  text1: {
    color: '#DDA853',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '600'
  },
  text2: {
    color: '#1D24CA',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '600'
  },
});
